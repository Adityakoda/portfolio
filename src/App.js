import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Nav from './components/nav';
import Resume from './components/resume';
import Project from './components/project';
import Contact  from './components/contact';
  function Main() {
  return (
    <>
      <Nav/>
      <Home/>
    </>
  );
}
function Details() {
  return (
    <>
      <Nav/>
      <Resume/>
    </>
  );
}
function Work(){
  return(
    <>
    <Nav/>
    <Project/>
    </>
  )
}
function Message(){
  return(
    <>
    <Nav/>
    <Contact/></>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/resume" element={<Details />} /> 
        <Route path="/project" element={<Work />} /> 
        <Route path="/contact" element={<Message />} />
      </Routes>
    </Router>
  );
}


export default App;