import './App.css';
import About from './component/About/About';
import Achievement from './component/Achievement/Achievement';
import Blog from './component/Blog/Blog';
import Footer from './component/Footer/Footer';
import HeroPage from './component/HeroPage/HeroPage';
import Navbar from './component/Navbar/Navbar';
import Testimonials from './component/Testimonials/Testimonials';
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
      <Footer />
    </div>
  );
}

export default App;
