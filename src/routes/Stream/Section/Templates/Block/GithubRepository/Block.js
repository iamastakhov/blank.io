import React from 'react';

import { FaGithub } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';


class Block extends React.Component {

  render() {
    return (


      <div className={s.Block}>


        <div className={s.Column}>


          <div className={cx(s.Meta, s.Right)}>

            <button className={s.Button}>
              <a href="">
                <p className={s.Title}>
                  31 Jan
                </p>
                <FaGithub className={cx(s.Glyph, s.Right)} />
              </a>
            </button>

          </div>


          <h6 className={s.Title}>
            <a href="">
              Title Example
            </a>
          </h6>


          <p className={s.Description}>
            Art Direction, Graphic Design, Creative Direction Art Direction,
             Graphic Design, Creative Direction Art Direction, Graphic Design,
             Creative Direction Art Direction, Graphic Design, Creative Direction
          </p>


        </div>


      </div>


    );
  }
}


export default withStyles(s)(Block);
