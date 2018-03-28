import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';

import Copyright from './Block/Copyright/Block';
import Enter from './Block/Enter/Block';


class Section extends React.Component {

render() {
return (


<nav className={s.Section} id="secondary">
<div className={s.Container}>
<div className={s.Left}>


  <Copyright />


</div>
<div className={s.Right}>


  <Enter />



</div>
</div>


<div className={cx(s.Background, s.Color)} />


</nav>


); } }


export default withStyles(s)(Section);
