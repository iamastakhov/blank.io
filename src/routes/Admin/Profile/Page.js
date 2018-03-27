import React from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Page.css';

import Description from './Section/Description/Section'
import Settings from './Section/Settings/Section'
import Security from './Section/Security/Section'


class Page extends React.Component {

render() {
return (


<div className={s.Page}>


  <Description />
  <Settings/>
  <Security/>


</div>


); } }


export default withStyles(s)(Page);
