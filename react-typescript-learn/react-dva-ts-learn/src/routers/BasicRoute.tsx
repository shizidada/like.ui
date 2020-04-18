import React, { createElement } from 'react';
import { Spin } from 'antd';
import { Redirect, Route, Switch } from 'dva/router';
import Loadable from 'react-loadable';

const Loading = () => {
  return (
    <div style={{ fontSize: 20, textAlign: 'center' }}>
      <Spin size="large" />
    </div>
  );
};

const BasicRoute = () => (
  <Switch>

    {/* user router config start */}
    <Route
      path="/user/list"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "user.list.page" */ '../pages/user/ListPage'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />
    {/* user router config end */}

    {/* profile router config end */}
    <Route
      path="/profile"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "profile.personal.page" */ '../pages/profile/PersonalPage'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />
    {/* profile router config end */}

    {/* order router config start */}
    <Route
      path="/order/list"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "order.list.page" */ '../pages/order/ListPage'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />
    {/* order router config end */}

    {/* product router config start */}
    <Route
      path="/product/list"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "product.list.page" */ '../pages/product/ListPage'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />
    {/* product router config end */}


    {/* setting router config start */}
    <Route
      path="/setting/advertisement"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(
              /* webpackChunkName: "setting.advertisement.page" */ '../pages/setting/AdvertisementPage'
              ),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />
    {/* setting router config end */}

    <Route
      path="/home"
      render={routeProps =>
        createElement<object>(
          Loadable({
            loader: () => import(/* webpackChunkName: "home.page" */ '../pages/HomePage'),
            loading() {
              return <Loading />;
            },
          }),
          { ...routeProps },
        )
      }
    />

    <Redirect from="/" to="/index.html" />
  </Switch>
);

export default BasicRoute;
