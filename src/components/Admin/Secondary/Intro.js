import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';

import Controls from './Block/Controls/Block';
import Scroll from './Block/Scroll/Intro';


class Section extends React.Component {

render() {
return (


<nav className={s.Section} id="secondary">
<div className={s.Container}>
<div className={s.Left}>


  <Controls />


</div>
<div className={s.Right}>


  <Scroll />


</div>
</div>
</nav>


); } }


export default withStyles(s)(Section);
