import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer className='App-footer'>
         <br /><br /><br /><br /><br /><br /><br /><br />
         <br /><br /><br /><br /><br /><br /><br /><br />
         <br /><br /><br /><br /><br /><br /><br /><br />
         <br /><br /><br /><br /><br /><br /><br /><br />
         <small>
           text2 Version March 2023. ALX Specialization project.
           Convert text 2 speech, image, or pdf.
         </small>
         <section>
           <map name='flogo'>
             <a href='/' title='text2 logo'><area shape='circle' coords='75,75,75'
              alt='Home page' /></a>
           </map>
           <a href='/' title='text2 logo'><img usemap="#flogo"
             src="fav22.ico" title="text2 logo" alt="txt2 logo" width="80" height="70" /></a>
         </section>
         {/* <br /><br /><br /> */}
       </footer>
    </div>
  )
}

export default Footer