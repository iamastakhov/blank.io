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
    title="#animation" 
    to="/" 
  />
 
  <Button 
    title="#automotive" 
    to="/" 
  />

  <Button 
    title="#branding" 
    to="/" 
  />

  <Button 
    title="#cinematography" 
    to="/" 
  />
 
  <Button 
    title="#digital" 
    to="/" 
  />

  <Button 
    title="#event" 
    to="/" 
  />

  <Button 
    title="#fashion" 
    to="/" 
  />
 
  <Button 
    title="#game" 
    to="/" 
  />

  <Button 
    title="#street" 
    to="/" 
  />

  <Button 
    title="#php" 
    to="/" 
  />

  <Button 
    title="#javascript" 
    to="/" 
  />
 
  <Button 
    title="#es6" 
    to="/" 
  />

  <Button 
    title="#html" 
    to="/" 
  />

  <Button 
    title="#jsx" 
    to="/" 
  />
 
  <Button 
    title="#npde" 
    to="/" 
  />

  <Button 
    title="#express" 
    to="/" 
  />

  <Button 
    title="#webpack" 
    to="/" 
  />
 
  <Button 
    title="#babel" 
    to="/" 
  />

  <Button 
    title="#browsersync" 
    to="/" 
  />

  <Button 
    title="#react" 
    to="/" 
  />

  <Button 
    title="#redux" 
    to="/" 
  />
 
  <Button 
    title="#advertising" 
    to="/" 
  />

  <Button 
    title="#artdirection" 
    to="/" 
  />

  <Button 
    title="#copywriting" 
    to="/" 
  />
 
  <Button 
    title="#creativedirection" 
    to="/" 
  />

  <Button 
    title="#direction" 
    to="/" 
  />

  <Button 
    title="#enterpreneurship" 
    to="/" 
  />
 
  <Button 
    title="#productdesign" 
    to="/" 
  />

</div>


</div>
</div>


); } }


export default withStyles(s)(Block);
