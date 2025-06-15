import ContactMe from "@/Components/ContactMe.js/ContactMe";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import Navbar from "@/Components/Navbar/Navbar";
import Tabmain from "@/Components/TabSelector/Tabmain";
import WhatIDo from "@/Components/WhatIDo/WhatIDo";

export default function Home() {
  return (
    <div className="h-auto w-auto bg-[#212428] relative">
      <Navbar />
      <Hero />
      <WhatIDo />
      <Tabmain />
      <ContactMe />
      <Footer />
    </div>
  );
}
