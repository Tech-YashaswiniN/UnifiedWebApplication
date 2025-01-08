import React from 'react';
import { useWebsite } from '../WebsiteContext';
import { useKeycloak } from '@react-keycloak/web'; 
import Login from './Login';
import '../components/Navbar.css'

const Navbar = () => {
  const { setActiveWebsite } = useWebsite();
  const { keycloak } = useKeycloak();

  if (!keycloak.authenticated) {
    return <Login />;
  }

  return (
    <nav className="navbar">
      <h1>Unified Website</h1>
      {['home', 'website1', 'website2', 'website3', 'website4', 'website5', 'website6'].map((website) => (
        <button
          key={website}
          onClick={() => setActiveWebsite(website)}
          style={{ margin: '0 10px' }}
        >
          {website.charAt(0).toUpperCase() + website.slice(1)}
        </button>
      ))}
      <a href="/login">Login</a>
    </nav>
  );
};

export default Navbar;
