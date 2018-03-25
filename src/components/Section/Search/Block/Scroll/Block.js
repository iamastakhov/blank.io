import React from 'react';
import Scrollchor from 'react-scrollchor';
import { FaLongArrowUp } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';


class Block extends React.Component {

render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <Scrollchor 
    className={cx(s.Button, s.Highlight)} 
    to="navigation"
  >
  <span className={s.Title}> 
    Scroll top
  </span>
  <FaLongArrowUp className={cx(s.Glyph, s.Right)} />
  </Scrollchor>


</div>
</div>


); } }


export default withStyles(s)(Block);
