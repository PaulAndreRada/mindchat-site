import React, {Component} from 'react';
import styled from 'styled-components';


const ArticleTextContainer = styled.div`
  width: 380px;
  margin: 60px auto 0;

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
`



class TextCon extends Component{
  render(){
    return(
        <ArticleTextContainer>
          <div className="articleText">
            <div className="articleTitle">{this.props.title}</div>
            <div className="articleDesc">{this.props.desc}</div>
          </div>
        </ArticleTextContainer>
    )
  }
}


export default TextCon;
