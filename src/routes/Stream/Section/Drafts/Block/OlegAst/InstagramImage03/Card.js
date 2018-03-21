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
          Mauris eleifend non eros quis euismod. Aenean velit odio, tempor ac
           tempor id, feugiat sed mauris. In vel diam sit amet sem tempus
           commodo pellentesque sed risus.
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
