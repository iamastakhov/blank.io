import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';


import Scrollchor from 'react-scrollchor';


import { FaLongArrowDown } from 'react-icons/lib/fa';


class Block extends React.Component {


render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <Scrollchor to="" className={s.Button}>
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
