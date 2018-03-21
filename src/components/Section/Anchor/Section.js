import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';


import Anchors from './Block/Anchors/Block';
import Scroll from './Block/Scroll/Block';


class Section extends React.Component {


render() {
return (


<nav className={s.Section} id="anchor">
<div className={s.Container}>


<div className={s.Left}>
  <Anchors />
</div>


<div className={s.Right}>
  <Scroll />
</div>


</div>


<div className={cx(s.Background, s.Color)} />
<div className={cx(s.Background, s.Shadow)} />


</nav>


);
}
}


export default withStyles(s)(Section);
