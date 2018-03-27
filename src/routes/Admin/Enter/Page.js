import React from 'react';


import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Page.css';


import Description from './Section/Description/Section'
import Forms from './Section/Forms/Section'


class Page extends React.Component {


render() {
return (


<div className={s.Page}>


  <Description />
  <Forms/>


</div>


);
}


}


export default withStyles(s)(Page);
