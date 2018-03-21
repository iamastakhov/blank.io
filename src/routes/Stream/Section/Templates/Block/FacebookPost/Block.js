import React from 'react';

import { FaFacebook } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';

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
                    Felipe Pantone
                  </p>
                </a>
              </button>


            </div>


            <div className={s.Right}>


              <button className={s.Button}>
                <a href="">
                  <p className={s.Title}>
                    June 3 at 19:14
                  </p>
                  <FaFacebook className={cx(s.Glyph, s.Right)} />
                </a>
              </button>


            </div>


          </div>


          <p className={s.Description}>
            Ultradynamic group photographed by @marthacoopergram thanks everyone
             that came to the show on Thursday at @grgallery_ny
          </p>


        </div>


      </div>


    );
  }
}


export default withStyles(s)(Block);
