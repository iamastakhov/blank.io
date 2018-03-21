import React from 'react';


import Layout from '../../components/Layout';
import Intro from './Page';


const title = 'Intro';


function action() {
return {
  chunks: ['intro'],
  title,
  component: (


<Layout>


  <Intro title={title} />


</Layout>


  ),
};
}


export default action;
