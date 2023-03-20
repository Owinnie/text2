import './UploadArea.css'

const Upload = () => {

  
  
  return (
    <div className='up'>
      <h1>Convert DOCX to PDF</h1>
      <br /><br />
      <div>
        <form action="/docxtopdf" method="post" enctype="multipart/form-data">
          <input type="file" name="file" required id="" />
          <input type="submit" value="Download PDF File" />
      </form>
      </div>
    </div>
  )
}

export default Upload