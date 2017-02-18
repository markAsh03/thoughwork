/**
 * create by muan at 2016-11-21
 * 中间区域的走马灯
 */
import React from 'react';
import ReactDOM from 'react-dom'
import {Carousel} from 'react-bootstrap/lib/Carousel';
import {Item} from 'react-bootstrap/lib/CarouselItem';
import {Caption} from 'react-bootstrap/lib/CarouselCaption';


const ControlledCarousel = React.createClass({
 
 getInitialState() { 
    return {
      index: 0,
      direction: null 
    };
  },

  handleSelect(selectedIndex, e) {
    alert('selected=' + selectedIndex + ', direction=' + e.direction);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  },
  render() {
    return (<div>sfd</div>);
  }
});


export default ControlledCarousel;
