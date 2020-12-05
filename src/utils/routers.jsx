import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { isAuthenticated } from './isAuthenticated';
import Home from 'pages/Home';
import Clients from 'pages/Clients';
import AddClients from 'pages/AddClients';
import Products from 'pages/Products';
import AddProducts from 'pages/AddProducts';
import PlaceOrder from 'pages/PlaceOrder';
import urls from 'static/urls';

export const history = createBrowserHistory();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: urls.ROUTES.LOGIN, state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={urls.ROUTES.HOME} component={Home} />
      <Route exact path={urls.ROUTES.CLIENTS} component={Clients} />
      <Route exact path={urls.ROUTES.ADD_CLIENTS} component={AddClients} />
      <Route exact path={urls.ROUTES.PLACE_ORDER} component={PlaceOrder} />
      <Route exact path={urls.ROUTES.PRODUCTS} component={Products} />
      <Route exact path={urls.ROUTES.ADD_PRODUCT} component={AddProducts} />

      {/* <PrivateRoute exact path={urls.ROUTES.LoggedUser} component={User} /> */}
    </Switch>
  </ConnectedRouter>
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
};

PrivateRoute.defaultProps = {
  component: () => {},
};

export default Routes;
