/**
 * create by muan at 2016-11-20
 * header
 */

import React from 'react';
import $ from 'jquery';
// import Constants from '../../js/constants/Constants.js';

let HEADER_IMG = require('../../images/home-page-header.png');
const Constants = require('../../js/constants/Constants.js');

class HomePageHeader extends React.Component{

	render(){

		return <div className="home-page-header">
			<img src={HEADER_IMG}></img>
			<span className="header-home-btn pos-a b" onClick = {this.returnHomePage}>{"[首页]"}</span>
			<span className="header-call-btn pos-a b" onClick = {this.getConnectInfo}>{"[联系客服]"}</span>
		</div>
	}

	/**
	 * [返回到首页]
	 * @param  {[type]} event [description]
	 * @return {[type]}       [description]
	 */
	returnHomePage(event){
		console.log(event.target);
	}
	/**
	 * [获取联系方式]
	 * @param  {[type]} event [description]
	 * @return {[type]}       [description]
	 */
	getConnectInfo(event){
		console.log(event.target);
	}

    /**
	 * 读取文件
     */
	getInitDataFromFile(){
		debugger;
		let dataRoot = "./demo.json";
		$.getJSON(dataRoot,function (data) {
			debugger;
			console.log(data);
        });
	}
}

export default HomePageHeader;