import React, {useState, useEffect} from 'react';
import Loader from './components/loader/Loader'
import './App.css';
import Footer from './components/footer/Footer';
import UsefulLinksList from './pages/UsefulLinksList';
import { Switch, Route} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './pages/Home';
import Memorycard from './pages/Memorycard'
import Minigame from './pages/Minigame'
import Number1 from './components/minigames/Number1';
import Number2 from './components/minigames/Number2';
import Number3 from './components/minigames/Number3';
import Number4 from './components/minigames/Number4';
import Number5 from './components/minigames/Number5';
import Number6 from './components/minigames/Number6';
import Number7 from './components/minigames/Number7';
import Number8 from './components/minigames/Number8'
import Remindtheanswer from './components/minigames/Remindtheanswer';
import Remindtheanswer2 from './components/minigames/Remindtheanswer2';
import Remindtheanswer3 from './components/minigames/Remindtheanswer3';

function App() {
  const[loader, setLoader] = useState(true);
  
  useEffect(() => {
    setTimeout (() => {
      setLoader(false);
    }, 5500)

  }, [])
  return loader ?
  (
    <Loader />
  ) : (
    <div className="App">  
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path ="/minigame" component={Minigame} />
      <Route path ="/memorycard" component={Memorycard} />
      <Route path ="/usefullinks" component={UsefulLinksList} />
      <Route path ="/number1" component={Number1} />
      <Route path ="/number2" component={Number2} />
      <Route path ="/number3" component={Number3} />
      <Route path ="/number4" component={Number4} />
      <Route path ="/number5" component={Number5} />
      <Route path ="/number6" component={Number6} />
      <Route path ="/number7" component={Number7} />
      <Route path ="/number8" component={Number8} />
      <Route path ="/remindtheanswer" component={Remindtheanswer}/>
      <Route path ="/remindtheanswer2" component={Remindtheanswer2}/>
      <Route path ="/remindtheanswer3" component={Remindtheanswer3}/>
    </Switch>
    <Footer />
    </div>
  );  
}
export default App;
