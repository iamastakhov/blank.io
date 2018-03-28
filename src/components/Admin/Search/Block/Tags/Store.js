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
    Tags
  </span>
  <FaCaretDown className={cx(s.Glyph, s.Right)} />
  </div>


<div className={s.Menu}>


  <Button 
    title="One" 
    to="/" 
  />
 
  <Button 
    title="Two" 
    to="/" 
  />

  <Button 
    title="Three" 
    to="/" 
  />

  <Button 
    title="Four" 
    to="/" 
  />
 
  <Button 
    title="Five" 
    to="/" 
  />

  <Button 
    title="Six" 
    to="/" 
  />

  <Button 
    title="Seven" 
    to="/" 
  />
 
  <Button 
    title="Eight" 
    to="/" 
  />

  <Button 
    title="Nine" 
    to="/" 
  />

  <Button 
    title="Ten" 
    to="/" 
  />

  <Button 
    title="One" 
    to="/" 
  />
 
  <Button 
    title="Two" 
    to="/" 
  />

  <Button 
    title="Three" 
    to="/" 
  />

  <Button 
    title="Four" 
    to="/" 
  />
 
  <Button 
    title="Five" 
    to="/" 
  />

  <Button 
    title="Six" 
    to="/" 
  />

  <Button 
    title="Seven" 
    to="/" 
  />
 
  <Button 
    title="Eight" 
    to="/" 
  />

  <Button 
    title="Nine" 
    to="/" 
  />

  <Button 
    title="Ten" 
    to="/" 
  />

  <Button 
    title="One" 
    to="/" 
  />
 
  <Button 
    title="Two" 
    to="/" 
  />

  <Button 
    title="Three" 
    to="/" 
  />

  <Button 
    title="Four" 
    to="/" 
  />
 
  <Button 
    title="Five" 
    to="/" 
  />

  <Button 
    title="Six" 
    to="/" 
  />

  <Button 
    title="Seven" 
    to="/" 
  />
 
  <Button 
    title="Eight" 
    to="/" 
  />

  <Button 
    title="Nine" 
    to="/" 
  />

  <Button 
    title="Ten" 
    to="/" 
  />

  <Button 
    title="One" 
    to="/" 
  />
 
  <Button 
    title="Two" 
    to="/" 
  />

  <Button 
    title="Three" 
    to="/" 
  />

  <Button 
    title="Four" 
    to="/" 
  />
 
  <Button 
    title="Five" 
    to="/" 
  />

  <Button 
    title="Six" 
    to="/" 
  />

  <Button 
    title="Seven" 
    to="/" 
  />
 
  <Button 
    title="Eight" 
    to="/" 
  />

  <Button 
    title="Nine" 
    to="/" 
  />

  <Button 
    title="Ten" 
    to="/" 
  />

</div>


</div>
</div>


); } }


export default withStyles(s)(Block);
