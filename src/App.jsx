import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import Boost from './components/boost/Boost';
import Advanced from './components/advanced/Advanced';
import Showcase from './components/showcase/Showcase';
import Shortener from './components/shortener/Shortener';
const App = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Shortener />
      <Advanced />
      <Boost />
      <Footer />
    </>
  );
};

export default App;
