import React, { Component } from 'react';
import PropTypes from 'prop-types';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Button.css';


import Link from '../../../../Link';
import history from '../../../../../history';


import { FaBars } from 'react-icons/lib/fa';


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


<Link to={this.props.to} className={cx(s.Button, this.state.isActive && s.ButtonActive)}>


  {this.state.isActive && 
  <FaBars className={s.Glyph}/>
  }


  <span className={s.Title}>
    {this.props.title}
  </span>


</Link>


);
}
}


Button.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};


export default withStyles(s)(Button);