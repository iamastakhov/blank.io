import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';

import Pages from './Block/Pages/Block';
import Collections from './Block/Collections/Block';
import Materials from './Block/Materials/Block';


class Section extends React.Component {

render() {
return (


<div className={s.Section} id="mail">
<div className={s.Container}>


  <Pages/>
  <Collections/>
  <Materials/>


</div>


<div className={cx(s.Background, s.Color)} />


</div>


); } }


export default withStyles(s)(Section);
