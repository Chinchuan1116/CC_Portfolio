import React from 'react'
import { BsGithub, BsWhatsapp } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  const link = (url)=>{
    window.open(url,'_blank')
  }

  return (
    <div className='app__social'>
      <div  onClick={() => {link('https://api.whatsapp.com/send?phone=601110759066&text=Hi%20CC%20Lim,%20nice%20to%20meet%20you!')}}>
        <BsWhatsapp/>
      </div>
      <div  onClick={() => {link('https://www.facebook.com/chinchuan.lim.39/')}}>
        <FaFacebookF/>
      </div>
      <div  onClick={() => {link('https://github.com/Chinchuan1116')}}>
        <BsGithub/>
      </div>
    </div>
  )
}

export default SocialMedia