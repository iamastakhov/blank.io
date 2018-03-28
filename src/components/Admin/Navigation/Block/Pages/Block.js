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
    title="Dashboard" 
    to="/admin" 
  />
 
  <Button 
    title="Profile" 
    to="/admin/profile"
  />

  <Button 
    title="Settings" 
    to="/admin/settings"
  />


</div>
</div>


); } }


export default withStyles(s)(Block);
