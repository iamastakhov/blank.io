import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';


import { FaClockO } from 'react-icons/lib/fa';


class Block extends React.Component {


render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <h4 className={s.Title}>
    Past events
  </h4>


  <h6 className={s.Description}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
    tincidunt, purus nec scelerisque lacinia.
  </h6>


  <hr className={s.Divider} />


  <ul className={s.List}>


  <li className={s.Item}>

    <h6 className={s.Title}>
      Studied&nbsp; 
      <a href="">
      Web-site
      </a>
      &nbsp;and&nbsp; 
      <a href="">
      social networks
      </a>
      &nbsp;launch.
    </h6>

    <div className={s.Button}>
    <FaClockO className={s.Glyph} />
    <span className={s.Title}>
      summer 2008
    </span>
    </div>

  </li>

  <li className={s.Item}>

    <h6 className={s.Title}>
      Studied&nbsp; 
      <a href="">
      Web-site
      </a>
      &nbsp;and&nbsp; 
      <a href="">
      social networks
      </a>
      &nbsp;launch.
    </h6>

    <div className={s.Button}>
    <FaClockO className={s.Glyph} />
    <span className={s.Title}>
      summer 2008
    </span>
    </div>

  </li>

  </ul>


<div className={cx(s.Background, s.Color)} />
<div className={cx(s.Background, s.Shadow)} />


</div>
</div>


);
}
}


export default withStyles(s)(Block);
