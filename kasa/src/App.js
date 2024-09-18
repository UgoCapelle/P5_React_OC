import logementsData from './data/logements.json';  // Import du fichier JSON
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Liste des logements</h1>
        <ul>
          {logementsData.map((logement) => (
            <li key={logement.id}>
              <h2>{logement.title}</h2>
              <p>{logement.location}</p>
              <img src={logement.cover} alt={logement.title} style={{ width: '200px' }} />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
