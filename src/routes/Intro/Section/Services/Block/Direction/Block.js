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
    Direction
  </h4>


  <h6 className={s.Description}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
    tincidunt, purus nec scelerisque lacinia. Lorem ipsum dolor sit amet, 
    consectetur.
  </h6>


  <hr className={s.Divider} />


  <div className={s.List}>


    <Link className={s.Item} to="">
    <span className={s.Title}> 
      #scouting
    </span>
    </Link>

    <Link className={s.Item} to="">
    <span className={s.Title}> 
      #management
    </span>
    </Link>

    <Link className={s.Item} to="">
    <span className={s.Title}> 
      #strategy
    </span>
    </Link>

    <Link className={s.Item} to="">
    <span className={s.Title}> 
      #planning
    </span>
    </Link>

    <Link className={s.Item} to="">
    <span className={s.Title}> 
      #tasks
    </span>
    </Link>

    <Link className={s.Item} to="">
    <span className={s.Title}> 
      #processing
    </span>
    </Link>

    <Link className={s.Item} to="">
    <span className={s.Title}> 
      #control
    </span>
    </Link>

    <Link className={s.Item} to="">
    <span className={s.Title}> 
      #conflict
    </span>
    </Link>

    <Link className={s.Item} to="">
    <span className={s.Title}> 
      #quality
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
