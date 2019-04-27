import React, {Component} from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  position: relative;
  display: flex;
`
const ArticleTextContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;


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
      //width: 300px;
    }
`



class TextCon extends Component{
  render(){
    return(
      <MainContainer>
        <ArticleTextContainer>
          <div className="articleText">
            <div className="articleTitle">{this.props.title}</div>
            <div className="articleDesc">{this.props.desc}</div>
          </div>
        </ArticleTextContainer>
      </MainContainer>
    )
  }
}


export default TextCon;
