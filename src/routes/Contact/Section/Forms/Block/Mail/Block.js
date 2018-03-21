import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';


import { FaMailForward, FaPaperclip } from 'react-icons/lib/fa';
import Link from '../../../../../../components/Link';


class Block extends React.Component {


render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <h4 className={s.Title}>
    Write me an e-mail letter
  </h4>


  <hr className={s.Divider} />


  <form className={s.Form}>

  <input 
    className={s.Input} 
    type="text" 
    placeholder="Back contact" 
  />
  
  <input 
    className={s.Input} 
    type="text" 
    placeholder="Subject" 
  />
  
  <textarea 
    className={s.Textarea} 
    type="text" 
    placeholder="Message text" 
  />

  </form>


  <div className={s.Meta}>
  <div className={s.Left}>

    <Link className={s.Button} to="/contact">
    <FaPaperclip className={s.Glyph} />
    <p className={s.Title}>
      Attach file
    </p>
    </Link>

  </div>
  <div className={s.Right}>

    <Link className={s.Button} to="/contact">
    <FaMailForward className={s.Glyph} />
    <p className={s.Title}>
      Send message
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
