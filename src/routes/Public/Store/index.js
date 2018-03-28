import React from 'react';


import Layout from '../../../components/Layout';
import Store from './Page';


const title = 'Store';


function action() {
return {
  chunks: ['store'],
  title,
  component: (


<Layout>


  <Store title={title} />


</Layout>


  ),
};
}


export default action;
