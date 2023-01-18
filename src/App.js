import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Airbnb from './pages/Airbnb';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Header from './components/Header'
function App() {
  return (
    <Router>
      <Header>

      </Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Airbnb' element={<Airbnb />} />
        <Route path='Signin' element={<Signin />} />
        <Route path='Signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
