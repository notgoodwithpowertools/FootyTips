// Written as a stateless functional component

import React from 'react';
import RoundsSelector from './RoundsSelector.jsx';
import GameList from './GameList.jsx';
import Pagination from './Pagination.jsx';

const GamePage = () => (
 <div><Pagination /><RoundsSelector /><GameList /></div>
);

export default GamePage;
