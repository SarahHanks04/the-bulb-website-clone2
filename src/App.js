import './App.css';
import About from './component/About/About';
import Achievement from './component/Achievement/Achievement';
import Blog from './component/Blog/Blog';
import HeroPage from './component/HeroPage/HeroPage';
import Navbar from './component/Navbar/Navbar';
import Testimonials from './component/Pages/Testimonials';
import Portfolio from './component/Portfolio/Portfolio';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroPage />
      <About />
      <Testimonials />
      <Blog />
      <Achievement />
      <Portfolio />
    </div>
  );
}

export default App;
