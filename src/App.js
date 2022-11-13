import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Scenes/Home/Home';
import Dashboard from './Scenes/Dashboard/Dashbord';
import Footer from './Components/Footer/Footer';
import UserCard from './Components/ConnexionSection/UserCard';
import ListAdmin from './Components/List/ListAdmin';
import ListHelper from './Components/List/ListHelper';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<UserCard />} />
        <Route path='/Admin' element={<ListAdmin />} />
        <Route path='/Helper' element={<ListHelper />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
