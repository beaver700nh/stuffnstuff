const path    = require("path");
const express = require("express");
const app     = express();
const PORT    = 8080;

const PUBLIC_DIR = path.join(__dirname, "public");

app.use(express.static(PUBLIC_DIR));

app.get(
	"/",
	(req, res) => {
		res.sendFile(path.join(PUBLIC_DIR, "index/index.html"));
	}
);

app.listen(
	PORT,
	() => {
		console.log(`StuffNStuff server is up and running on port ${PORT}`);
	}
);

app.use(
	(req, res) => {
		res.status(404).sendFile(path.join(PUBLIC_DIR, "error/error.html"));
	}
);
