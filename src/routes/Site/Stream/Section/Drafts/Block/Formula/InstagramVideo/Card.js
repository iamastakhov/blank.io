import React from 'react';

import { FaInstagram } from 'react-icons/lib/fa';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../../../Card.css';

import ImageUrl from './Image.jpg';


class Card extends React.Component {

  render() {
    return (

      <div className={s.Card}>


        <img className={s.Image} src={ImageUrl} alt="" />


        <p className={s.Description}>
          Nullam quis quam varius, malesuada ipsum quis, pulvinar leo. Phasellus
           sagittis dolor mi, vel vulputate odio sodales vel. Curabitur
           consequat velit a bibendum eleifend. Praesent tristique tellus ac
           augue sodales dapibus. Nunc auctor quis lacus id dictum. Nunc quam
           neque, faucibus nec ex eu, sodales tempor turpis. Duis vulputate
           luctus malesuada.
        </p>


        <div className={s.Meta}>

          <button className={s.Button}>
            <a href="">
              <FaInstagram className={s.Icon} />
            </a>
          </button>

        </div>


      </div>

    );
  }
}


export default withStyles(s)(Card);
