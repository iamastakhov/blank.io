/* eslint-disable global-require */


const routes = {


  path: '',
  children: [


  {
    path: '',
    load: () => import(/* webpackChunkName: 'intro' */ './Public/Intro'),
  },

  {
    path: '/stream',
    load: () => import(/* webpackChunkName: 'stream' */ './Public/Stream'),
  },

  {
    path: '/store',
    load: () => import(/* webpackChunkName: 'store' */ './Public/Store'),
  },

  {
    path: '/contact',
    load: () => import(/* webpackChunkName: 'contact' */ './Public/Contact'),
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


  route.title = `Oleg Ask. - ${route.title || 'Untitled Page'}`;
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
