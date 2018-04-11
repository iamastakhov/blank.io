/* eslint-disable global-require */


const routes = {


  path: '',
  children: [


  {
    path: '',
    load: () => import(/* webpackChunkName: 'intro' */ './Site/Intro'),
  },

  {
    path: '/stream',
    load: () => import(/* webpackChunkName: 'stream' */ './Site/Stream'),
  },

  {
    path: '/store',
    load: () => import(/* webpackChunkName: 'store' */ './Site/Store'),
  },

  {
    path: '/contact',
    load: () => import(/* webpackChunkName: 'contact' */ './Site/Contact'),
  },

  
  {
    path: '/enter',
    load: () => import(/* webpackChunkName: 'enter' */ './Admin/Enter'),
  },
  {
    path: '/admin',
    load: () => import(/* webpackChunkName: 'dashboard' */ './Admin/Dashboard'),
  },
  {
    path: '/admin/profile',
    load: () => import(/* webpackChunkName: 'profile' */ './Admin/Profile'),
  },
  {
    path: '/admin/settings',
    load: () => import(/* webpackChunkName: 'settings' */ './Admin/Settings'),
  },


  {
    path: '(.*)',
    load: () => import(/* webpackChunkName: 'not-found' */ './System/NotFound'),
  },


  ],


async action({ next }) {
const route = await next();


  route.title = `Blank — ${route.title || 'Untitled Page'}`;
  route.description = route.description || '';


  return route;


}, };


if (__DEV__) {


  routes.children.unshift(


  {
    path: '/error',
    action: require('./System/Error').default,
  }


  );


}


export default routes;
