import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';

import Description from './Block/Description/Block';


class Section extends React.Component {

render() {
return (


<div className={s.Section} id="description" >
<div className={s.Container}>


  <Description />


</div>


<div className={cx(s.Background, s.Color)} />


</div>


); } }


export default withStyles(s)(Section);