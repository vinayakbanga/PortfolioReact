import Header,{HeaderPhone} from "./components/Header";
import Home from "./components/Home.jsx";
import Work from "./components/Work.jsx";
import Timeline from "./components/timeline.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx"
import Contact from "./components/contact.jsx"
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx"
import { useState } from "react";


function App() {
const [menuOpen,setMenuOpen] = useState(false);
console.log(menuOpen);

  return (
    <>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Header menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
    <Home/>
    <Work/>
    <Timeline/>
    <Services/>
    <Testimonials/>
    <Contact/>
    <Toaster/>
    <Footer/>
    </>
    
  );
}

export default App;
