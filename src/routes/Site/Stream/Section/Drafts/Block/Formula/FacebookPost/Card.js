import React from 'react';
import { FaFacebook } from 'react-icons/lib/fa';

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
            Formula —
             Creative Crowdsource Agency :
             Identity, Branding Materials & Website
          </a>
        </h6>


        <p className={s.Description}>
          Art Direction, Graphic Design, Creative Direction Art Direction,
           Graphic Design, Creative Direction Art Direction, Graphic Design,
           Creative Direction Art Direction, Graphic Design, Creative Direction
        </p>


        <div className={s.Meta}>

          <button className={s.Button}>
            <a href="">
              <FaFacebook className={s.Icon} />
            </a>
          </button>

        </div>


      </div>

    );
  }
}


export default withStyles(s)(Card);
