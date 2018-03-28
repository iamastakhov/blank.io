import React from 'react';
import { FaSearch, FaLevelUp } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';

import Link from '../../../../Link';


class Block extends React.Component {

render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <div className={s.Input}>
  <FaSearch className={cx(s.Glyph, s.Left)} />
  <input 
    className={s.Title} 
    type="text" s
    placeholder="Type here..." 
  />
  </div>

  <Link 
    className={s.Button}
    to=""
  >
  <FaLevelUp className={s.Glyph} />
  </Link>

</div>
</div>


); } }


export default withStyles(s)(Block);
