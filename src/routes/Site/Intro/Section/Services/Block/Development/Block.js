import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';

import Link from '../../../../../../../components/Link';


class Block extends React.Component {

render() {
return (


<div className={s.Block}>
<div className={s.Container}>


<div className={s.Row}>


  <h4 className={s.Title}>
    Development
  </h4>

  <h6 className={s.Description}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
    tincidunt, purus nec scelerisque lacinia.
  </h6>

  <hr className={s.Divider} />  


</div>


<div className={cx(s.Row, s.Bottom)}>


  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    #animation
  </span>
  <span className={s.Counter}>
    1234
  </span>
  </Link>

  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    #automotive
  </span>
  <span className={s.Counter}>
    1234
  </span>
  </Link>

  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    #branding
  </span>
  <span className={s.Counter}>
    1234
  </span>
  </Link>

  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    #cinematography
  </span>
  <span className={s.Counter}>
    1234
  </span>
  </Link>

  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    #digital
  </span>
  <span className={s.Counter}>
    1234
  </span>
  </Link>

  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    #event
  </span>
  <span className={s.Counter}>
    1234
  </span>
  </Link>

  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    #fashion
  </span>
  <span className={s.Counter}>
    1234
  </span>
  </Link>

  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    #game
  </span>
  <span className={s.Counter}>
    1234
  </span>
  </Link> 

  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    #street
  </span>
  <span className={s.Counter}>
    1234
  </span>
  </Link> 


</div>


<div className={cx(s.Background, s.Color)} />
<div className={cx(s.Background, s.Shadow)} />


</div>
</div>


);
}
}


export default withStyles(s)(Block);
