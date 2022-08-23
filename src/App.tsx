import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About } from './pages/About';
import { Collection } from './pages/Collection';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import Header from './navigation/Header';
import { Home } from './pages/Home';
import { MenuStateProvider } from './common/context/UIContext';

export const routeNames = [
  'Gallery',
  'About',
  'Contact',
  'Commissions',
  'Events & Showcases',
];

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MenuStateProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/:category" component={Collection} />
        </Switch>
      </MenuStateProvider>
    </BrowserRouter>
  );
};

export default App;
