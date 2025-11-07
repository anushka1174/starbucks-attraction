import './App.css'; 
import Header from './components/Header'; 
import Hero from './components/Hero'; // Naya import

function App() {
  return (
    <div className="main-container">
      <Header /> 
      
      {/* Naya Hero Component yahan use kiya */}
      <Hero /> 
      
    </div>
  );
}

export default App;