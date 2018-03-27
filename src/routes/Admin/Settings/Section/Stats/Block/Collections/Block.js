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
    Collections
  </h4>

  <h6 className={s.Description}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
    tincidunt, purus nec scelerisque lacinia. Lorem ipsum dolor sit amet, 
    consectetur.
  </h6>

  <hr className={s.Divider} />  


</div>


<div className={s.Row}>


  <hr className={s.Divider} />  


</div>


<div className={cx(s.Row, s.Bottom)}>


  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    Services
  </span>
  <span className={s.Counter}>
    3
  </span>
  </Link>

  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    Skills
  </span>
  <span className={s.Counter}>
    12
  </span>
  </Link>

  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    Bio
  </span>
  <span className={s.Counter}>
    3
  </span>
  </Link>


</div>


<div className={s.Row}>


<hr className={s.Divider} />  


</div>


<div className={cx(s.Row, s.Bottom)}>


  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    Highlights
  </span>
  <span className={s.Counter}>
    6
  </span>
  </Link>

  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    Posts
  </span>
  <span className={s.Counter}>
    123
  </span>
  </Link>


</div>


<div className={s.Row}>


<hr className={s.Divider} />  


</div>


<div className={cx(s.Row, s.Bottom)}>


  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    Ads
  </span>
  <span className={s.Counter}>
    6
  </span>
  </Link>

  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    Products
  </span>
  <span className={s.Counter}>
    34
  </span>
  </Link>


</div>


<div className={s.Row}>


<hr className={s.Divider} />  


</div>


<div className={cx(s.Row, s.Bottom)}>


  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    Links
  </span>
  <span className={s.Counter}>
    3
  </span>
  </Link> 

  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    Social
  </span>
  <span className={s.Counter}>
    12
  </span>
  </Link> 

  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    Forms
  </span>
  <span className={s.Counter}>
    1
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
