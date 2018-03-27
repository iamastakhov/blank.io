import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';


import { FaInstagram, FaDollar, FaEur } from 'react-icons/lib/fa';


import AuthorUrl from './Image.jpg';
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


  <a className={cx(s.Button, s.Link, s.Social)} href="">
    <FaInstagram className={s.Glyph} />
  </a>


</div>
</div>


<div className={s.Row}>
<hr className={s.Divider} />
</div>


<div className={s.Row}>


  <h5 className={s.Title}>
    <a href="">
    Product Number One
    </a>
  </h5>


  <h6 className={s.Description}>
    Anytime. Anywhere.
    Look around. Explore.
    Interest trigger imagination.
    Ideas born crossorads.
    Fast life.
    Anytime. Anywhere.
    Look around. Explore.
  </h6>


</div>


<div className={s.Row}>
<hr className={s.Divider} />
</div>


<div className={s.Row}>
<div className={s.Left}>


  <a className={cx(s.Button, s.Link, s.Highlight)} href="">
  <span className={s.Title}>
    Buy Item
  </span>
  </a>


</div>
<div className={s.Right}>


  <div className={s.Button}>
  <span className={s.Title}>
    1 000 000
  </span>
  <FaDollar className={cx(s.Glyph, s.Right)} />
  </div>


</div>
</div>


<div className={cx(s.Background, s.Overlay)}/>
<img className={cx(s.Background, s.Image)} src={ThumbnailUrl}/>
<div className={cx(s.Background, s.Color)} />


</div>
</div>


); } }


export default withStyles(s)(Block);