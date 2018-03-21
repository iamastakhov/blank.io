import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';


import Design from './Block/Design/Block';
import Development from './Block/Development/Block';
import Direction from './Block/Direction/Block';


class Section extends React.Component {


render() {
return (


<div className={s.Section} id="services" >
<div className={s.Container}>


  <Design />
  <Development />
  <Direction />


</div>


<div className={cx(s.Background, s.Color)} />


</div>


);
}
}


export default withStyles(s)(Section);
