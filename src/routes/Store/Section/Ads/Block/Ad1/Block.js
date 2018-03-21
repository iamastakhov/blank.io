import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';


import { FaTwitter } from 'react-icons/lib/fa';
import AuthorUrl from './Image.png';


class Block extends React.Component {
render() {
return (


<div className={s.Block}>
<div className={s.Container}>


<img className={s.Thumbnail}
  src={AuthorUrl} 
/>


<div className={s.Content}>


  <h5 className={s.Title}>
  <a href="">
    Advertising 1
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


<hr className={s.Divider} />


<div className={s.Meta}>
<div className={s.Left}>


  <a className={s.Button} href="">
  <img className={cx(s.Avatar, s.Left)} src={AuthorUrl} />
  <span className={s.Title}>
    Name Surname
  </span>
  </a>


</div>
<div className={s.Right}>


  <a className={s.Button} href="">
  <span className={s.Title}>
    01 Jan 2000
  </span>
  <FaTwitter className={cx(s.Glyph, s.Right)} />
  </a>


</div>
</div>


<div className={cx(s.Background, s.Color)} />


</div>
</div>



); } }


export default withStyles(s)(Block);