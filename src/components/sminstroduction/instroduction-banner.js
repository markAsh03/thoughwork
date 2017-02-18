/**
 * create by muan at 2016-12-11
 */
import React from 'react'; 
import {Carousel} from 'antd';

class  InstroductionBanner extends React.Component{

	render(){
		return (<div>
		<Carousel autoplay className="">
			<div><img className="banner-img" alt="1" src="../src/images/banner1.jpg" /></div>
    		<div><img className="banner-img" alt="1" src="../src/images/banner2.jpg"/></div>
		    <div><img className="banner-img" alt="1" src="../src/images/banner3.jpg"/></div>
		    <div><img className="banner-img" alt="1" src="../src/images/banner1.jpg" /></div>
    		<div><img className="banner-img" alt="1" src="../src/images/banner2.jpg"/></div>
		    <div><img className="banner-img" alt="1" src="../src/images/banner3.jpg"/></div>
		</Carousel >
	</div>);	
	}
}

export default InstroductionBanner;