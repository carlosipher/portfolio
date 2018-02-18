import React from 'react';
import { NavLink } from 'react-router-dom';
import pages from '../pages';

const Navigation = ({ navigationClick }) => (
  <ul className="Navigation">
    {pages.map(page => (
      <li key={page.path}>
        <NavLink to={page.path} onClick={e => navigationClick(e)} activeClassName="Active">{page.title}</NavLink>
      </li>
    ))}
  </ul>
);

export default Navigation;
