import IntroSection from "./components/IntroSection";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education"
import './styles/intro.css';
import './styles/workExperience.css';
import './styles/education.css';

function App() {
  return (
    <div className="app">
      <div className="intro">
        <IntroSection />
      </div>
      <div className="workExperience">
        <WorkExperience/>
      </div>
      <div className="education">
        <Education/>
      </div>
    </div>
  );
}

export default App;
