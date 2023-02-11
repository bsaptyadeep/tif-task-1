import './App.css';
import AboutUs from './components/aboutUs';
import Articles from './components/articles';
import Footer from './components/footer';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Home />
      <AboutUs />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
