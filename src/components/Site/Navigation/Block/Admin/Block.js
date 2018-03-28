import React from 'react';
import { FaBolt } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';

import Link from '../../../../Link';


class Block extends React.Component {

render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <Link 
    className={cx(s.Button, s.Highlight)}
    to="/admin" 
  >


    <FaBolt className={s.Glyph} />


  </Link>


</div>
</div>


); } }


export default withStyles(s)(Block);
