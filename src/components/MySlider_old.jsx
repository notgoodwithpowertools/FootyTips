import React from 'react';
//import connect from 'react-redux';
var {connect} = require('react-redux');

import Slider from 'react-slick';

//Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
//require('style!css!slick-carousel/slick/slick-theme.css');
//import 'style!css!slick-carousel/slick/slick.css';

export class MySlider extends React.Component {

  constructor (props) {
    super(props);

    this.settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }


  }

  // Convert to React.Component
  //render: function(){
  render () {

    var {round_num} = this.props;

    //round_num = 2;
    //console.log("showCompleted:", showCompleted);
    /* <Slider {...this.settings}>
     <div><h3>1</h3></div>
     <div><h3>2</h3></div>
     <div><h3>3</h3></div>
     <div><h3>4</h3></div>
     <div><h3>5</h3></div>
     <div><h3>6</h3></div>
   </Slider> */
    return (
      <div>
        <h1>Round Number: {round_num}</h1>
          <Slider {...this.settings}>
           <div><h3>1</h3></div>
           <div><h3>2</h3></div>
           <div><h3>3</h3></div>
           <div><h3>4</h3></div>
           <div><h3>5</h3></div>
           <div><h3>6</h3></div>
         </Slider>
      </div>

    )
  }
};

//module.exports = TodoList;
//module.exports = connect(
export default connect(
  (state) => {
    return {
      round_num: state.round_num
    };
    //return state;
  }

)(MySlider);
