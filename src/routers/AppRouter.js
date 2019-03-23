import React from 'react';
import Home from '../components/Home'
import { BrowserRouter, Route,Switch , Link} from 'react-router-dom';
import Login from '../components/login.js'
import createHistory from 'history/createBrowserHistory';

const NotFoundPage = () => (
    <div>
        404!Page not found <Link to="/"> go to home</Link>
    </div>
);

const history = createHistory();
const AppRouter = () => (
    <BrowserRouter history={history}>
      <div>
        <Switch>   
          <Route path='/' component={Login} exact={true} />
          <Route path='/home' component={Home} exact={true}/>
          <Route component={NotFoundPage} exact={true}/>
        </Switch>
      </div>
    </BrowserRouter>
);

export default AppRouter;