const consts = require("./Consts.js");

const path      = require("path");
const ejs       = require("ejs");
const stat2desc = require("http-status");

class SNSError extends Error {
  constructor(status, info) {
    super();

    this.name = status.toString();
    this.message = info;
    this.desc = stat2desc[this.status];
  }

  get status() {
    return this.name;
  }

  get info() {
    return this.message;
  }

  toString() {
    return `Error ${this.status} (${this.desc}): ${this.message}`;
  }
}

function show_error(req, res, e) {
  ejs.renderFile(
    path.join(consts.PUBLIC_DIR, "error/error.html"),
    {status: e.status, desc: e.desc, info: e.info},
    (err, str) => {
      if (err) {
        if (status === 508) {
          res.status(508);
          res.setHeader("Content-Type", "text/html");
          res.send(consts.HTML508);
        }
        else if (status === 500) {
          show_error(
            req, res, new SNSError(508, "Failed to report an error reporting failure.")
          );
        }
        else {
          show_error(
            req, res, new SNSError(500, `Failed to report error ${e.toString()}.`)
          );
        }
      }
      else {
        res.status(e.status).send(str);
      }
    }
  );
}

function on_send_error(req, res, e) {
  return (err) => {
    if (err) {
      show_error(req, res, e);
    }
  }
}

exports.SNSError = SNSError;
exports.show_error = show_error;
exports.on_send_error = on_send_error;
