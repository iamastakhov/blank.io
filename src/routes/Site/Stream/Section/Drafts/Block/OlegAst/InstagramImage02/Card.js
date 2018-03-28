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
          Cras non lectus semper, blandit augue eu, ultricies turpis. Vestibulum
           aliquam magna id nisl sodales egestas. Mauris ut purus fringilla,
           varius magna eget, ultrices lacus. Praesent feugiat imperdiet
           facilisis. Etiam auctor magna nunc, eu cursus nulla laoreet eget.
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
