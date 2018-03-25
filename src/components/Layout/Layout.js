import React from 'react';
import PropTypes from 'prop-types';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import normalizeCss from 'normalize.css';
import s from './Layout.css';

import Navigation from '../Section/Navigation/Section';
import Footer from '../Section/Footer/Section';
import Copyright from '../Section/Copyright/Section';


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
