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
          Donec consectetur augue bibendum maximus scelerisque. Praesent lacinia
           quam sit amet ante dapibus convallis. Vestibulum at ligula porta,
           tempor mi id, fringilla augue. Vivamus tempus nisi eget odio volutpat
           finibus. Vivamus rutrum iaculis tortor, at gravida massa condimentum
           eu.
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
