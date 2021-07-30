import './App.css';
import Menu from './components/Menu'
import Home from './components/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Noivos from './pages/Noivos'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Menu />
          <Route path="/" exact={true} component={Home} />
          <Route path="/noivos" exact={true} component={Noivos} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
