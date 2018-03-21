import React from 'react';

import { FaFacebook } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';

import ImageUrl from './Image.jpg';
import AvatarUrl from './Avatar.png';


class Block extends React.Component {

  render() {
    return (


      <div className={s.Block}>


        <div className={s.Column}>


          <div className={s.Meta}>


            <div className={s.Left}>


              <button className={s.Button}>
                <a href="">
                  <img className={cx(s.Avatar, s.Left)} src={AvatarUrl} alt="" />
                  <p className={s.Title}>
                    Zorik Istomin
                  </p>
                </a>
              </button>


            </div>


            <div className={s.Right}>


              <button className={s.Button}>
                <a href="">
                  <p className={s.Title}>
                    June 10 at 14:16
                  </p>
                  <FaFacebook className={cx(s.Glyph, s.Right)} />
                </a>
              </button>


            </div>


          </div>


          <h5 className={s.Date}>
            16 June 2017
          </h5>


          <h6 className={s.Title}>
            <a href="">
              The Universal :
              <br />
              First Exhibition of Zorian Istomin
            </a>
          </h6>


          <p className={s.Description}>
            Digital artist. Designer. Inventor.
            Founder & Creative Director of
            &nbsp;
            <a href="">
            Smokin Heroes
            </a>
            .
            Author of the first Russian
            &nbsp;
            <a href="">
            sticker book
            </a>
            .
            Inventor of backpack - hammock
            &nbsp;
            <a herf="">
            Hammo Bag
            </a>
            .
          </p>


          <img className={s.Image} src={ImageUrl} alt="" />


        </div>


      </div>


    );
  }
}


export default withStyles(s)(Block);
