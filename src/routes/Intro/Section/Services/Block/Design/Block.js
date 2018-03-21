import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';


import Link from '../../../../../../components/Link';


class Block extends React.Component {


render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <h4 className={s.Title}>
    Design
  </h4>


  <h6 className={s.Description}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
    tincidunt, purus nec scelerisque lacinia. Lorem ipsum dolor sit amet, 
    consectetur.
  </h6>


  <hr className={s.Divider} />


  <div className={s.List}>

  <Link className={s.Item} 
    to="/"
  >
    <span className={s.Title}> 
      #painting
    </span>
  </Link>

  <Link className={s.Item} 
    to="/"
  >
    <span className={s.Title}> 
      #drawing
    </span>
  </Link>

  <Link className={s.Item} 
    to="/"
  >
    <span className={s.Title}> 
      #sketching
    </span>
  </Link>

  <Link className={s.Item} 
    to="/"
  >
    <span className={s.Title}> 
      #photo
    </span>
  </Link>

  <Link className={s.Item} 
    to="/"
  >
    <span className={s.Title}> 
      #cinema
    </span>
  </Link>

  <Link className={s.Item} 
    to="/"
  >
    <span className={s.Title}> 
      #interactive
    </span>
  </Link>

  <Link className={s.Item} 
    to="/"
  >
    <span className={s.Title}> 
      #graphic
    </span>
  </Link>

  <Link className={s.Item} 
    to="/"
  >
    <span className={s.Title}> 
      #modeling
    </span>
  </Link>

  <Link className={s.Item} 
    to="/"
  >
    <span className={s.Title}> 
      #illustration
    </span>
  </Link>

  <Link className={s.Item} 
    to="/"
  >
    <span className={s.Title}> 
      #typography
    </span>
  </Link>

  <Link className={s.Item} 
    to="/"
  >
    <span className={s.Title}> 
      #interfaces
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
