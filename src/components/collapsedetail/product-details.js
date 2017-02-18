/**
 * create by muan at 2016-11-22
 */

import React from 'react';
import {Collapse} from 'antd';
import {Carousel} from 'antd';

const Panel = Collapse.Panel;

class ProductDetails extends React.Component{

	constructor(){
		super();
		this.state = {
            showProductIndex:1
		};
	}

	render(){
		//产品列表
		let productList = this.props.productList;
		let productLeftList = [],everyProductDetail = "";
		let that = this;
		if(productList){
            productList.map((product) => {
                productLeftList.push(<Panel header={product.name} key={product.index} className="sim">
					<p onClick={this.getProductSimpleDesc.bind(this,product)}>概述</p>
					<p onClick={this.getProductTechParam.bind(this,product)}>技术参数</p>
					<p>系统组成</p><p>样品展示</p></Panel>);
                debugger;
                if(that.state.showProductIndex == product.index){
                	let params = [],sampleImg = [];
                	let techParams = product.techParams;
                	let sampleDisplay = product.sampleDisplay;
                	if(techParams){
                        techParams.map((param) => {
							params.push(<p><span className="circile"></span><span>{param}</span></p>)
						});
					}

					let index = product.index;
					if(sampleDisplay){
                        sampleDisplay.map((sample) => {
                        	let src = "../src/images/product/"+index+"/"+sample;
							sampleImg.push(<span className="sample-img"><img src={src}/></span>);
						});
					}

                    everyProductDetail = (<div className="product-desc">
						<div className=""><div className="label">简介:</div><div>{product.simpleDesc}</div></div>
						<div className=""><div className="label">技术参数:</div><div>{params}</div></div>
						<div className="sample">
							<div className="label">样品展示:</div>
							<Carousel autoplay dots="false">
								{sampleImg}
							</Carousel>
						</div>
						<div className=""><div className="label">系统组成:</div></div>
					</div>);
                }

			});
		}


		let productDetails = (<div className="product-list">
			<Collapse defaultActiveKey="1" accordion className="p-lists">
				{productLeftList}
			</Collapse>
		</div>);

		//详情页

		return (<div className="product-detail">
				<Collapse defaultActiveKey="1">
					<Panel header={"产品中心"} key="1">
						<div className="product">	
							<div className="product-name-list">{productDetails}</div>
							<div className="product-detail-td">{everyProductDetail}</div>
						</div>	
					</Panel>
				</Collapse>
			</div>);
	}

	componentDidMount(){
		window.setInterval(function(){
			$('.product-detail-td').css('height',$('.product-name-list').height());
		},500);
	}

	/** 获取产品的概述信息*/
    getProductSimpleDesc(product){

		this.setState({
            showProductIndex:product.index
		});
	}

	/*** 获取产品技术参数*/
    getProductTechParam(product){
        console.log(product);
	}
}

export default ProductDetails;