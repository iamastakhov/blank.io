import React from 'react';
import Scrollchor from 'react-scrollchor';


import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';


import { FaLongArrowUp } from 'react-icons/lib/fa';


class Block extends React.Component {


render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <Scrollchor className={s.Button} to="Header">
    <span className={s.Title}> 
      Scroll
    </span>
    <FaLongArrowUp className={s.Glyph} />
  </Scrollchor>


</div>
</div>


);
}
}


export default withStyles(s)(Block);
