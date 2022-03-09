import "./App.css";
import { Routes, Route, Navigate} from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from './pages/ProfilePage'
function App() {
  
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/tes' element={<Navbar/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
    </Routes>
  );
}

export default App;

const Home = () => {
  return(
    <div>HOME
      <Navigate to='login'/>
    </div>

  )  
}
const Navbar = () => {
  return(
      <div>
          <h1>Navbar</h1>
      </div>
  )
}
