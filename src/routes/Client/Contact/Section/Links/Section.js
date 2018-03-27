import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';


import Phone from './Block/Phone/Block';
import Mail from './Block/Mail/Block';
import Chat from './Block/Chat/Block';


class Section extends React.Component {


render() {
return (


<div className={s.Section} id="links">
<div className={s.Container}>


  <Phone/>
  <Mail/>
  <Chat/>


</div>


<div className={cx(s.Background, s.Color)} />


</div>


);
}
}


export default withStyles(s)(Section);
