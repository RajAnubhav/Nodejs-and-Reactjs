import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';   
import SubmitForm from './components/SubmitForm';
import Form from './components/Form';
import Users from './components/Users';



function App() {


  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/subform" element={<SubmitForm/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/users" element={<Users/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
