import React from 'react';

import { FaFacebook, FaBackward, FaPlay, FaForward } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';

import ThumbnailUrl from './Image.jpg';


class Block extends React.Component {
render() {
return (


<div className={s.Block}>
<div className={s.Container}>


<div className={s.Row}>
<div className={s.Right}>


  <a className={cx(s.Button, s.Link)} href="">
  <FaFacebook className={s.Glyph} />
  </a>


</div>
</div>


<div className={s.Row}>
  <img className={s.Thumbnail} src={ThumbnailUrl} />
</div>


<div className={s.Row}>
<div className={s.Left}>

  <a className={cx(s.Button, s.Link)} href="">
   <FaBackward className={s.Glyph}/>
  </a>

  <a className={cx(s.Button, s.Link, s.Highlight)} href="">
   <FaPlay className={s.Glyph}/>
  </a>

  <a className={cx(s.Button, s.Link)} href="">
   <FaForward className={s.Glyph}/>
  </a>


</div>
<div className={s.Right}>


  <div className={s.Button} href="">
  <span className={s.Title}>
    7 — 10
  </span>
  </div>


</div>
</div>


<div className={s.Row}>
<hr className={s.Divider} />
</div>


<div className={s.Row}>


  <p className={s.Description}>
    Art Direction, Graphic Design, Creative Direction Art Direction,
    Graphic Design, Creative Direction Art Direction, Graphic Design,
    Creative Direction Art Direction, Graphic Design
  </p>


</div>


<div className={cx(s.Background, s.Color)} />


</div>
</div>


); } }


export default withStyles(s)(Block);