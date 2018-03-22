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
                    Felipe Pantone
                  </p>
                </a>
              </button>


            </div>


            <div className={s.Right}>


              <button className={s.Button}>
                <a href="">
                  <p className={s.Title}>
                    1 June at 17:41
                  </p>
                  <FaFacebook className={cx(s.Glyph, s.Right)} />
                </a>
              </button>


            </div>


          </div>


          <p className={s.Description}>
            I woke up in
            &nbsp;
            <a href="">
            #NewYorkCity
            </a>
            .
            This evening is the opening
            &nbsp;
            <a href="">
            #interstellaris
            </a>
            &nbsp;
            at
            &nbsp;
            <a href="">
            @grgallery_ny
            </a>
            &nbsp;
            together with
            &nbsp;
            <a href="">
            #albertodifabio
            </a>
            &nbsp;
            <a href="">
            #andreabianconi
            </a>
          </p>


          <img className={s.Image} src={ImageUrl} alt="" />


        </div>


      </div>


    );
  }
}


export default withStyles(s)(Block);
