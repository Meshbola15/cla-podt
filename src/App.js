import "./App.css";
import Chart from "./components/Chart/Chart";
import Counter from "./components/Counter/Counter";
import Crypto from "./components/Crypto/Crypto";
import Faq from "./components/Faq/Faq";
import Floating from "./components/Floating/Floating";
import Floating2 from "./components/Floating2/Floating2";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Infomation from "./components/Information/Infomation";
import Learning from "./components/Learning/Learning";
import Navbar from "./components/Navbar/Navbar";
import VIdeo from "./components/Video-carousel/VIdeo";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Floating />
      <Infomation />
      <Counter />
      <Learning />
      <Floating2 />
      <Chart />
      <Crypto />
      <VIdeo />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
