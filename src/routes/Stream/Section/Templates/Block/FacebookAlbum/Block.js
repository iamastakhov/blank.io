import React from 'react';

import { FaFacebook, FaBackward, FaForward, FaArrowsAlt } from 'react-icons/lib/fa';

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
                  3 March 2015
                </p>
                <FaFacebook className={cx(s.Glyph, s.Right)} />
              </a>
            </button>

          </div>


          <img className={s.Image} src={ImageUrl} alt="" />


          <div className={cx(s.Control, s.Left)}>

            <button className={s.Button}>
              <a href="">
                <FaBackward className={s.Glyph} />
              </a>
            </button>

            <button className={s.Button}>
              <a href="">
                <FaForward className={s.Glyph} />
              </a>
            </button>

            <button className={s.Button}>
              <a href="">
                <FaArrowsAlt className={s.Glyph} />
              </a>
            </button>

          </div>

          <div className={cx(s.Control, s.Right)}>

            <button className={s.Button}>
              <a href="">
                <p className={s.Title}>
                  4 - 9
                </p>
              </a>
            </button>

          </div>

          <p className={s.Description}>
            На прошлой неделе я вернулся из Лондона, где работал над созданием
             четырех фанерных произведений для групповой выставки в Lollipop
             Gallery. В экспозиции представлены работы Misha Most, Vova Nootk,
             Mint&Serf, а также принты Шепарда Фейри. Выставка проходит до
             22-го марта. На фото можно увидеть серию из трех работ под
             названием «Последствия».
          </p>


        </div>


      </div>


    );
  }
}


export default withStyles(s)(Block);
