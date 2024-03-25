import DisplayPartsAndColorsSection from "./components/DisplayPartsAndColorsSection.jsx";
import EpicSection from "./components/EpicSection.jsx";
import Footer from "./components/Footer.jsx";
import IphoneSection from "./components/IphoneSection.jsx";
import MyNameSection from "./components/MyNameSection.jsx";

import Navbar from "./components/Navbar.jsx";
import ScrollSection from "./components/ScrollSection.jsx";
import SecondSection from "./components/SecondSection.jsx";
import SosSection from "./components/SosSection.jsx";

function App() {
  return (
    <>
      <Navbar />
      <IphoneSection />
      <SecondSection />
      <SosSection />
      <EpicSection/>
      <ScrollSection />
      <DisplayPartsAndColorsSection />
      <MyNameSection />
      <Footer />
    </>
  );
}

export default App;
