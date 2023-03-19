import './UploadArea.css'

const Upload = () => {

  const docs2pdf = () => {
    let docxConverter = require("docx-pdf");
    const express = require("express");
    const multer = require("multer");
    let path = require("path");
    const bodyparser = require("body-parser");

    const app = express();

    app.use(express.static("uploads"));
    app.use(bodyparser.urlencoded({ extended: false }));
    app.use(bodyparser.json());

    let storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "uploads");
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
      },
    });

    let upload = multer({ storage: storage });

    app.get("/upload", (req, res) => {
      res.sendFile(__dirname + "/index.html");
    });

    app.post("/docxtopdf", upload.single("file"), (req, res) => {
      let outputpath = Date.now() + "output.pdf";
      docxConverter(req.file.path, outputpath, function (err, result) {
        if (err) {
          console.log(err);
        }
        res.download(outputpath,() => {

        })
      });
    });
  }
  
  return (
    <div className='up'>
      <h1>Convert DOCX to PDF</h1>
      <br /><br />
      <div>
        <form action="/docxtopdf" method="post" enctype="multipart/form-data">
          <input type="file" name="file" required id="" />
          <input type="submit" value="Download PDF File"
            onClick={docs2pdf} />
      </form>
      </div>
    </div>
  )
}

export default Upload