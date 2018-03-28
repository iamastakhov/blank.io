import React from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';

import Pages from './Block/Pages/Block';
import Languages from './Block/Languages/Block';
import Admin from './Block/Admin/Block';


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
  <Admin/>


</div>
</div>
</nav>


); } }


export default withStyles(s)(Section);
