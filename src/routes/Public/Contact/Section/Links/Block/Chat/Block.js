import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';


import { FaPhone, FaPaperPlaneO, FaWhatsapp, FaSkype } from 'react-icons/lib/fa';


class Block extends React.Component {


render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <h4 className={s.Title}>
    Messengers
  </h4>


  <hr className={s.Divider} />


  <ul className={s.List}>

  <a className={s.Item}
    href="" 
  >
    <FaPaperPlaneO className={s.Glyph} />
    <span className={s.Title}>
      telegram @olegask
    </span>
  </a>

  <a className={s.Item}
    href="" 
  >
    <FaWhatsapp className={s.Glyph} />
    <span className={s.Title}>
      whatsapp @olegask
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
