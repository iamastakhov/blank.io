import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../../../../../components/style.scss';
import {FaPinterestP, FaUser, FaThumbTack} from 'react-icons/lib/fa';

function Card() {
  return (
    <div className={cx(s.column, s.width_384_px, s.card, s.card_background_color)}>



      <div className={s.card_meta}>

      <div className={s.float_left}>
        <p>
          <a href="https://ru.pinterest.com/iamolegast/">
            Oleg Ast.
          </a>
        </p>



      </div>

      <div className={s.float_right}>
        <a href="https://ru.pinterest.com/iamolegast/visual/">
          <FaPinterestP className={s.icon} />
        </a>
      </div>

      </div>


      <div className={s.card_thumbnail}>
        <img src={require('./img/post.jpg')} width="368px" alt="" />
      </div>



      <div className={s.card_title}>

        <h5>
          <a href="">
            Ctrl Interactive System : Product Branding & Identity - Reference Board
          </a>
        </h5>

      </div>



      <div className={s.card_content}>

        <p>
          Branding, Cinematography, Copywriting, Creative Direction,
          Editorial Design, Graphic Design, Icon Design, Photography,
          Print Design
        </p>

      </div>



    </div>
  );
}

export default withStyles(Card, s);
