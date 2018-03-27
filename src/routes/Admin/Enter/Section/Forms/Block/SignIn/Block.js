import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';


import { FaMailForward, FaPaperclip } from 'react-icons/lib/fa';
import Link from '../../../../../../../components/Link';


class Block extends React.Component {


render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <h4 className={s.Title}>
    Sign in
  </h4>


  <hr className={s.Divider} />


  <form className={s.Form}>

  <input 
    className={s.Input} 
    type="text" 
    placeholder="Username or e-mail" 
  />
  
  <input 
    className={s.Input} 
    type="text" 
    placeholder="Password" 
  />

  </form>


  <div className={s.Meta}>
  <div className={s.Right}>

    <Link className={s.Button} to="/contact">
    <FaMailForward className={s.Glyph} />
    <p className={s.Title}>
      Enter
    </p>
    </Link>

  </div>
  </div>


<div className={cx(s.Background, s.Color)} />


</div>
</div>


);
}
}


export default withStyles(s)(Block);
