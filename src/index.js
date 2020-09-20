import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Movie from './component/movie.component';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Movie}/>
          </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
