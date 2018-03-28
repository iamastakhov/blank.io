import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../../../../../components/style.scss';
import {FaGithubAlt, FaEye, FaStar, FaCodeFork} from 'react-icons/lib/fa';

function Card() {
  return (
    <div className={cx(s.column, s.width_384_px, s.card, s.card_background_color)}>



      <div className={s.card_meta}>

      <div className={s.float_left}>
        <p>
          <a href="https://github.com/relax">
            Relax
          </a>
        </p>



      </div>

      <div className={s.float_right}>
        <a href="https://github.com/relax/relax">
          <FaGithubAlt className={s.icon} />
        </a>
      </div>

      </div>



      <div className={s.card_title}>

        <h5>
          <a href="">
            Bartrr - Swap Service
          </a>
        </h5>

      </div>



      <div className={s.card_content}>

        <p>
          New generation CMS on top of React, Redux and GraphQL&nbsp;
          <a href="http://demo.getrelax.io/admin">
            demo.getrelax.io/admin
          </a>
        </p>

      </div>



      <div className={s.card_stats}>

        <a href="">
          <FaEye className={s.icon} />
          <p>
            337
          </p>
        </a>

        <a href="">
          <FaStar className={s.icon} />
          <p>
            6,024
          </p>
        </a>

        <a href="">
          <FaCodeFork className={s.icon} />
          <p>
            366
          </p>
        </a>

      </div>



    </div>
  );
}

export default withStyles(Card, s);
