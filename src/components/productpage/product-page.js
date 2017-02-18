/**
 * create by muan at 2016-11-27
 */
import React from 'react';
import HomePageHeader from '../homepageheader/home-page-header.js';
import ProductFilter from '../productpage/product-filter.js';
import ProductIntroduction from'../productpage/product-intro.js'; 
import AboutProductLink from '../productpage/about-product-link.js';
import ProductFooterCopyright from '../productpage/product-copyright.js';

class ProductPage extends React.Component{

	constructor(){
		super();

		this.state = {
			productionInfo:""
		};
	}

	render(){
		console.log(this.state.productionInfo);
		let currentProductInfo = this.state.productionInfo;

		return <div>
			<HomePageHeader />
			<ProductIntroduction productName={currentProductInfo.name}
								 productDesc={currentProductInfo.simpleDesc}/>
			<ProductFilter /> 
			<AboutProductLink /> 
			<ProductFooterCopyright /> 
		</div>;
	}

	componentDidMount(){
		let productID = this.getParamsByUrl("productID");
		console.log(productID);
		let dataRoot = "./demo.json";
		let that = this;
		$.getJSON(dataRoot,function (data) {
			// initData = data;
			//console.log(data.productList);
			debugger;
			if(data && data.productList && data.productList.length > 0){
				let productList = data.productList;
				productList.map((product)=>{
					if(productID == product.productID){
						that.setState({
							productionInfo:product
						});
						return false;
					}
				});
			}
		});
	}

	//解析URL 获取productId
	getParamsByUrl(name){
		let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
		let value = window.location.search.substr(1).match(reg);
		if(value){
			return unescape(value[2]);
		}
		return null;
	}
}

export default ProductPage;