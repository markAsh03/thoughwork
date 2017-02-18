/**
 * create by muan at 2016-11-20
 * 菜单
 */

import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const NavItemBar = React.createClass({
  getInitialState() {
    return {
      current: 'home',
    };
  },
  handleClick(e) {
    this.setState({
      current: e.key,
    });
  },
  render() {

  	//产品列表
  	let productList = this.props.productList;
  	//关于
  	let aboutCompany=this.props.aboutCompany;
  	//产品名称列表
  	let productNames = [],companyInfo=[];
  	if(productList){
        productList.map((product) => {
			productNames.push(<Menu.Item key={product.index}><span onClick={this.showProductDetails.bind(this,product)}>{product.name}</span></Menu.Item>);
		});
	}

	if(aboutCompany){
        aboutCompany.map((info) => {
            companyInfo.push(<Menu.Item key={info.index}>{info.name}</Menu.Item>);
		});
	}


    return (<div className="nav-item-bar">
	      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]}
	        mode="horizontal">
	        <Menu.Item key="home">
	          <Icon type="home" />{"首页"}
	        </Menu.Item>
	        <SubMenu title={<span onClick={this.openNewTabDetailSM.bind(this)}><Icon type="appstore-o" />{"关于圣迈"}</span>}>
				{companyInfo}
	        </SubMenu>
	        <Menu.Item key="product" disabled>
	          <Icon type="like" />{"新闻动态"}
	        </Menu.Item>
	        <SubMenu title={<span><Icon type="desktop" />{"产品中心"}</span>}>
				{productNames}
	        </SubMenu>
	        <Menu.Item key="service" >
	          <Icon type="customer-service" />{"服务支持"}
	        </Menu.Item>
	        <Menu.Item key="persons" >
	          <Icon type="message" />{"人力资源"}
	        </Menu.Item>
	        <Menu.Item key="online" >
	          <Icon type="phone" />{"联系圣迈"}
	        </Menu.Item>
	      </Menu>
	    </div>
    );
  },
  openNewTabDetailSM:function () {
	  let url="http://localhost:8001/instroduction.html";
	  window.open(url);
  },
	//展示产品详情
    showProductDetails:function (product) {
  		console.log(product);
        let url="http://localhost:8001/product.html?&productID="+product.productID;
        window.open(url);
    }

});

export default NavItemBar;