import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LogInPage from './pages/LogInPage';
import SignInPage from './pages/SignInPage';
import ProfileEditPage from './pages/ProfileEditPage';
import PasswordEditPage from './pages/PasswordEditPage';
import BoardPage from './pages/BoardPage';
import PostDetailPage from './pages/PostDetailPage';
import PostWritePage from './pages/PostWritePage';
import PostEditPage from './pages/PostEditPage';

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
          <Route path='/board' element={<BoardPage />}></Route>
          <Route path='/postDetail' element={<PostDetailPage />}></Route>
          <Route path='/postWrite' element={<PostWritePage />}></Route>
          <Route path='/postEdit' element={<PostEditPage />}></Route>
          <Route></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
