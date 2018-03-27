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
            Formula —
             Creative Crowdsource Agency :
             Introduction Video
          </a>
        </h6>


        <p className={s.Description}>
          Integer posuere sagittis nibh, ac sodales metus efficitur vel. Quisque
           vitae auctor lectus. Cras lorem sem, convallis nec sem vitae,
           interdum lacinia sapien.
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
