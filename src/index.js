import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import './index.css';

import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';

// TODO: create a better (and funny) component for page not found
const PageNotFound = function() {
  return (
    <div>
      Page not found :(
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route path="/" component={Home} exact />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA