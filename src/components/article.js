import React, {Component} from 'react';
import styled from 'styled-components';

const boxShadow = "-webkit-box-shadow: 0px 73px 126px -26px rgba(0,0,0,0.27); -moz-box-shadow: 0px 73px 126px -26px rgba(0,0,0,0.27); box-shadow: 0px 73px 126px -26px rgba(0,0,0,0.27);"


const ArticleContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 150px 100px 0;

  flex-grow: 1;
  background: ${(props) => props.containerColor };
  ${(props) => props.containerColor? boxShadow: ""}
  border-radius: 6px;

  .article {
    display: flex;
    flex-direction: ${(props) => props.direction};

    flex-wrap: wrap;
    justify-content: space-around;

  }

  .articleImage {
    display: flex;
    flex-grow:1;
    max-width: 200px;
    img {
      max-width: 400px;
    }
  }

  .articleTextContainer {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 100px;
    flex-grow: 1;
  }

  .articleText {
    display: flex;
    flex-direction: column;

    .articleTitle {
      display: flex;
      flex-grow: 1;
      font-family: futura-pt-bold,sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 22px;
      color: #434343;
      margin-bottom: 11px;
    }

    .articleDesc {
      display: flex;
      flex-grow: 1;
      font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
      font-weight: 300;
      color: #434343;
    }
  }
`

class Article extends Component {

  displayText(){
    if(this.props.title){
      return(
        <div className="articleTextContainer">
          <div className="articleText">
            <div className="articleTitle">{this.props.title}</div>
            <div className="articleDesc">{this.props.desc}</div>
          </div>
        </div>
      )
    }
  }
  render(){
    return(
      <ArticleContainer direction={this.props.direction} containerColor={this.props.containerColor} >
        <div className="article">
          <div className="articleImage">
            <img src={this.props.image}/>
          </div>
          {this.displayText()}
        </div>
      </ArticleContainer>
    );
  }
}

export default Article;
