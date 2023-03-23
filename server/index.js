const docxConverter = require("docx-pdf");
const express = require("express");
const multer = require("multer");
 
let path = require("path");
const bodyparser = require("body-parser");
 
const app = express();
app.use(express.static("uploads"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
let upload = multer({ storage });

const cors = require("cors");
app.use(cors());
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
  };
  app.use(cors(corsOptions));

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
 
app.post("/docxtopdf", upload.single("file"), (req, res) => {
  let outputpath = Date.now() + "output.pdf";
  docxConverter(req.file.path, outputpath, function (err, result) {
    if (err) {
      console.log(err);
    }
    res.download(outputpath, "output.pdf", (err) => {
        if (err) {
            console.log(err);
          } else {
            console.log("File downloaded successfully!");
          }
    })
  });
});
 
app.listen(5000, () => {
  console.log("App is listening on port 5000");
});