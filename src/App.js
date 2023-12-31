import './styles/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Header from './components/Header';
import GifDisp from './components/GifDisp';
import ProjectDisp from './components/ProjectDisp';
import Resume from './components/Resume';

function App() {
  return (
    <div>  
     <Router>
      <Header />
      {/* {/* <GifDisp />
      <ProjectDisp /> }
        <div className="App"> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        {/* </div> */}
        <Resume />
        <Footer />
      </Router>    
    </div>
  );  
}

export default App;
