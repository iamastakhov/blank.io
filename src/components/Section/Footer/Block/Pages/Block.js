import React from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';

import Link from '../../../../Link';
import Button from './Button';


class Block extends React.Component {
render() {
return (


<div className={s.Block}>
<div className={s.Container}>


<div className={s.List}>


  <Button 
    title="Intro" 
    to="/" 
  />


  <div className={s.Item}>
  <Link className={s.Button} to="/">
  <span className={s.Title}>
    Services
  </span>
  </Link>
  </div>


  <div className={s.Item}>
  <Link className={s.Button} to="/">
  <span className={s.Title}>
    Skills
  </span>
  </Link>
  </div>


  <div className={s.Item}>
  <Link className={s.Button} to="/">
  <span className={s.Title}>
    Bio
  </span>
  </Link>
  </div>
 

</div>
 

<div className={s.List}>


  <Button 
    title="Stream" 
    to="/stream" 
  />


  <div className={s.Item}>
  <Link className={s.Button} to="/">
  <span className={s.Title}>
    Services
  </span>
  </Link>
  </div>


  <div className={s.Item}>
  <Link className={s.Button} to="/">
  <span className={s.Title}>
    Skills
  </span>
  </Link>
  </div>


  <div className={s.Item}>
  <Link className={s.Button} to="/">
  <span className={s.Title}>
    Bio
  </span>
  </Link>
  </div>



</div>


<div className={s.List}>


  <Button 
    title="Store" 
    to="/store" 
  />


  <div className={s.Item}>
  <Link className={s.Button} to="/">
  <span className={s.Title}>
    Services
  </span>
  </Link>
  </div>


  <div className={s.Item}>
  <Link className={s.Button} to="/">
  <span className={s.Title}>
    Skills
  </span>
  </Link>
  </div>


  <div className={s.Item}>
  <Link className={s.Button} to="/">
  <span className={s.Title}>
    Bio
  </span>
  </Link>
  </div>
 

</div>


<div className={s.List}>


  <Button 
    title="Contact" 
    to="/contact" 
  />


  <div className={s.Item}>
  <Link className={s.Button} to="/">
  <span className={s.Title}>
    Services
  </span>
  </Link>
  </div>


  <div className={s.Item}>
  <Link className={s.Button} to="/">
  <span className={s.Title}>
    Skills
  </span>
  </Link>
  </div>


  <div className={s.Item}>
  <Link className={s.Button} to="/">
  <span className={s.Title}>
    Bio
  </span>
  </Link>
  </div>
 

</div>


</div>
</div>


); } }


export default withStyles(s)(Block);
