import React from 'react';
import PropTypes from 'prop-types';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import normalizeCss from 'normalize.css';
import s from './Layout.css';

import Navigation from '../Site/Navigation/Section';
import Footer from '../Site/Footer/Section';
import Copyright from '../Site/Copyright/Section';


class Layout extends React.Component {
static propTypes = {
  children: PropTypes.node.isRequired,
};


render() {
return (


<div>


  <Navigation />


  {this.props.children}
  
  
  <Footer />
  <Copyright />


</div>


); } }


export default withStyles(normalizeCss, s)(Layout);
