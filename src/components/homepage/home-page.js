/**
 * create by muan at 2016-11-20
 * component 
 */
import React from 'react';
import $ from 'jquery';
import HomePageHeader from '../homepageheader/home-page-header.js';
import NavItemBar from '../navitembar/nav-item-bar.js';
import ControlledCarousel from '../centerbanner/center-banner.js';
import ProductDetails from '../collapsedetail/product-details.js';
import NewsDetails from '../collapsedetail/news-details.js';
import SMInstructionDetails from '../collapsedetail/sm-instruction.js';
import CooperatePartnerDetail from '../collapsedetail/cooperate-partner.js';
import PageBackTop from './back-top.js';
import ProductFooterCopyright from '../productpage/product-copyright.js';

var HomePage = React.createClass({

    getInitialState(){
        this.data = {
        	name:"",
			//产品列表
			productList:[],
			//关于
            aboutCompany:[],
            //新闻动态
            newsInfo:[]
		};

        return this.data;
    },

    render(){

    	console.log(this.state.productList);

        return <div>
			<HomePageHeader />
			<NavItemBar productList={this.state.productList}
						aboutCompany={this.state.aboutCompany}/>
			<ControlledCarousel />
			<ProductDetails productList={this.state.productList}/>
			<NewsDetails newsInfo={this.state.newsInfo}/>
			<SMInstructionDetails />
			<CooperatePartnerDetail />
			<PageBackTop />
			<ProductFooterCopyright />
		</div>;
    },

	componentDidMount(){
    	debugger;
        let dataRoot = "./demo.json";
        var that = this;
        $.getJSON(dataRoot,function (data) {
            // initData = data;
			that.setState({
                productList:data.productList,
                aboutCompany:data.aboutCompany,
                newsInfo:data.newsInfo
			});
        });
	},

    /**
     * 读取文件
     */
    getInitDataFromFile(dataRoot){
        debugger;
        // let dataRoot = "./demo.json";
        let result=null;
        $.getJSON(dataRoot,function (data) {
            console.log(data);
            result = data;
        });

        return result;
    },
});



export default HomePage;