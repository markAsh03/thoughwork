/**
 * create by muan at 2016-11-22
 * 产品详情列表
 */
import React from 'react';
import {Collapse} from 'react-bootstrap/lib/Collapse';
import {Well} from 'react-bootstrap/lib/Well';

var ProductDetails = React.createClass({

	getInitialState(...args){
		// super(...args);
		// this.state = {};
		return {
			open:true
		};
	},

	render(){
		return (<div><Collapse in={true}>
          <div>
            <Well>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </Well>
          </div>
        </Collapse></div>);
	}
});

export default ProductDetails;