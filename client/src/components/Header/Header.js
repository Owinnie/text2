import React, { useState } from 'react'
import {IoMdChatboxes, IoMdClose, IoMdMenu} from 'react-icons/io'
import {BsCloudUploadFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {

    const [active, setActive] = useState(false)

    const activateNav = () => {
        setActive(!active)
    }

  return (
    <div className={active ? 'header' : 'header-mobile'}>

        <div className='menu-icon' onClick={activateNav}>
            {
                !active ? <IoMdMenu className='menu' />
                : <IoMdClose className='menu' />
            }
        </div>

        <nav>
            <ul className={active ? 'ul-item' : 'ul-item oicon'}>
                <li>
                    <IoMdChatboxes className='icon'/>
                    <Link to='/chat' className='link'>Chat</Link>
                </li>

                <li>
                    <BsCloudUploadFill className='icon'/>
                    <Link to='/upload' className='link'>Upload</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header