import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';


import Arrows from './Block/Arrows/Block'
import Scroll from './Block/Scroll/Store'


class Section extends React.Component {


render() {
return (


<nav className={s.Section} id="secondary">
<div className={s.Container}>


<div className={s.Left}>


  <Arrows />


</div>
<div className={s.Right}>


  <Scroll />


</div>


</div>
</nav>


);
}
}


export default withStyles(s)(Section);
