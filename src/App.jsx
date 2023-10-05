import "./App.css";
import Header from "./components/Header/Header";
import SectionOne from "./components/Main/SectionOne/SectionOne";
import SectionThree from "./components/Main/SectionThree/SectionThee";
import SectionTwo from "./components/Main/SectionTwo/SectionTwo";

function App() {
  return (
    <>
    <Header />
    <div className="wrapper">
    <SectionOne />
    <SectionTwo />
    <SectionThree />
  </div>
    </>
  )
}

export default App;
