import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import CarbonFootprintCalculator from './pages/CarbonFootprintCalculator';
import LocalSustainabilityMap from './pages/LocalSustainabilityMap';
import About from './pages/About'
import Challenges from './pages/Challenges'
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from '../context/AuthContext';
import NewsFeed from './pages/NewsFeed';
import Videos from './pages/Videos';
import Feedback from './pages/Feedback';



axios.defaults.baseURL = 'http://localhost:8000'; //backend/sever url 
axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthProvider>
      <UserContextProvider>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/carbonFootprintCalculator' element={<CarbonFootprintCalculator />} />
        <Route path='/sustainabilityMap' element={<LocalSustainabilityMap />} />
        <Route path='/about' element={<About />} />
        <Route path='/challenges' element={<Challenges />} />
        <Route path='/api/news' element={<NewsFeed />} />
        <Route path='/Videos' element={<Videos />} />
        <Route path='/feedback' element={<Feedback />} />

      </Routes>
      <Footer />
      </UserContextProvider>
    </AuthProvider>
  )
}

export default App;
