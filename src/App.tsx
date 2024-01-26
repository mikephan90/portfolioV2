import React, {useState} from 'react';
import Home from "./pages/Home";
import MainNavigation from "./components/MainNavigation";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  const [selectedType, setSelectedType] = useState('home');

  function handleSelectType(newType: string) {
    setSelectedType(newType);
  }

  // TODO break out into another component
  function getActiveScreen(screenName: string) {
    switch (screenName) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'skills':
        return <Skills />;
      default:
        return <Home />;
    }
  }

  return (
    <>
      <MainNavigation onSelect={handleSelectType} selectedType={selectedType} />
      {getActiveScreen(selectedType)}
      <Footer/>
    </>
  )
}

export default App;
