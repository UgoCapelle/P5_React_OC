import './App.scss'; 
import AppRouter from './Router'; 
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="App">
      <div className="content">
        <AppRouter /> 
      </div>
      <Footer /> 
    </div>
  );
}

export default App;