import React from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Page.css';

import Description from './Section/Description/Section'
import Stats from './Section/Stats/Section'


class Page extends React.Component {

render() {
return (


<div className={s.Page}>


  <Description />
  <Stats/>


</div>


); } }


export default withStyles(s)(Page);
