import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';


import SignIn from './Block/SignIn/Block';
import SignUp from './Block/SignUp/Block';

class Section extends React.Component {


render() {
return (


<div className={s.Section} id="mail">
<div className={s.Container}>


  <SignIn/>
  <SignUp/>


</div>


<div className={cx(s.Background, s.Color)} />


</div>


);
}
}


export default withStyles(s)(Section);
