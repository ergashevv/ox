import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Products from './pages/products';
import { useUserContext } from './context/ContextUser';
import Header from './components/Header/Header';
function App() {
  const { token } = useUserContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          {
            token ? (
              <Route exact path="/products" component={Products} />
            ) : (
              null
            )
          }
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
