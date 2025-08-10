import NavBar from "./Components/NavBar";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen min-w-screen bg-white text-black">
      <div className="z-1000 flex flex-col justify-center items-center">
        <NavBar/>
      </div>
      
      <MainContent/>
      <Footer/>
    </div>
  );
}
