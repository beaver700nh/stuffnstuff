const consts  = require("./Consts.js");
const snserr  = require("./SNSErr.js");

const path    = require("path");
const ejs     = require("ejs");
const express = require("express");
const app     = express();

app.use(express.static(consts.PUBLIC_DIR));

app.use(
  (req, res, next) => {
    console.log(`GOT A REQUEST for url ${req.url}`);
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

app.listen(
  consts.PORT,
  () => {
    console.log(`StuffNStuff server is up and running on port ${consts.PORT}.`);
  }
);

app.use( // No routes - assume error 404
  (req, res) => {
    snserr.show_error(
      req, res, new snserr.SNSError(404, "The server could not find the requested file.")
    );
  }
);
