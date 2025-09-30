// import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import { PageWelcome } from './components/PageWelcome';
import { PageInfo } from './components/PageInfo';
import { PageAbout } from './components/PageAbout';

function App() {
  return (
    <div className="App">
      <h1>React-Vite-Typescript-FRONTEND</h1>
      <nav>
        <NavLink to="welcome">Welcome</NavLink>
        <NavLink to="info">Info</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>

      <Routes>
        <Route path="welcome" element={<PageWelcome />}></Route>
        <Route path="info" element={<PageInfo />}></Route>
        <Route path="about" element={<PageAbout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
