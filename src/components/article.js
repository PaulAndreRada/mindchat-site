import React, {Component} from 'react';
import styled from 'styled-components';

//const boxShadow = "-webkit-box-shadow: 0px 73px 126px -26px rgba(0,0,0,0.27); -moz-box-shadow: 0px 73px 126px -26px rgba(0,0,0,0.27); box-shadow: 0px 73px 126px -26px rgba(0,0,0,0.27);"


const ArticleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction }
  max-width: 800px;
  margin: 50px auto 0;
  background: ${(props) => props.containerColor }
  border-radius: 6px;

  img{
    display: flex;
    margin:0 auto;
    width: 300px;
    height: auto;
  }

  .articleText {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin:0 auto;
    justify-content: center;
    align-content: center;
    padding: 10px 10px 0;

    .articleTitle {
      font-family: futura-pt-bold,sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 22px;
      color: #727272;
      margin-bottom: 11px;
    }

    .articleDesc {
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
          <div className="articleText">
            <div className="articleTitle">{this.props.title}</div>
            <div className="articleDesc">{this.props.children}</div>
          </div>
      )
    }
  }
  render(){
    return(
      <ArticleContainer direction={this.props.direction} containerColor={this.props.containerColor} >
          {this.props.image?<img src={this.props.image} alt="" />:""}
          {this.displayText()}
      </ArticleContainer>
    );
  }
}

export default Article;
