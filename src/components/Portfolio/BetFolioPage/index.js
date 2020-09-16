import React from 'react';
import BetFolioPage from './BetFolioPage';
import { MyContext } from '../../contexts/MyContext';

export default () => (
  <MyContext.Consumer>{() => <BetFolioPage />}</MyContext.Consumer>
);
