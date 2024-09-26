import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="error-content">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="home-link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;