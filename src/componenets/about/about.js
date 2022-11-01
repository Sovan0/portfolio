import React from 'react'
import "./about.css";
import me from '../../img/me.jpg';

const about = () => {
  return (
    <section className="about" id="about">
        <div className="a-main">
            <img src={me} alt="" />
            <div className="a-text">
                <h2>About me</h2>
                <h5>Developer <span>& Designer</span></h5>
                <p>My name is Adrian Carp. I graduated the Faculty of Automatic Control and Computer Engineering from Iasi. Specialization Automatic Control and Applied Informatics. I don't have work experience but I had practice hours during faculty. I also learnt a lot of things in connection with web development from the internet. I am a person who likes to read, learn new things, sociable. I play football weekly and I relax training myself.</p>
            </div>
        </div>
    </section>
  )
}

export default about