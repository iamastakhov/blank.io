import React from 'react';

import { FaVimeo } from 'react-icons/lib/fa';

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
            Oleg Ast. —
             Design, Development & Direction :
             Introduction Video
          </a>
        </h6>


        <p className={s.Description}>
          Nam libero tortor, consectetur facilisis neque sit amet, volutpat
           sollicitudin odio.
        </p>


        <div className={s.Meta}>

          <button className={s.Button}>
            <a href="">
              <FaVimeo className={s.Icon} />
            </a>
          </button>

        </div>


      </div>

    );
  }
}


export default withStyles(s)(Card);
