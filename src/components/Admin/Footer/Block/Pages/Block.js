import React from 'react';
import Scrollchor from 'react-scrollchor';

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
    title="Dashboard" 
    to="/admin" 
  />


  <div className={s.Item}>
  <Link
    className={s.Button} 
    to="/#services"
  >
  <span className={s.Title}>
    Services
  </span>
  </Link>
  </div>


  <div className={s.Item}>
  <Link
    className={s.Button} 
    to="/#skills"
  >
  <span className={s.Title}>
    Skills
  </span>
  </Link>
  </div>


  <div className={s.Item}>
  <Link
    className={s.Button} 
    to="/#bio"
  >
  <span className={s.Title}>
    Bio
  </span>
  </Link>
  </div>
 

</div>
 

<div className={s.List}>


  <Button 
    title="Profile" 
    to="/admin/profile" 
  />


  <div className={s.Item}>
  <Link
    className={s.Button} 
    to="/stream#highlights"
  >
  <span className={s.Title}>
    Highlights
  </span>
  </Link>
  </div>


  <div className={s.Item}>
  <Link
    className={s.Button} 
    to="/stream#posts"
  >
  <span className={s.Title}>
    Posts
  </span>
  </Link>
  </div>


</div>


<div className={s.List}>


  <Button 
    title="Settings" 
    to="/admin/settings" 
  />


  <div className={s.Item}>
  <Link
    className={s.Button} 
    to="/store#ads"
  >
  <span className={s.Title}>
    Ads
  </span>
  </Link>
  </div>


  <div className={s.Item}>
  <Link
    className={s.Button} 
    to="/store#products"
  >
  <span className={s.Title}>
    Products
  </span>
  </Link>
  </div>
 

</div>


</div>
</div>


); } }


export default withStyles(s)(Block);
