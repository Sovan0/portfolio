import React from 'react'
import "./footer.css";
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';

const footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span>adrian_carp@ymail.com</span>
            <div className="f-icons">
                <Insta color='#f9004d' size='3rem'/>
                <Facebook color='#f9004d' size='3rem'/>
                <Github color='#f9004d' size='3rem'/>
            </div>
        </div>
    </div>
  )
}

export default footer