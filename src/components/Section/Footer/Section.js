import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';

import Pages from './Block/Pages/Block';
import Languages from './Block/Languages/Block';
import Enter from './Block/Enter/Block';


class Section extends React.Component {
render() {
return (


<nav className={s.Section} id="navigation">
<div className={s.Container}>
<div className={s.Left}>


  <Pages/>


</div>
<div className={s.Right}>


  <Languages/>
  <Enter/>


</div>
</div>


<div className={cx(s.Background, s.Color)} />


</nav>


); } }


export default withStyles(s)(Section);
