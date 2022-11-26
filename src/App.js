import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Aboutpage from './pages/Aboutpage';
import Homepage from './pages/Homepage';
import Singlepage from './pages/Singlepage';

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <div className="container">
        <Routes>
          <Route path='/home' element={<Homepage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/singleshow/:id' element={<Singlepage />} />
          {/* navbar
        homepage route
        about page
        single show page */}
          <Route path='/' element={<Homepage />} />
        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;
