import React from 'react';
import { FaCopyright } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';


class Block extends React.Component {

render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <div 
    className={cx(s.Button, s.Label)}
  >
  <span className={s.Title}>
    2018
  </span>
  <FaCopyright className={cx(s.Glyph, s.Center)} />
  <span className={s.Title}>
    Copyright by Oleg Ask.
  </span>
  </div>


</div>
</div>


); } }


export default withStyles(s)(Block);
