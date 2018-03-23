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


  <button className={s.Button}>
    <p className={s.Title}>
      Language
    </p>
    <FaCaretDown className={cx(s.Glyph, s.Right)} />
  </button>


<div className={s.Item}>
<Link className={s.Button} to="/">
<p className={s.Title}>
  English
</p>
</Link>
</div>


<div className={s.Item}>
<Link className={s.Button} to="/">
<p className={s.Title}>
  Русский
</p>
</Link>
</div>


<div className={s.Item}>
<Link className={s.Button} to="/">
<p className={s.Title}>
  汉语漢語
</p>
</Link>
</div>


</div>


</div>
</div>


);
}
}


export default withStyles(s)(Block);
