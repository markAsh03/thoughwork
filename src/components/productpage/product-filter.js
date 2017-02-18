/**
 * create by muan at 2016-11-27
 */
import React from 'react';
import {Tabs} from 'antd';
import {Icon} from 'antd';

import {Button} from 'react-bootstrap/lib/Button';

const TabPane = Tabs.TabPane;

class ProductFilter extends React.Component{

	render(){

		//产品特性
		let productCharacter = (<div className="character">
				<div className="charac-ul">
					<div className="li"><Icon type="pushpin-o" className="icon"/>{"采用无线射频通讯技术，实现高雅被测端与显示仪器的隔离传输，无线信号传输能突破开关柜内金属的屏障。"}</div>
					<div className="li"><Icon type="pushpin-o" className="icon"/>{"一机能检测多达12个柜内温升点（也可根据客户需求量身订做），实现超温报警，自动排风，低温或湿加热功能。"}</div>
					<div className="li"><Icon type="pushpin-o" className="icon"/>{"军工级元器件能在高温环境下工作，适合在高温负载荷环境状态下稳定运行。"}</div>
					<div className="li"><Icon type="pushpin-o" className="icon"/>{"传感器及无线收发组建有多种灵巧，可靠的安装套件，适合各种原触头，扁触头；母排的安装工艺,特别是手车式断路器，隔离刀等，只需拉手车就可以完成安装，对于老设备改造也十分简单方便，不会降低开关柜原有的绝缘性能。"}</div>
					<div className="li"><Icon type="pushpin-o" className="icon"/>{"数据采集器在现场实行数据处理和通讯处理和通讯管理，连接上位机或RS485接口，可记录长期的运行历史和数据，可上以太网传输至监控中心，无需人工现场超标记录。"}</div>
					<div className="li"><Icon type="pushpin-o" className="icon"/>{"无线信号采访的频段，微功能发射符合国家无线电管理规定，对其他设备不产生干扰。"}</div>
					<div className="li"><Icon type="pushpin-o" className="icon"/>{"电磁兼容IEMC特性好，抗干扰实行能力强，适合于830-820000A的各种型号的断路器，隔离开关，闸刀等高压设备的安装应用。"}</div>
				</div>
			</div>); 
		//技术参数
		let techinalParameter = (<div className="parameter">
			<div className="param-desc">
				<p>◆测温通道：12个（支持1到12个温度采集点）</p>	
				<p>◆仪表工作环境温度：-10℃~+65℃</p>
				<p>◆仪表工作环境湿度：95%RH</p>
				<p>◆报警输出口：继电器无源接点输出(1路常开+1路常闭)</p>
				<p>◆通讯接口：RS-485(隔离)</p>
				<p>◆采集模块与接收模块距离: ≤5米</p>
				<p>◆采集模块与中央处理模块间距离: ≤1200米</p>
				<p>◆温度测量范围:-20℃~+150℃</p>
				<p>◆精度:±2%◆无线温度传感器电池使用寿命:3~7年(每2分钟测试发送一次数据)</p>
				<p>◆分辨率:±1℃</p>
				<p>◆传感器耐受温度：200℃</p>
			</div>
			<div className="param-system">
				<img alt="系统组成图" src="../../src/images/product-1-1.png"/>
			</div>
			
		</div>);
		//系统详情
		let systemDetails = (<div>3</div>);
		//客户反馈
		let customerComment =(<div>4</div>);
	
		return <div className="product-filter">
			
			<Tabs defaultActivitykey = "2">
				<TabPane tab={<span><Icon type="apple"/>{"产品特性"}</span>} key="1">
					{productCharacter}
				</TabPane>
				<TabPane tab={<span><Icon type="android"/>{"技术参数"}</span>} key="2">
					{techinalParameter}
				</TabPane>
				<TabPane tab={<span><Icon type="apple"/>{"系统详情"}</span>} key="3">
					{systemDetails}
				</TabPane>
				<TabPane tab={<span><Icon type="android"/>{"客户反馈"}</span>} key="4">
					{customerComment}
				</TabPane>
			</Tabs>		
		</div>;
	}
}

var ButtonDemo = React.createClass({


	render:function(){

		return <Button bsStyle="danger">Danger</Button>;
	}
});

export default ProductFilter;