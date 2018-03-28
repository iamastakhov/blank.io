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
            Oleg Ast.
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
            Ctrl Interactive System
          </a>
        </h5>

      </div>



      <div className={s.card_content}>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
          <a href="http://demo.getrelax.io/admin">
            demo.getrelax.io/admin
          </a>
        </p>

      </div>



    </div>
  );
}

export default withStyles(Card, s);
