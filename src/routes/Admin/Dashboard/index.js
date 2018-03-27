import React from 'react';


import Layout from '../../../components/Layout';
import Dashboard from './Page';


const title = 'Dashboard';


function action() {
return {
  chunks: ['dashboard'],
  title,
  component: (


<Layout>


  <Dashboard title={title} />


</Layout>


  ),
};
}


export default action;
