import React from "react";
import './Crds.scss'
//Temporarily store data here
const PostsData = [
    {
      "category": "Nos Services",
      "title": "CNN Acquire BEME",
      "text1": "CNN purchased Casey Neistat's Beme app for $25million ",
      "text2":"rsshjhs hdgdqsd jqsdkhjksqd jkhqsdj sdqjjkhsdq jhskjqsd ",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
      "category": "About us",
      "title": "Nomad Lifestyle",
      "text1": "Learn our tips and tricks on living a nomadic lifestyle",
      "text2":"",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      "category": "Development",
      "title": "React and the WP-API",
      "text1": "The first ever decoupled starter theme for React & the WP-API",
      "text2":"",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    {
      "category": "News",
      "title": "CNN Acquire BEME",
      "text1": "CNN purchased Casey Neistat's Beme app for $25million.",
      "text2":"",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    }
   
  ]
  
  
  // Start App
  
  class Main extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: PostsData
      });
    }
   
  
    render() {
      return <div>
        <header className="app-header"></header>
        <Title />
        <div className="app-card-list" id="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
          }
      </div>
      </div>
    }
  }
  
  
  class Title extends React.Component {
    render() {
      return <section className="app-title">
        <div className="app-title-content">
          <h1>Welcome to HNR</h1>
          
          
        </div>
      </section>
    }
  }
  
  
  
  
  class CardHeader extends React.Component {
    render() {
      const { image, category } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">
          <h4 className="card-header--title">{category}</h4>
        </header>
      )
    }
  }
  
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          
          
          <h2>{this.props.title}</h2>
          
          <p className="body-content">{this.props.text1}</p>
          <p className="body-content">{this.props.text2}</p>
          
          
        </div>
      )
    }
  }
  
  
  class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader category={this.props.details.category} image={this.props.details.image}/>
          <CardBody title={this.props.details.title} text1={this.props.details.text1} text2={this.props.details.text2}/>
        </article>
      )
    }
  }
  export default Main