import './App.css';
import Navbar from "./componenets/navbar/navbar";
import Intro from "./componenets/intro/intro";
import Skills from "./componenets/skills/skills";
import About from "./componenets/about/about";
import Portfolio from "./componenets/portfolio/portfolio";
import Review from "./componenets/review/review";
import Contact from "./componenets/contact/contact";
import Footer from "./componenets/footer/footer";


function App() {
  return (
    <div className="App">
      <div className="bubble">
        <Navbar/>
        <Intro/>
        <Skills/>
        <About/>
        <Portfolio/>
        <Review/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App;