import React from 'react';
import Scrollchor from 'react-scrollchor';
import { FaLongArrowDown } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';


class Block extends React.Component {

render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <Scrollchor 
    className={s.Button}
    to="posts" 
  >


  <span className={s.Title}>
    Scroll down
  </span>


  <FaLongArrowDown className={cx(s.Glyph, s.Right)} />
  </Scrollchor>


</div>
</div>


);
}
}


export default withStyles(s)(Block);
