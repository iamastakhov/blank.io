import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../../../../../components/style.scss';
import {FaInstagram, FaHeart, FaComment, FaMailForward} from 'react-icons/lib/fa';

function Card() {
  return (
    <div className={cx(s.column, s.width_384_px, s.card, s.card_background_color)}>



      <div className={s.card_thumbnail}>
        <img src={require('./img/post.jpg')} width="368px" alt="" />
      </div>



      <div className={s.card_meta}>

      <div className={s.float_left}>
        <p>
          <a href="https://www.instagram.com/lamborghini/">
            Lamborghini
          </a>
        </p>



      </div>

      <div className={s.float_right}>
        <a href="https://www.instagram.com/p/BJnAjXgA4Ii/">
          <FaInstagram className={s.icon} />
        </a>
      </div>

      </div>



      <div className={s.card_content}>

        <p>
          The Super Trofeo North America is back! Guess wheres the round this weekend and follow the results on @LamborghiniSC
          #Lamborghini #SuperTrofeo
        </p>

      </div>



      <div className={s.card_stats}>

        <a href="">
          <FaHeart className={s.icon} />
          <p>
            37,900 likes
          </p>
        </a>

        <a href="">
          <FaComment className={s.icon} />
        </a>

        <a href="">
          <FaMailForward className={s.icon} />
        </a>

      </div>



    </div>
  );
}

export default withStyles(Card, s);
