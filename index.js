const consts  = require("./Consts.js");
const snserr  = require("./SNSErr.js");

const path    = require("path");
const ejs     = require("ejs");
const express = require("express");
const app     = express();

app.use(express.static(consts.PUBLIC_DIR));

app.use(
  (req, res, next) => {
    console.log(`Got a ${req.method} request for url ${req.url}`);
    next();
  }
);

app.get(
  "/",
  (req, res) => {
    res.sendFile(
      path.join(consts.PUBLIC_DIR, "index/index.html"),
      snserr.on_send_error(
        req, res, new snserr.SNSError(500, "The server failed to find the main page.")
      )
    );
  }
);

app.get(
  "/favicon.ico",
  (req, res) => {
    res.sendFile(
      path.join(consts.PUBLIC_DIR, "index/favicon.ico"),
      snserr.on_send_error(
        req, res, new snserr.SNSError(500, "The server failed to find the website logo.")
      )
    )
  }
)

app.get(
  "/equasol",
  (req, res) => {
    res.sendFile(
      path.join(consts.PUBLIC_DIR, "equasol/equasol.html"),
      snserr.on_send_error(
        req, res, new snserr.SNSError(500, "The server failed to find EquaSol.")
      )
    );
  }
);

app.get(
  "/rpl",
  (req, res) => {
    res.sendFile(
      path.join(consts.PUBLIC_DIR, "rpl/index.html"),
      snserr.on_send_error(
        req, res, new snserr.SNSError(500, "The server failed to find RPL.")
      )
    );
  }
);

app.get(
  "/foo",
  (req, res) => {
    snserr.show_error(
      req, res, new snserr.SNSError(200, "Task failed successfully.")
    );
  }
)

app.get(
  "/error/:estat-:emsg",
  (req, res) => {
    snserr.show_error(
      req, res, new snserr.SNSError(req.params.estat, req.params.emsg)
    );
  }
)

app.listen(
  consts.PORT,
  () => {
    console.log(`StuffNStuff server is up and running on port ${consts.PORT}.`);
  }
);

app.use( // No routes - assume error 404
  (req, res) => {
    return res.redirect("/error/404-The%20server%20could%20not%20find%20the%20requested%20file%2E")
  }
);
