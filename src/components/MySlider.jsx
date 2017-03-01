var React = require('react');
var Slider = require('react-slick');
//require('slick-carousel/slick/slick-theme.css');
//import 'slick-carousel/slick/slick.css';

var {connect} = require('react-redux');
require('style!css!slick-carousel/slick/slick.css');
//require('style!css!slick-carousel/slick/slick-theme.css');

var MySlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    );
  }
});
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
