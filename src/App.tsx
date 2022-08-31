import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
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
  const [hideNav, setHideNav] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState<number>(0);

  const handleNavbar = (): void => {
    if (typeof window !== 'undefined') {
      const { scrollY } = window;

      if (scrollY > lastScrollY && scrollY > 84) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }

      setLastScrollY(scrollY);
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleNavbar);
      return (): void => {
        window.removeEventListener('scroll', handleNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <BrowserRouter>
      <MenuStateProvider>
        <Header hideNav={hideNav} />
        <Switch>
          <LeRoute exact path="/" component={Home} />
          <LeRoute path="/gallery" title="Gallery" component={Gallery} />
          <LeRoute path="/about" title="About" component={About} />
          <LeRoute path="/contact" title="Contact" component={Contact} />
          {/* <LeRoute path="/events" component={EventsShowcases} /> */}
          <LeRoute
            path="/commissions"
            title="Commissions"
            component={Commissions}
          />
          <LeRoute path="/:category" title="Gallery" component={Collection} />
        </Switch>
      </MenuStateProvider>
    </BrowserRouter>
  );
};

export default App;
