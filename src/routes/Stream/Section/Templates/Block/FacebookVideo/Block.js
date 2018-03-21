import React from 'react';

import { FaFacebook, FaPlay, FaArrowsAlt, FaVolumeUp } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';

import ImageUrl from './Image.jpg';


class Block extends React.Component {

  render() {
    return (


      <div className={s.Block}>


        <div className={s.Column}>


          <div className={cx(s.Meta, s.Right)}>

            <button className={s.Button}>
              <a href="">
                <p className={s.Title}>
                  6 hours ago
                </p>
                <FaFacebook className={cx(s.Glyph, s.Right)} />
              </a>
            </button>

          </div>


          <img className={s.Image} src={ImageUrl} alt="" />


          <div className={cx(s.Control, s.Left)}>

            <button className={s.Button}>
              <a href="">
                <FaPlay className={s.Glyph} />
              </a>
            </button>

            <button className={s.Button}>
              <a href="">
                <FaArrowsAlt className={s.Glyph} />
              </a>
            </button>

            <button className={s.Button}>
              <a href="">
                <FaVolumeUp className={s.Glyph} />
              </a>
            </button>

          </div>

          <div className={cx(s.Control, s.Right)}>

            <button className={s.Button}>
              <a href="">
                <p className={s.Title}>
                  07 : 26 — 45 : 13
                </p>
              </a>
            </button>

          </div>

          <p className={s.Description}>
            This spider bot is adorable (via&nbsp;<a href="">Futurism</a>)
          </p>


        </div>


      </div>


    );
  }
}


export default withStyles(s)(Block);
