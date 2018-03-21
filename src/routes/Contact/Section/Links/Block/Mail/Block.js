import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';


import { FaEnvelopeO } from 'react-icons/lib/fa';


class Block extends React.Component {


render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <h4 className={s.Title}>
    E-mail adresses
  </h4>


  <hr className={s.Divider} />


  <ul className={s.List}>

  <a className={s.Item}
    href="" 
  >
    <FaEnvelopeO className={s.Glyph} />
    <span className={s.Title}>
      hola @olegask.me
    </span>
  </a>

  <a className={s.Item}
    href="" 
  >
    <FaEnvelopeO className={s.Glyph} />
    <span className={s.Title}>
      brief @olegask.me
    </span>
  </a>

  </ul>


<div className={cx(s.Background, s.Color)} />


</div>
</div>


);
}
}


export default withStyles(s)(Block);
