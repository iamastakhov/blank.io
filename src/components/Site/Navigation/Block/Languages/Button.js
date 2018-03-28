import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Button.css';

import Link from '../../../../Link';


class Button extends Component {

render() {
return (


<Link
  className={s.Button}
  to={this.props.to} 
>


  <span className={s.Title}>
    {this.props.title}
  </span>


</Link>


); } }


Button.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};


export default withStyles(s)(Button);