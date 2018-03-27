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
           Nullam semper elementum metus aliquam ultricies. Aliquam lacinia eu
           lorem ac bibendum. Suspendisse eu blandit metus. Nulla vulputate elit
           ac nulla placerat, vel vulputate erat hendrerit. Aliquam erat
           volutpat. Quisque sollicitudin arcu semper erat interdum consequat.
           Proin volutpat, nisl vel viverra lobortis, magna risus rhoncus
           ligula, vitae convallis velit mauris vel elit.
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
