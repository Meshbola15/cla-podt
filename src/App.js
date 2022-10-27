import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Chart from "./components/Chart/Chart";
import Counter from "./components/Counter/Counter";
import Crypto from "./components/Crypto/Crypto";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Infomation from "./components/Information/Infomation";
import Learning from "./components/Learning/Learning";
import VIdeo from "./components/Video-carousel/VIdeo";

function App() {
  return (
    <div>
      <Hero />
      <Infomation />
      <Counter />
      <Learning />
      <Chart />
      <Crypto />
      <VIdeo />
      <Footer />
    </div>
  );
}

export default App;
