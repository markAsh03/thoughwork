/**
 * create by muan at 2016-12-03
 */
import React from 'react';
import {Icon} from 'antd';

const proDesc="SMCS-8001系列智能除湿装置是针对普通加热型除湿器，除湿效果差等缺点而开发的电柜（箱）除湿换代产品，采用高热电转换效率的热电半导体，体积小巧、除湿效率高，可有效防止因设备绝缘表面产生凝露和附着污秽而导致的设备绝缘水平下降，避免因柜（箱）凝露引起的爬电、闪络、短路等事故的发生";

class ProductIntroduction extends React.Component{

	render(){

		let productDesc = (<div className="desc-container">
				<div className="desc-video">
					<embed src='http://player.youku.com/player.php/sid/XMTQ5NTU1OTE4OA==/v.swf' 
			    	 allowFullScreen='true' quality='high' width='480' height='400' align='middle' 
			    	 allowScriptAccess='always' type='application/x-shockwave-flash'></embed>
			    </div>
				<div className="desc-info">{this.props.productDesc} </div>
			</div>);

		return (<div className ="product-intro">
				<div className ="product-name"><Icon type="bulb" className="icon"/><span>{this.props.productName}</span></div>
				<div className ="product-desc">{productDesc}</div>
			</div>);
	}
}

export default ProductIntroduction;