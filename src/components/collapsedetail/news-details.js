/**
 * create by muan at 2016-11-23
 * 新闻详情页
 */
import React from 'react';
import {Collapse} from 'antd';
import {Carousel} from 'antd';
import {Icon} from 'antd';

const Panel = Collapse.Panel;
const text = "A dog is a type of domesticated animal. Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.";

class NewsDetails extends React.Component{

	constructor(){
		super();
		this.state = {
			isOpenNews:false,
			openNewsID:""
		};
	}

	render(){
		let leftContents = <div>
			<Carousel autoplay>
			    <div><img src="../src/images/news/1-1.jpg"/></div>
			    <div><img src="../src/images/news/1-2.jpg"/></div>
			    <div><img src="../src/images/news/1-3.jpg"/></div>
			    <div><img src="../src/images/news/1-4.jpg"/></div>
			</Carousel>
		</div>;

		let newsInfoTitles = [],newsContent=null;
		let newsInfo = this.props.newsInfo;
		let that = this;
		if(newsInfo){
            newsInfo.map((news) => {

            	debugger;
            	let icon = null;
            	if(that.state.openNewsID == news.newsID && that.state.isOpenNews){
                    icon = <Icon type="caret-down" />;
					newsContent = <div className="news-content">{news.newsContents} <a href="#">{"[more]"}</a></div>;
				}else{
                    icon = <Icon type="caret-right" />;
                    newsContent = null;
				}

                newsInfoTitles.push(<div className="news"><div className="news-title" onClick={this.openShowNews.bind(this,news)}>{icon} {news.newsTitle}</div>
					<span className="news-date">{news.newsDate}</span>{newsContent}</div>);
			});
		}

		return (<div className="collapse-news">
				<Collapse defaultActiveKey="1">
					<Panel header={"新闻动态"} key="1">
						<div className="news-left">{leftContents}</div>
						<div className="news-right">
							<div>
								{newsInfoTitles}
							</div>
						</div>
					</Panel>
				</Collapse>
			</div>);
	}

	/** 展开小面板展示新闻信息**/
    openShowNews(newsInfo){
		if(newsInfo.newsID == this.state.openNewsID){
			this.setState({
				isOpenNews:false,
				openNewsID:""
			});
		}else{
			this.setState({
				isOpenNews:true,
				openNewsID:newsInfo.newsID
			});
		}
		console.log(newsInfo);
	}
}

export default NewsDetails;