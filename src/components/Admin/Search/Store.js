import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';

import Search from './Block/Search/Block';
import Tags from './Block/Tags/Store';
import Scroll from './Block/Scroll/Block';


class Section extends React.Component {

render() {
return (


<nav className={s.Section} id="anchor">
<div className={s.Container}>
<div className={s.Left}>


  <Search />
  <Tags />


</div>
<div className={s.Right}>
  
  
  <Scroll />


</div>
</div>


<div className={cx(s.Background, s.Color)} />
<div className={cx(s.Background, s.Shadow)} />


</nav>


); } }


export default withStyles(s)(Section);
