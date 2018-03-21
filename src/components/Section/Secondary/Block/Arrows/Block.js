import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';


import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FaLongArrowLeft, FaLongArrowRight, FaLongArrowDown } from 'react-icons/lib/fa';


import Link from '../../../../Link';


class Block extends React.Component {


render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <ButtonBack className={s.Button}>
    <FaLongArrowLeft className={cx(s.Glyph, s.Left)} />
    <span className={s.Title}>
      Previous
    </span>
  </ButtonBack>


  <ButtonNext className={s.Button}>
    <span className={s.Title}>
      Next
    </span>
    <FaLongArrowRight className={cx(s.Glyph, s.Right)} />
  </ButtonNext>


</div>
</div>


); } }


export default withStyles(s)(Block);
