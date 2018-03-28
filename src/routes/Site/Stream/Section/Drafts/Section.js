import React from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';


import Template from './Template/Container';


class Section extends React.Component {

  render() {
    return (


      <div className={s.Section}>


        <Template />


      </div>


    );
  }
}


export default withStyles(s)(Section);
