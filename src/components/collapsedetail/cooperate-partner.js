/**
 * create by muan at 2016-11-26
 * 合作伙伴
 */
import {Collapse} from 'antd';
import {Carousel} from 'antd';
import {Icon} from 'antd';
import {Timeline } from 'antd';

const Panel = Collapse.Panel;
const text = "A dog is a type of domesticated animal. Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.";

class CooperatePartnerDetail extends React.Component{

	render(){

		let allPartnet = [];
		for(let i=0;i<9;i++){
			allPartnet.push(<span><img src="../../src/images/alibaba.jpg"></img></span>);
			allPartnet.push(<span><img src="../../src/images/geli.jpg"></img></span>);
			allPartnet.push(<span><img src="../../src/images/haier.jpg"></img></span>);
			allPartnet.push(<span><img src="../../src/images/chinabank.jpg"></img></span>);
		}

		return (<div className="collapse-partner">
				<Collapse defaultActiveKey="1">
					<Panel header={"合作伙伴"} key="1">
						<div className="partner">{allPartnet}</div>						
					</Panel>
				</Collapse>
			</div>);
	}
}

export default CooperatePartnerDetail; 