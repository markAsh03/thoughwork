/** 
 * create by muan at 2016-11-26
 * 关于圣迈
 */

import {Collapse} from 'antd';
import {Carousel} from 'antd';
import {Icon} from 'antd';
import {Timeline } from 'antd';

const Panel = Collapse.Panel;
const text = "A dog is a type of domesticated animal. Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.";

class SMInstructionDetails extends React.Component{

	render(){
		/*时间轴*/
		let smtimerLine = <Timeline pending={<a href="#">See more</a>}>
		    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
		    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
		    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
		    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
		    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
		    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
		</Timeline>;
		/*信息描述*/
		let instructionDesc = <div>
			{"  杭州圣迈电气有限公司位于—、建设国际一流企业而奋斗。圣迈电气拥有一批长期致力于电力系统、电子信息技术等领域研发和应用的高级技术人才，公司引进国内外先进的管理理念和科学的管理模式，构建了一支精干、高效的企业管理团队，公司产品全部采用国外先进的传感"}
			<span onClick={this.showAbooutSMInfomation} 
				  style={{'font-style':'italic','color':'#2db7f5','cursor':'pointer'}}>了解详情</span>
		</div>;

		return (<div className="collapse-instruction">
				<Collapse defaultActiveKey="1">
					<Panel header={"关于圣迈"} key="1">
						<div className="instruction-right">{smtimerLine}</div>
						<div className="instruction-left">{instructionDesc}</div>							
					</Panel>
				</Collapse>
			</div>);
	}
	showAbooutSMInfomation(){
		let url="http://localhost:8001/product.html";
		window.open(url);
	}	
}

export default SMInstructionDetails;