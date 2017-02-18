import React from 'react';

import { Tabs,Icon,Popover,Input,Button }  from 'antd';
const TabPane = Tabs.TabPane;

class App extends React.Component {
    render() {
        return (
            <div>
               <CruiseComponent />
            </div>
        );
    }
}

class CruiseComponent extends React.Component{

    render(){
        return (<div>
            <div className="title">
                <span className="title-link">Signed in <span className="ud-line">Member</span>&nbsp;&nbsp;<span className="ud-line">Sign out</span></span>
            </div>
            <Tabs onChange={null} type="card" className="cruise-tab" defaultActiveKey="3">
               <TabPane tab="DASHBOARD" key="1" className="cruise-tab-pane" >Content of Tab Pane 1</TabPane>
               <TabPane tab="MY CRUISE" key="2" className="cruise-tab-pane">Content of Tab Pane 2</TabPane>
               <TabPane tab="AGENTS" key="3" className="cruise-tab-pane">
               <AgentsComponent />
               </TabPane>
               <TabPane tab="HELP" key="4" className="cruise-tab-pane">Content of Tab Pane 3</TabPane>
            </Tabs>
        </div>);
    }
}

/**
 *agent组件
 */
class AgentsComponent extends React.Component {

    constructor(){
        super();

        this.state = {
            items:[
                {"itemID":"1","itemName":"bjstdmngbgr02.thoughtworks.com","itemWay":"idle","itemIp":"192.168.1.2","itemDirectory":"/var/lib/cruise-agent","allResources":[{"resourceName":"ubuntu","resourceID":1},{"resourceName":"firefox3","resourceID":2},{"resourceName":"core-duo","resourceID":3}]},
                {"itemID":"2","itemName":"bjstdmngbgr03.thoughtworks.com","itemWay":"building","itemIp":"192.168.1.3","itemDirectory":"/var/lib/cruise-agent","allResources":[{"resourceName":"ubuntu","resourceID":1},{"resourceName":"firefox3","resourceID":2},{"resourceName":"core-duo","resourceID":3}]},
                {"itemID":"3","itemName":"bjstdmngbgr04.thoughtworks.com","itemWay":"building","itemIp":"192.168.1.4","itemDirectory":"/var/lib/cruise-agent","allResources":[{"resourceName":"ubuntu","resourceID":1},{"resourceName":"firefox3","resourceID":2},{"resourceName":"core-duo","resourceID":3}]},
                {"itemID":"4","itemName":"bjstdmngbgr05.thoughtworks.com","itemWay":"idle","itemIp":"192.168.1.5","itemDirectory":"/var/lib/cruise-agent","allResources":[{"resourceName":"ubuntu","resourceID":1},{"resourceName":"firefox3","resourceID":2},{"resourceName":"core-duo","resourceID":3}]}
            ]
        };
    }

    render(){
       let allItemsShow = [];
       let allItems = this.state.items;
       if(allItems){
           allItems.map((item) => {
               allItemsShow.push(<ItemOfAgentComponent sourceData={item}
                                                       addAItemResource={this.addAItemResource.bind(this)}
                                                       deleteResource={this.deleteResource.bind(this)}/>);
           });
       }

        return (<div className="outer-ban">
           <div className="header-ban">
              <span className="title b">Agents</span>
              <MyButtonCompoent btnName="All" btnClickHandle={null}/>
              <MyButtonCompoent btnName="Physical" btnClickHandle={null}/>
              <MyButtonCompoent btnName="Virtual" btnClickHandle={null}/>
           </div>
           <div className="body-ban">
              <div className="body-left">
                  {allItemsShow}
              </div>
              <div className="body-right">
                 <div className="b">Summery</div>
                 <div className="line-style"></div>
                 <div className="summery">
                    <div>
                       <span className="summery-title">Building</span>
                       <span className="summery-count">2</span>
                    </div>
                    <div>
                       <span className="summery-title">idle</span>
                       <span className="summery-count">2</span>
                    </div>
                 </div>
                 <div className="b">History</div>
                 <div className="line-style"></div>
                 <div className="history-content">
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                    <div>bjstdmngbgr02/Acceptance_test</div>
                 </div>
              </div>
           </div>
        </div>);
    }

    /**
     * 添加一个条目
     */
    addAItemResource(itemID,sourceName){
        debugger;
      console.log("itemID="+itemID+"*******sourceName="+sourceName);
      let items = this.state.items;
      if(items){
          items.map((item) => {
            if(item.itemID == itemID){
                let allResources = item.allResources;
                if(allResources){
                    //记录resource中最大的ID
                    let maxSourceID = 1;
                    //计算当前source中最大的ID
                    allResources.map((res)=>{
                        if(res.resourceID > maxSourceID){
                            maxSourceID = res.resourceID;
                        }
                    });
                    //便利sourceName输入值，添加到source 中
                    if(sourceName){
                        let sources = sourceName.split(',');
                        for(let i=0,j=sources.length;i<j;i++){
                            maxSourceID++;
                            allResources.push({"resourceName":sources[i],"resourceID":maxSourceID});
                        }
                    }
                }
            }
          });
      }

      this.setState(this.state);
    }

    deleteResource(itemID,resourceID){
        debugger;
        console.log("itemID="+itemID+"*******resourceID="+resourceID);
        let items = this.state.items;
        if(items){
            items.map((item) => {
                if(item.itemID == itemID){
                    let allResources = item.allResources;
                    let newResource = [];
                    if(allResources){
                        allResources.map((res)=>{
                            if(res.resourceID != resourceID){
                                newResource.push(res);
                            }
                        });
                        item.allResources = newResource;
                    }
                }
            });
        }

        this.setState(this.state);
    }

}


/**
 * agent 的条目
 * < ItemOfAgentComponent sourceData={} />
 */
class ItemOfAgentComponent extends  React.Component{

    //初始化
    constructor(){
        super();
        this.state = {
            currentData:null
        };
    }

    render(){

        let currentData = this.props.sourceData;

        let itemName = currentData.itemName;
        let itemWay = currentData.itemWay;
        let itemIp = currentData.itemIp;
        let itemDirectory = currentData.itemDirectory;
        let allResources = currentData.allResources;
        let itemID = currentData.itemID;

        let resource = [];
        if(allResources){
            allResources.map((res) =>{
                resource.push(<ResourceComponent resourceName={res.resourceName}
                                                 resourceID={res.resourceID}
                                                 deleteResourceHandle={this.deleteResource.bind(this)}/>);
            });
        }

        //是否显示deny
        let showDeny = null;
        let itemDivClassName = "item-div ";
        if("idle" == itemWay){
            showDeny = <DenyIconComponent />;
            itemDivClassName +=" item-blue";
        }else{
            itemDivClassName +=" item-yellow";
        }

        return (<div className={itemDivClassName}>
           <div className="item-icon"></div>
           <div className="item-desc">
              <div className="agent-item-message">
                 <span className="name b">{itemName}</span><span className="split-line"> | </span>
                 <span className="way b">{itemWay}</span><span className="split-line"> | </span>
                 <span className="ip b">{itemIp}</span><span className="split-line"> | </span>
                 <span className="directory b">{itemDirectory}</span>
              </div>
              <div className="agent-item-ctr">
                 <AddResourceComponent addResourceHandle={this.addResource.bind(this)}
                                       itemID={itemID}/><span className="split-line"> | </span>
                 <span className="resource">
                        <span>Resources:</span>
                     {resource}
                 </span>
                  {showDeny}
              </div>
           </div>
        </div>)
    }

    /**
     * 添加一个资源
     */
    addResource(sourceName){
        let itemID = this.props.sourceData.itemID;
        console.log("----"+sourceName+"---itemID="+itemID);
        this.props.addAItemResource(itemID,sourceName);
    }

    /**
     * 删除一个资源
     * @param event
     */
    deleteResource(resourceID){
        let itemID = this.props.sourceData.itemID;
        console.log("----"+resourceID+"---itemID="+itemID);
        this.props.deleteResource(itemID,resourceID);
    }
}

/**
 * 添加一个资源的组件
 * < AddResourceComponent  addResourceHandle={} />
 */
class AddResourceComponent extends  React.Component{

    constructor(){
        super();
        this.state={
            sourceName:""
        };

    }

    render(){
        let inputID = "resource-name-"+this.props.itemID;
        let popContent = (
            <div className="pop-outer">
                <div className="pop-title">{"(separate multiple resources name with commons)"}</div>
                <div className="pop-name-input"><Input id={inputID} /></div>
                <div className="pop-footer">
                    <Button className="source-btn" onClick={this.addResourceHandle.bind(this)}>{"Add resource"}</Button>
                    <Button className="source-btn" onClick={this.closeAddResourcePop.bind(this)}>{"Close"}</Button>
                </div>
            </div>
        );
        return (<span className="add-resource">
            <span id="hide-pop" style={{"display":"none"}}></span>
            <Popover content={popContent} placement="bottomLeft" trigger="click">
                <span><span>+ </span><span className="add">Specify Resources</span> </span>
            </Popover>
        </span>);
    }

    closeAddResourcePop(event){
        let itemID = this.props.itemID;
        $("#resource-name-itemID").val('');
        $('.ant-popover-open').click();
    }

    addResourceHandle(event){
        let itemID = this.props.itemID;
        let sourceName = $("#resource-name-"+itemID).val();
        if(!sourceName){
            // alert("Please input source name.");
            return;
        }else{
            this.props.addResourceHandle(sourceName);
            let itemID = this.props.itemID;
            $("#resource-name-"+itemID).val('');
            this.closeAddResourcePop();
        }
    }
}

/**
 * 一个资源的组件
 * < ResourceComponent  deleteResourceHandle={} resourceName={}/>
 */
class ResourceComponent extends React.Component {

    render(){

        return (<span className="a-resource">
           <span className="resource-name">{this.props.resourceName}</span>
           <span className="resource-delete" onClick={this.deleteResourceHandle.bind(this)}>
              <Icon type="close-circle-o" />
           </span>
        </span>);
    }

    deleteResourceHandle(event){
        console.log("delete resource ----"+this.props.resourceID);
        this.props.deleteResourceHandle(this.props.resourceID);
    }
}

/**
 *  自定义的按钮组件
 *  <MyButtonCompoent btnName={} btnClickHandle={} />
 */
class MyButtonCompoent extends React.Component{

    render(){
        let btnName = this.props.btnName;
        let btnClassName = "my-button "+ this.props.btnClassName;

        return (<span className="button-crt">
            <span className={btnClassName} onClick={this.props.btnClickHandle}>{btnName}</span>
        </span>);
    }
}

/**
 * deny标志的组件
 */
class DenyIconComponent extends  React.Component{
   render(){
       return (<span className="deny">
           <Icon type="minus-circle-o" />
         <span className="title">Deny</span>
       </span>);
   }
}

export default App;

