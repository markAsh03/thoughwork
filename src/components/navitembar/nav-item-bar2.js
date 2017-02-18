/**
 * create by muan at 2016-11-20
 * 导航栏
 */
import React from 'react';

class NavItemBar extends React.Component{

	render(){ 

		return <div className="nav-item-bar">
			<ul className="nav-item">
				<li><span href="#">{"联系圣迈"}</span></li>
				<li><span href="#">{"人力资源"}</span></li>
				<li><span href="#">{"服务支持"}</span></li>
				<li><span href="#">{"新闻动态"}</span></li>
				<li><span href="#">{"产品中心"}</span></li>
				<li><span href="#">{"首页"}</span></li>
				
			</ul>
		</div>;
	}
}

export default NavItemBar;