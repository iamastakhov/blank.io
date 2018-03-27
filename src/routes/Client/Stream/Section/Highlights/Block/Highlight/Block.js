import React from 'react';

import { FaCaretDown, FaFacebook, FaHeart, FaMailForward, FaComment, FaEllipsisH } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../Block.css';

import AvatarUrl from './Image.png';
import ImageUrl from './Image.jpg';


class Block extends React.Component {
render() {
return (


<div className={s.Block}>
<div className={s.Container}>


<div className={s.Row}>
<div className={s.Right}>


  <a className={cx(s.Button, s.Link)} href="">
  <span className={s.Title}>
    21 Jun at 13:46
  </span>
  <FaFacebook className={cx(s.Glyph, s.Right)} />
  </a>


</div>
</div>


<div className={s.Row}>

  <h5 className={s.Title}>
  <a href="">
    Facebook Event —
  <br />
    02 Feb 2018
  </a>
  </h5>


  <p className={s.Description}>
    Art Direction, Graphic Design, Creative Direction Art Direction,
    Graphic Design, Creative Direction Art Direction, Graphic Design,
    Creative Direction Art Direction, Graphic Design. Art Direction, 
    Graphic Design, Creative Direction Art Direction, Graphic Design,
    Graphic Design, Creative Direction Art Direction, Graphic Design,
    Creative Direction Art Direction, Graphic Design
  </p>


</div>


</div>
</div>


); } }


export default withStyles(s)(Block);