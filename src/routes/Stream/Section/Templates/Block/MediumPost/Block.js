import React from 'react';

import { FaMedium } from 'react-icons/lib/fa';

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
                    Keaton Herzer
                  </p>
                </a>
              </button>


            </div>


            <div className={s.Right}>


              <button className={s.Button}>
                <a href="">
                  <p className={s.Title}>
                    June 1, 2016
                  </p>
                  <FaMedium className={cx(s.Glyph, s.Right)} />
                </a>
              </button>


            </div>


          </div>


          <h6 className={s.Title}>
            <a href="">
              The Ideal Design Workflow
            </a>
          </h6>


          <p className={s.Description}>
            As designers, we are constantly experimenting with tools and
             processes in an attempt to find the one that works best. After a
             great deal of experimentation, I’ve discovered the perfect design
             workflow, and I’m going to share it with you now.
          </p>


          <img className={s.Image} src={ImageUrl} alt="" />


        </div>


      </div>


    );
  }
}


export default withStyles(s)(Block);
