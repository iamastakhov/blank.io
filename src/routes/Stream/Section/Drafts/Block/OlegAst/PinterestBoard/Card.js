import React from 'react';

import { FaPinterestP } from 'react-icons/lib/fa';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../../../Card.css';

import ImageUrl from './Image.jpg';


class Card extends React.Component {

  render() {
    return (

      <div className={s.Card}>


        <img className={s.Image} src={ImageUrl} alt="" />


        <h6 className={s.Title}>
          <a href="">
            Oleg Ast —
             Design, Direction & Development :
             Identity Reference
          </a>
        </h6>


        <p className={s.Description}>
          Proin mollis sem non lacus blandit, malesuada volutpat tellus
           scelerisque. Maecenas pretium scelerisque eros. Suspendisse volutpat
           bibendum convallis. Nullam quis odio felis.
        </p>


        <div className={s.Meta}>

          <button className={s.Button}>
            <a href="">
              <FaPinterestP className={s.Icon} />
            </a>
          </button>

        </div>

      </div>

    );
  }
}


export default withStyles(s)(Card);
