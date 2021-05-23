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

// let server = http.createServer(
// 	function (req, res) {
// 		var url_query = new URL("http://example.com" + req.url);

// 		console.log(url_query.pathname);

// 		if (url_query.pathname === "/") {
// 		  send_file(HTML_DIR + "index/index.html", req, res, 200, "text/html");
// 		}
// 		else if (url_query.pathname === "/style.css") {
// 			send_file(HTML_DIR + "index/style.css", req, res, 200, "text/css");
// 		}
// 		else {
// 			//send_dir(path.join(HTML_DIR, "error"), req, res, 404, {js: null});
// 			send_file(HTML_DIR + "error/error.html", req, res, 404, "text/html");
// 			send_file(HTML_DIR + "error/style.css", req, res, 404, "text/css");
// 		}
// 	}
// );

// function send_dir(dir, req, res, status, filenames) {
// 	const files = {
// 		html: (filenames.html === undefined ? path.join(dir, "index.html") : filenames.html),
// 		js:   (filenames.js   === undefined ? path.join(dir, "script.js")  : filenames.js),
// 		css:  (filenames.css  === undefined ? path.join(dir, "style.css")  : filenames.css),
// 	};

// 	if (files.html != null) send_file(files.html, req, res, status, "text/html");
// 	if (files.js   != null) send_file(files.js,   req, res, status, "text/js");
// 	if (files.css  != null) send_file(files.css,  req, res, status, "text/css");
// }

// function send_file(file, req, res, status, type) {
// 	fs.readFile(
// 		file,
// 		function (err, data) {
// 			if (err && (Math.floor(status / 100) != 4)) {
// 				send_dir(path.join(HTML_DIR, "error"), req, res, 404);

// 				return res.end();
// 			}

// 			res.writeHead(200, {"Content-Type": type || file.split(".").pop()});
// 			res.write(data);

// 			return res.end();
// 		}
// 	);
// }

// function send_html(file, req, res) { // For debugging
// 	fs.readFile(
// 		file,
// 		function (err, data) {
// 			if (err) {
// 				res.write("There was an error");

// 				return res.end();
// 			}

//       res.writeHead(200, {"Content-Type": "text/html"});
// 			res.write(data);

// 			return res.end();
// 		}
// 	);
// }

// server.listen(PORT);
// console.log("Server up and running on port " + PORT);
