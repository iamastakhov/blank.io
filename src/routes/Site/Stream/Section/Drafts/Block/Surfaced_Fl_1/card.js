import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../../../../../components/style.scss';
import {FaFlickr, FaCamera, FaEye} from 'react-icons/lib/fa';

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
          <a href="https://www.flickr.com/photos/sasha_chui/">
            Alexandra Sukhova
          </a>
        </p>



      </div>

      <div className={s.float_right}>
        <a href="https://www.flickr.com/photos/sasha_chui/28330104436/">
          <FaFlickr className={s.icon} />
        </a>
      </div>

      </div>



      <div className={s.card_title}>

        <h5>
          <a href="">
            Surfaced - Environmental Affects
          </a>
        </h5>

      </div>



      <div className={s.card_content}>

        <p>
          Camera : Pentacon TTL
          <br />
          Film : Ilford delta 400
        </p>

      </div>



      <div className={s.card_stats}>

        <a href="">
          <FaCamera className={s.icon} />
          <p>
            55
          </p>
        </a>

        <a href="">
          <FaEye className={s.icon} />
          <p>
            1,248
          </p>
        </a>

      </div>



    </div>
  );
}

export default withStyles(Card, s);
