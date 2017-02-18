/**
 * create by muan at 2016-12-05
 */
import React from 'react';
import {Icon} from 'antd';

class AboutProductLink extends React.Component{


	render(){
		let linkBannerList = <div className="about-other">
			<ul className="about-other">
				<li className="" id="link-1"><img src="../../src/images/otherImgs/1.png" /></li>
				<li className="" id="link-2"><img src="../../src/images/otherImgs/2.png" /></li>
				<li className="" id="link-3"><img src="../../src/images/otherImgs/3.png" /></li>
				<li className="" id="link-4"><img src="../../src/images/otherImgs/4.png" /></li>
				<li className="" id="link-5"><img src="../../src/images/otherImgs/5.png" /></li>
				<li className="" id="link-6"><img src="../../src/images/otherImgs/1.png" /></li>
				<li className="" id="link-7"><img src="../../src/images/otherImgs/2.png" /></li>
				<li className="" id="link-8"><img src="../../src/images/otherImgs/3.png" /></li>
				<li className="" id="link-9"><img src="../../src/images/otherImgs/4.png" /></li>
				<li className="" id="link-10"><img src="../../src/images/otherImgs/5.png" /></li>
			</ul>
		</div>;
		return (<div className="about-link">
			<div className="link-name"><Icon type="link" />{"相关链接"}</div>
			<div className="link-banner">{linkBannerList}</div>
		</div>);
	}

	componentDidMount(){
		var flag = 1;
		// window.setInterval(function(){
		// 	console.log('aaaaaaaaaaaaaa' + flag);
		// 	if(flag==11){
		// 		flag = 1;
		// 	}
		// 	let i = flag%11;

		// 	$('#link-'+i).css('display','none');
		// 	$('#link-'+(i+1)).css('display','list-item');

		// 	flag++;
		// },3000);	
	}
}

export default AboutProductLink;