import React from 'react';


import Layout from '../../../components/Layout/Admin';
import Profile from './Page';


const title = 'Profile';


function action() {
return {
  chunks: ['profile'],
  title,
  component: (


<Layout>


  <Profile title={title} />


</Layout>


  ),
};
}


export default action;
