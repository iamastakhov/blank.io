import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../../../../../components/style.scss';
import {FaBehance, FaEye, FaThumbsUp, FaComment} from 'react-icons/lib/fa';

function Card() {
  return (
    <div className={cx(s.column, s.width_384_px, s.card, s.card_background_color)}>



      <div className={s.card_thumbnail}>
        <img src={require('./img/post.jpg')} width="368px" alt="" />
      </div>



      <div className={s.card_meta}>

      <div className={s.float_left}>
        <p>
          <a href="https://www.behance.net/hello5f73">
            CTDL Games
          </a>,&nbsp;
          <a href="https://www.behance.net/studiokxx">
            Studio KXX
          </a>,&nbsp;
          <a href="https://www.behance.net/bucz">
            Piotr Buczkowski
          </a>&nbsp;+&nbsp;
          <a href="https://www.behance.net/gallery/41336439/Sonder6">
            2
          </a>
        </p>



      </div>

      <div className={s.float_right}>
        <a href="https://www.behance.net/gallery/41336439/Sonder6">
          <FaBehance className={s.icon} />
        </a>
      </div>

      </div>



      <div className={s.card_title}>

        <h5>
          <a href="">
            MotionsEmotions
          </a>
        </h5>

      </div>



      <div className={s.card_content}>

        <p>
          Graphic Design, Interaction Design, Game Design
        </p>

      </div>



      <div className={s.card_stats}>

        <a href="">
          <FaEye className={s.icon} />
          <p>
            6795
          </p>
        </a>

        <a href="">
          <FaThumbsUp className={s.icon} />
          <p>
            621
          </p>
        </a>

        <a href="">
          <FaComment className={s.icon} />
          <p>
            65
          </p>
        </a>

      </div>



    </div>
  );
}

export default withStyles(Card, s);
