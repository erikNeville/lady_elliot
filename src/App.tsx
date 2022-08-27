import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About } from './pages/About';
import { Collection } from './pages/Collection';
import { Commissions } from './pages/Commissions';
import { Contact } from './pages/Contact';
// import { EventsShowcases } from './pages/EventsShowcases';
import { Gallery } from './pages/Gallery';
import Header from './navigation/Header';
import { Home } from './pages/Home';
import LeRoute from './common/ui/LeRoute';
import { MenuStateProvider } from './common/context/UIContext';

export const routeNames = [
  'Gallery',
  'About',
  'Contact',
  'Commissions',
  // 'Events & Showcases',
];

// Update home page
// Update commissions page with pictures and text
// Update or hide events & showcases

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MenuStateProvider>
        <Header />
        <Switch>
          <LeRoute exact path="/" component={Home} />
          <LeRoute path="/gallery" component={Gallery} />
          <LeRoute path="/about" component={About} />
          <LeRoute path="/contact" component={Contact} />
          {/* <LeRoute path="/events" component={EventsShowcases} /> */}
          <LeRoute path="/commissions" component={Commissions} />
          <Route path="/:category" component={Collection} />
        </Switch>
      </MenuStateProvider>
    </BrowserRouter>
  );
};

export default App;
