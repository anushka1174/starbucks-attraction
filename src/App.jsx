import './App.css'; 
import Header from './components/Header'; 

function App() {
  return (
    <div className="main-container">
      <Header /> 
      
      {/* Ab hum yahan Hero Component banayenge */}
      <div className="hero-section">
        {/* Placeholder for the main attractive content (3D, image, text) */}
        <h2>Welcome to the Attraction!</h2>
      </div>
    </div>
  );
}

export default App;