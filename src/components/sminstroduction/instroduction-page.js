/**
 * create by muan at 2016-12-10
 */
import React from 'react';
import HomePageHeader from '../homepageheader/home-page-header.js';
import InstroductionBanner from './Instroduction-banner.js';
import PageBackTop from '../homepage/back-top.js';
import ProductFooterCopyright from '../productpage/product-copyright.js';

class InstroductionSMPage extends React.Component{

	render(){
		return <div>
			<HomePageHeader /> 
			<InstroductionBanner />
			<InstroductionTitle instroTitle="公司简介:"/>
			<CompanyProfileComponent />
			<InstroductionTitle instroTitle="企业文化:"/>
			<EnterpriseCultureComponent />
			<InstroductionTitle instroTitle="发展历程:"/>
			<DevelopmentPathComponent />
			<InstroductionTitle instroTitle="资质荣誉:"/>
			<PageBackTop />
			<ProductFooterCopyright />
		</div>;
	}
}

/**
 * title
 */
class InstroductionTitle extends React.Component{
	
	render(){

		return (<div className="instro-title"> 
			{this.props.instroTitle}
		</div>);
	}
}

/**
 * 公司简介
 */
var CompanyProfileComponent = React.createClass({

	getInitialState(){
		return {status:true};
	},

	render(){
		return (<div className="company-profile">
			<p>杭州圣迈电气有限公司位于"天堂硅谷"—杭州市，是专业从事电力系统自动化产品的研发、生产、销售和服务于一体的高新技术企业。</p>
			<p>圣迈电气拥有一批长期致力于电力系统、电子信息技术等领域研发和应用的高级技术人才，公司引进国内外先进的管理理念和科学的管理模式，构建了一支精干、高效的企业管理团队，公司产品全部采用国外先进的传感、控制电路及加工工艺和专业规范的检测手段，确保了产品的先进性、稳定性和可靠性。</p>
			<p>圣迈电气主要产品有：电气接点在线测温装置、开关柜智能操控装置、开关状态指示仪、温湿度控制器、红外测温窗口、高压带电显示器、智能电力仪表、电动机保护器、无功补偿控制器、智能除湿装置等产品，以其微型化、智能化、集成化的优势和高灵敏度、高抗干扰性的特点被广泛应用于：电力、煤炭、市政、水利、石油、化工、钢铁、水泥、交通等领域，以其技术先进、质量可靠、价格合理、服务优良深受广大用户的一致好评...<a onClick={this.showComponentDetail.bind(this)}>[了解详情]</a></p>
			<p>"以圣哲之源，迈科技之巅",圣迈电气秉承"以人为本、奉献社会"的理念，"努力超越、追求完美"的精神，为建设世界一流电网、建设国际一流企业而奋斗。</p>
		</div>);
	},

	showComponentDetail(){
		debugger;
		if(this.state.status){
			$('.company-profile').css('height','200px');
		}else{
			$('.company-profile').css('height','155px');
		}
		this.setState({status:!this.state.status});
	}
});

/**
 * 企业文化
 */
class EnterpriseCultureComponent extends React.Component{

	render(){
		return (<div className="enterprise-culture">
			<div className="first-font">以人为本</div>
			<div className="second-font">奉献社会</div>
			<div className=""></div>
			<div className=""></div>
		</div>);
	}
}

/**
 * 发展历程
 */
class DevelopmentPathComponent extends React.Component{

	render(){
		return (<div className="develop-path">
			<span className="circle"></span>
			<span className="circle"></span>
			<span className="circle"></span>
			<span className="circle"></span>
		</div>);
	}
}

export default InstroductionSMPage;