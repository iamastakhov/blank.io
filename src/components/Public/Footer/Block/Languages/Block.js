import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';


import Link from '../../../../Link';
import { FaCaretDown } from 'react-icons/lib/fa';


class Block extends React.Component {


render() {
return (


<div className={s.Block}>
<div className={s.Container}>


<div className={s.List}>


  <div className={cx(s.Button, s.Label)}>
  <span className={s.Title}>
    Language
  </span>
  <FaCaretDown className={cx(s.Glyph, s.Right)} />
  </div>


  <div className={s.Item}>
  <Link className={s.Button} to="/">
  <span className={s.Title}>
    English
  </span>
  </Link>
  </div>


  <div className={s.Item}>
  <Link className={s.Button} to="/">
  <span className={s.Title}>
    Русский
  </span>
  </Link>
  </div>


  <div className={s.Item}>
  <Link className={s.Button} to="/">
  <span className={s.Title}>
    汉语漢語
  </span>
  </Link>
  </div>


</div>


</div>
</div>


);
}
}


export default withStyles(s)(Block);
