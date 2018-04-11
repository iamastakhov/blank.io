import React from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';


class Block extends React.Component {

render() {

return (


<div className={s.Block}>
<div className={s.Container}>


  <h2 className={s.Title}>
    BLANK
  </h2>


  <h4 className={s.Tagline}>
    Website Boilerplate
  </h4>


  <h5 className={s.Description}>
    Starter kit that contains instruments and instructions for fast personal and organisation site development.
  </h5>


</div>
</div>


); } }


export default withStyles(s)(Block);
