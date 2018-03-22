import React from 'react';

import { FaCaretDown, FaBehance, FaHeart, FaMailForward, FaComment } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';

import ThumbnailUrl from './Image.png';


class Block extends React.Component {
render() {
return (


<div className={s.Block}>
<div className={s.Container}>


<div className={s.Row}>
<div className={s.Left}>


  <a className={cx(s.Button, s.Link)} href="">
    <span className={s.Title}>
      12 Authors
    </span>
    <FaCaretDown className={cx(s.Glyph, s.Right)} />
  </a>


</div>
<div className={s.Right}>


  <a className={cx(s.Button, s.Link)} href="">
    <FaBehance className={s.Glyph} />
  </a>


</div>
</div>


<div className={s.Row}>


<img className={s.Thumbnail} src={ThumbnailUrl} />


</div>


<div className={s.Row}>


  <h5 className={s.Title}>
    <a href="">
    Product Number One
    </a>
  </h5>


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
<div className={s.Right}>


  <a className={cx(s.Button, s.Link)} href="">
  <span className={s.Title}>
    9,8K
  </span>
  <FaHeart className={cx(s.Glyph, s.Right)} />
  </a>

  <a className={cx(s.Button, s.Link)} href="">
  <span className={s.Title}>
    654
  </span>
  <FaMailForward className={cx(s.Glyph, s.Right)} />
  </a>

  <a className={cx(s.Button, s.Link)} href="">
  <span className={s.Title}>
    321
  </span>
  <FaComment className={cx(s.Glyph, s.Right)} />
  </a>


</div>
</div>


<div className={cx(s.Background, s.Color)} />


</div>
</div>


); } }


export default withStyles(s)(Block);