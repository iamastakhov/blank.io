import React from 'react';


import Layout from '../../components/Layout';
import Stream from './Page';


const title = 'Stream';


function action() {
return {
  chunks: ['stream'],
  title,
  component: (


<Layout>


  <Stream title={title} />


</Layout>


  ),
};
}


export default action;
