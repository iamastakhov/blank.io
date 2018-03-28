import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../../../../../components/style.scss';
import {FaInstagram, FaHeart, FaComment, FaMailForward} from 'react-icons/lib/fa';

function Card() {
  return (
    <div className={cx(s.column, s.width_384_px, s.card, s.card_background_color)}>




      <div className={s.card_meta}>

      <div className={s.float_left}>
        <p>
          <a href="https://www.instagram.com/lamborghini/">
            Oleg Ast.
          </a>
        </p>



      </div>

      <div className={s.float_right}>
        <a href="https://www.instagram.com/p/BJnAjXgA4Ii/">
          <FaInstagram className={s.icon} />
        </a>
      </div>

      </div>




            <div className={s.card_thumbnail}>
              <img src={require('./img/post.jpg')} width="368px" alt="" />
            </div>

            <div className={s.card_content}>

              <p>
                Ctrl Interactive System : Product Branding & Identity - Logo.
                #branding #cinematography #copywriting #creativedirection #editorialdesign #graphicdesign #icondesign #photography #printdesign
              </p>

            </div>


    </div>
  );
}

export default withStyles(Card, s);
