import React from 'react';

import { Link } from 'react-router-dom';

const Menu = () => (
  <nav>
    <Link to="/give-consent">Give consent</Link>
    <Link to="/consents">Consents</Link>
  </nav>
);

export default Menu;
