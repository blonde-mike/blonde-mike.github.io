import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import { AppContainer, MainContent } from "./components/Base/Base";
import NavBar from "./components/Routing/NavBar/NavBar";
import Resume from "./components/Pages/Resume/Resume";
import Experience from "./components/Pages/Resume/Experience/Experience";
import Skills from "./components/Pages/Resume/Skills/Skills";
import Education from "./components/Pages/Resume/Education/Education";
import Volunteering from "./components/Pages/Resume/Volunteering/Volunteering";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Contact from "./components/Pages/Contact/Contact";
import Interests from "./components/Pages/Interests/Interests";
import Running from "./components/Pages/Interests/Running/Running";
import Music from "./components/Pages/Interests/Music/Music";
import Reading from "./components/Pages/Interests/Reading/Reading";
import Gaming from "./components/Pages/Interests/Gaming/Gaming";

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/resume" replace />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/resume/experience" element={<Experience />} />
            <Route path="/resume/skills" element={<Skills />} />
            <Route path="/resume/education" element={<Education />} />
            <Route path="/resume/volunteering" element={<Volunteering />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/interests/running" element={<Running />} />
            <Route path="/interests/music" element={<Music />} />
            <Route path="/interests/reading" element={<Reading />} />
            <Route path="/interests/gaming" element={<Gaming />} />
          </Routes>
        </BrowserRouter>
      </MainContent>
    </AppContainer>
  );
}

export default App;
