import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomeMain from "./components/Home/HomeMain"
import BlogMain from "./components/Blog/BlogMain"
import BlogSection from "./components/Pages/BlogSection"
import BlogVisitSection from "./components/Blog/BlogVisitSection";
import ContactMain from "./components/Contact/ContactMain";
import AboutMain from "./components/About/AboutMain";
import ServiceMain from "./components/Service/ServiceMain";
import TeamVisitSection from "./components/Service/TeamVisitSection";
import OrderMain from "./components/TrackOrder/OrderMain";
import FreightSection from "./components/Pages/FreightSection";
import WorkingSection from "./components/Pages/WorkingSection";

function App() {


  return (
    <>
    
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<AboutMain/>} />
        <Route path="/service" element={<ServiceMain/>} />
        <Route path="/teams" element={<TeamVisitSection/>} />
        <Route path="/blogs" element={<BlogMain/>}/>
        <Route path="/blogsvisit" element={<BlogVisitSection/>} />
        <Route path="/contact" element={<ContactMain/>} />
        <Route path="/trackorder" element={<OrderMain/>} />        
        <Route path="*" element={"404 Somthing went wrong"} />

      </Routes>
       <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
