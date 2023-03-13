import Home from './pages/Home';
import { links } from './components/Navbar/links';
import Navbar from './components/Navbar/Navbar';
import WhyUs from './pages/WhyUs';
import OurServices from './pages/OurServices';
import LastNews from './pages/LastNews';
import ServiceRequest from './pages/ServiceRequest';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Home />
      <WhyUs />
      <OurServices />
      <LastNews />
      <ServiceRequest />
      <Footer />
    </div>
  );
};

export default App;
