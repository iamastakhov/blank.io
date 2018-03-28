import React from 'react';
import { FaCaretDown } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';

import Button from './Button';


class Block extends React.Component {

render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <div className={s.Button}>
  <span className={s.Title}>
    Language
  </span>
  <FaCaretDown className={cx(s.Glyph, s.Right)} />
  </div>


<div className={s.Menu}>


  <Button 
    title="English" 
    to="/" 
  />
 
  <Button 
    title="Русский" 
    to="/" 
  />

  <Button 
    title="汉语漢語" 
    to="/" 
  />


</div>


</div>
</div>


); } }


export default withStyles(s)(Block);
