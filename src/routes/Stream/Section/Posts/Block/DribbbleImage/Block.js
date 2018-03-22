import React from 'react';

import { FaDribbble } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';

import AuthorUrl from './Image.png';
import ThumbnailUrl from './Image.jpg';


class Block extends React.Component {
render() {
return (


<div className={s.Block}>
<div className={s.Container}>


<div className={s.Row}>
<div className={s.Left}>


  <a className={cx(s.Button, s.Link)} href="">
    <img className={cx(s.Avatar, s.Left)} src={AuthorUrl} />
    <span className={s.Title}>
      Name Surname
    </span>
  </a>


</div>
<div className={s.Right}>


  <a className={cx(s.Button, s.Link)} href="">
    <FaDribbble className={s.Glyph} />
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


<div className={cx(s.Background, s.Color)} />


</div>
</div>


); } }


export default withStyles(s)(Block);