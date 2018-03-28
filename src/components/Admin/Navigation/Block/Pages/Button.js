import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Button.css';

import Link from '../../../../Link';
import history from '../../../../../history';


class Button extends Component {

constructor(props) {
  super(props);
  this.state = {
    isActive: false,
};

}

componentDidMount() {
  this.onPath();
}

componentWillReceiveProps() {
  this.onPath();
}

onPath() {
  if (history.location.pathname.endsWith(this.props.to)) {
  this.setState({ isActive: 'Active' });
  } else {
  this.setState({ isActive: false });
  } 
}

render() {
return (


<Link 
  className={cx(s.Button, this.state.isActive && s.Active)}
  to={this.props.to} 
>


  {this.state.isActive && 
  <FaBars className={cx(s.Glyph, s.Left)}/> 
  }

  <span className={s.Title}>
    {this.props.title}
  </span>


</Link>


); } }


Button.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};


export default withStyles(s)(Button);