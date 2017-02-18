/**
 * create by mua at 2016-11-21
 * 中心处的走马灯
 */

import React from 'react'; 
import {Carousel} from 'antd';

const CenterBannerCarousel = React.createClass({

	render:function(){
		return (<div>
		<Carousel autoplay className="carousel-control">
			<div><img className="carousel-img" alt="1" src="../src/images/banner1.jpg" /></div>
    		<div><img className="carousel-img" alt="1" src="../src/images/banner2.jpg"/></div>
		    <div><img className="carousel-img" alt="1" src="../src/images/banner3.jpg"/></div>
		    <div><img className="carousel-img" alt="1" src="../src/images/banner1.jpg" /></div>
    		<div><img className="carousel-img" alt="1" src="../src/images/banner2.jpg"/></div>
		    <div><img className="carousel-img" alt="1" src="../src/images/banner3.jpg"/></div>
		</Carousel >
		<span className="banner-ctr-left">{"《"}</span>
		<span className="banner-ctr-right">{"》"}</span>
	</div>);	
	}
});

export default CenterBannerCarousel;  
