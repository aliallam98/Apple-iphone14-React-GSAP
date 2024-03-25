import DisplayPartsAndColorsSection from "./components/DisplayPartsAndColorsSection.jsx";
import Footer from "./components/Footer.jsx";
import IphoneSection from "./components/IphoneSection.jsx";

import Navbar from "./components/Navbar.jsx";
import ScrollSection from "./components/ScrollSection.jsx";
import SecondSection from "./components/SecondSection.jsx";

function App() {
  return (
    <>
      <Navbar />
      <IphoneSection />
      <SecondSection />
      <ScrollSection />
      <DisplayPartsAndColorsSection />
      <Footer />
    </>
  );
}

export default App;
