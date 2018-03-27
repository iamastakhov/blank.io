import React from 'react';

import { FaSlideshare, FaHeart, FaMailForward, FaComment, FaEllipsisH, FaBackward, FaPlay, FaForward } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';

import AvatarUrl from './Avatar.png';
import ImageUrl from './Image.jpg';


class Block extends React.Component {
render() {
return (


<div className={s.Block}>
<div className={s.Container}>


<div className={s.Row}>
<div className={s.Left}>


  <a className={cx(s.Button, s.Link)} href="">
  <img className={cx(s.Avatar, s.Left)} src={AvatarUrl} />
  <span className={s.Title}>
    Name Surname
  </span>
  </a>


</div>
<div className={s.Right}>


  <a className={cx(s.Button, s.Link)} href="">
  <span className={s.Title}>
    21 Jun at 13:46
  </span>
  <FaSlideshare className={cx(s.Glyph, s.Right)} />
  </a>


</div>
</div>


<div className={s.Row}>


  <img className={s.Image} src={ImageUrl} />


</div>


<div className={s.Row}>
<div className={s.Left}>


  <a className={cx(s.Button, s.Link)} href="">
  <FaBackward className={s.Glyph} />
  </a>

  <a className={cx(s.Button, s.Link)} href="">
  <FaPlay className={s.Glyph} />
  </a>

  <a className={cx(s.Button, s.Link)} href="">
  <FaForward className={s.Glyph} />
  </a>  


</div>
<div className={s.Right}>


  <a className={cx(s.Button, s.Link)} href="">
  <span className={s.Title}>
    1 — 10
  </span>
  </a>


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


<div className={s.Row}>


<hr className={s.Divider} />


</div>


<div className={s.Row}>
<div className={s.Left}>


  <a className={cx(s.Button, s.Link)} href="">
  <span className={s.Title}>
    9876
  </span>
  <FaHeart className={cx(s.Glyph, s.Right)} />
  </a>

  <a className={cx(s.Button, s.Link)} href="">
  <span className={s.Title}>
    543
  </span>
  <FaMailForward className={cx(s.Glyph, s.Right)} />
  </a>

  <a className={cx(s.Button, s.Link)} href="">
  <span className={s.Title}>
    21
  </span>
  <FaComment className={cx(s.Glyph, s.Right)} />
  </a>


</div>
<div className={s.Right}>


  <a className={cx(s.Button, s.Link)} href="">
  <FaEllipsisH className={s.Glyph} />
  </a>


</div>
</div>


<div className={cx(s.Background, s.Color)} />


</div>
</div>


); } }


export default withStyles(s)(Block);