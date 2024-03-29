import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { MainNavigation } from './components';
import { Home, Journalism, PhotoEssay, Portraits, Travel, Videos, Motion, Stills } from './views';
import Contact from './views/contact';

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Hamburger rounded toggled={isOpen} toggle={setOpen} />
          <MainNavigation isOpen={isOpen} setIsOpen={setOpen} />
        </header>
        <switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/portraits' component={() => <Portraits />}></Route>
          <Route path='/travel' component={Travel}></Route>
          <Route path='/journalism' component={Journalism}></Route>
          <Route path='/photoessay' component={PhotoEssay}></Route>
          <Route path='/videos' component={Videos}></Route>
          <Route path='/stills' component={() => <Stills />}></Route>
          <Route path='/motion' component={() => <Motion />}></Route>
          <Route path='/contact' component={() => <Contact />}></Route>
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
