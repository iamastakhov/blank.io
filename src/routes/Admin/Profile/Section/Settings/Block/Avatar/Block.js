import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';

import { FaCheck } from 'react-icons/lib/fa';
import Link from '../../../../../../../components/Link';


class Block extends React.Component {

render() {
return (


<form className={s.Block} name="Information">
<div className={s.Container}>
<div className={s.Row}>


  <h4 className={s.Title}>
    General information
  </h4>


</div>
<div className={s.Row}>


  <hr className={s.Divider} />


</div>
<div className={cx(s.Row, s.Fields)}>


  <input 
    className={s.Input} 
    type="text" 
    placeholder="First Name" 
  />
  
  <input 
    className={s.Input} 
    type="text" 
    placeholder="Last Name" 
  />

  <textarea 
    className={s.Textarea} 
    type="text" 
    placeholder="Short description" 
  />


</div>
<div className={s.Row}>


  <hr className={s.Divider} />


</div>
<div className={cx(s.Row, s.Buttons)}>
<div className={s.Left}>


  <Link 
    className={s.Button} 
    to="/"
  >
    <FaCheck className={s.Glyph} />
    <p className={s.Title}>
      Save
    </p>
  </Link>

</div>
</div>


<div className={cx(s.Background, s.Color)} />


</div>
</form>


); } }


export default withStyles(s)(Block);
