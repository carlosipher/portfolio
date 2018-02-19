import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = ({ navigationClick }) => (
  <div className="Navigation">
    <div className="Heading">
      <h2>
        <Link to="/" onClick={(e) => navigationClick(e)}>
          <img src="/img/logo/cd-logo.svg" height="80" alt="Carlotta Dadey" />
        </Link>
      </h2>
      <div className="Details">
        <h1>Footwear designer</h1>
        <div className="Menu">
          <Link to="/" onClick={(e) => navigationClick(e)}>
            Skills
          </Link>
          <Link to="/about" onClick={(e) => navigationClick(e)}>
            About
          </Link>
          <a href="mailto:carlottadadey@gmail.com" onClick={(e) => navigationClick(e)}>
            Contact
          </a>
        </div>
      </div>
    </div>
  </div>
);

Navigation.propTypes = {
  navigationClick: PropTypes.func.isRequired
};

export default Navigation;
