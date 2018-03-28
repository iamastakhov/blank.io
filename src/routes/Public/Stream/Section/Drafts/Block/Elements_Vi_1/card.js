import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../../../../../components/style.scss';
import {FaVimeo, FaPlay, FaHeart, FaComment} from 'react-icons/lib/fa';

function Card() {
  return (
    <div className={cx(s.column, s.width_384_px, s.card, s.card_background_color)}>



      <div className={s.card_thumbnail}>
        <img src={require('./img/post.jpg')} width="368px" alt="" />
      </div>

      <div className={s.card_thumbnail}>
        <img src={require('./img/controls.jpg')} width="368px" alt="" />
      </div>

      <div className={s.card_meta}>

      <div className={s.float_left}>
        <p>
          <a href="https://vimeo.com/raccordcollective">
            Raccord
          </a>
        </p>



      </div>

      <div className={s.float_right}>
        <a href="https://vimeo.com/179661852">
          <FaVimeo className={s.icon} />
        </a>
      </div>

      </div>



      <div className={s.card_title}>

        <h5>
          <a href="https://vimeo.com/179661852">
            Elements
          </a>
        </h5>

      </div>



      <div className={s.card_stats}>

        <a href="">
          <FaPlay className={s.icon} />
          <p>
            1,523
          </p>
        </a>

        <a href="">
          <FaHeart className={s.icon} />
          <p>
            51
          </p>
        </a>

        <a href="">
          <FaComment className={s.icon} />
          <p>
            1
          </p>
        </a>

      </div>



    </div>
  );
}

export default withStyles(Card, s);
