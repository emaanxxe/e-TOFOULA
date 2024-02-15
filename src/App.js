import './App.css';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About'
import Footer from './Components/Footer'
import SignInForm from './Components/SignIN';
import SignUpForm from './Components/SignUP';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path='/signin' element={<SignInForm/>} />
          <Route path='/signup' element={<SignUpForm/>} />
        </Routes>
        <Footer />
      </Router>
    </div>



  );
}

export default App;
