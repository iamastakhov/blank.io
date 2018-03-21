/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    // The home route is added to client.js to make sure shared components are
    // added to client.js as well and not repeated in individual each route chunk.
    {
      path: '',
      load: () => import(/* webpackChunkName: 'intro' */ './Intro'),
    },
    {
      path: '/stream',
      load: () => import(/* webpackChunkName: 'stream' */ './Stream'),
    },
    {
      path: '/store',
      load: () => import(/* webpackChunkName: 'store' */ './Store'),
    },
    {
      path: '/contact',
      load: () => import(/* webpackChunkName: 'contact' */ './Contact'),
    },    

    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './NotFound'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `Oleg Ask. - ${route.title || 'Untitled Page'}`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
