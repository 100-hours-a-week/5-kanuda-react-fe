import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LogInPage from './pages/LogInPage';
import SignInPage from './pages/SignInPage';
import ProfileEditPage from './pages/ProfileEditPage';
import PasswordEditPage from './pages/PasswordEditPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<LogInPage />}></Route>
          <Route path='/login' element={<LogInPage />}></Route>
          <Route path='/signin' element={<SignInPage />}></Route>
          <Route path='/profileEdit' element={<ProfileEditPage />}></Route>
          <Route path='/passwordEdit' element={<PasswordEditPage />}></Route>
          <Route></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
