import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../../../../../components/style.scss';
import {FaPinterestP, FaUser, FaThumbTack} from 'react-icons/lib/fa';

function Card() {
  return (
    <div className={cx(s.column, s.width_384_px, s.card, s.card_background_color)}>



      <div className={s.card_thumbnail}>
        <img src={require('./img/post.jpg')} width="368px" alt="" />
      </div>



      <div className={s.card_meta}>

      <div className={s.float_left}>
        <p>
          <a href="https://ru.pinterest.com/iamolegast/">
            Oleg Astakhov
          </a>
        </p>



      </div>

      <div className={s.float_right}>
        <a href="https://ru.pinterest.com/iamolegast/visual/">
          <FaPinterestP className={s.icon} />
        </a>
      </div>

      </div>



      <div className={s.card_title}>

        <h5>
          <a href="">
            Spektr
          </a>
        </h5>

      </div>



      <div className={s.card_content}>

        <p>
          Graphic. Printed. Editorial. Collage. Patters.
        </p>

      </div>



      <div className={s.card_stats}>

        <a href="">
          <FaThumbTack className={s.icon} />
          <p>
            137
          </p>
        </a>

        <a href="">
          <FaUser className={s.icon} />
          <p>
            26
          </p>
        </a>

      </div>



    </div>
  );
}

export default withStyles(Card, s);
