import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';


import Past from './Block/Past/Block';
import Present from './Block/Present/Block';
import Future from './Block/Future/Block';


class Section extends React.Component {


render() {
return (


<div className={s.Section} id="Bio" >
<div className={s.Container}>


  <Past/>
  <Present />
  <Future />


</div>


<div className={cx(s.Background, s.Color)} />


</div>


);
}
}


export default withStyles(s)(Section);
