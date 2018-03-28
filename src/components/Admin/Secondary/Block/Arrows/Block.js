import React from 'react';
import { ButtonFirst, ButtonBack, ButtonNext, ButtonLast } from 'pure-react-carousel';
import { FaStepBackward, FaCaretLeft, FaCaretRight, FaStepForward } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';

import Link from '../../../../Link';


class Block extends React.Component {

render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <ButtonFirst className={s.Button}>
  <FaStepBackward className={s.Glyph} />
  </ButtonFirst>


  <ButtonBack className={s.Button}>
  <span className={s.Title}>
    Prev.
  </span>
  <FaCaretLeft className={cx(s.Glyph, s.Right)} />
  </ButtonBack>


  <ButtonNext className={s.Button}>
  <FaCaretRight className={cx(s.Glyph, s.Left)} />
  <span className={s.Title}>
    Next
  </span>
  </ButtonNext>


  <ButtonLast className={s.Button}>
  <FaStepForward className={s.Glyph} />
  </ButtonLast>


</div>
</div>


); } }


export default withStyles(s)(Block);
