import React from 'react';


import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';


import Button from './Button';


class Block extends React.Component {
render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <Button 
    title="Intro" 
    to="/" 
  />
 
 
  <Button 
    title="Stream" 
    to="/stream"
  />


  <Button 
    title="Store" 
    to="/store"
  />


  <Button 
    title="Contact" 
    to="/contact" 
  />


</div>
</div>


); } }


export default withStyles(s)(Block);
