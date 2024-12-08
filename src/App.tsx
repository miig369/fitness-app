
import { useState, useEffect } from "react";
import { SelectedPage } from "./shared/types";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Benefits from "./components/Benefits";
import OurClasses from "./components/classes";
import Footer from "./components/footer";
import ContactUs from "./components/contact";


function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar  isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Hero setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App
