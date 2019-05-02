import React, {Component} from 'react';
import styled from 'styled-components';

import notification from '../images/notification.svg';
const boxShadow = "-webkit-box-shadow: 0px 73px 126px -26px rgba(0,0,0,0.27); -moz-box-shadow: 0px 73px 126px -26px rgba(0,0,0,0.27); box-shadow: 0px 73px 126px -26px rgba(0,0,0,0.27);"

const Container = styled.div`
  display: flex;
  max-width: 800px;
  justify-content: center;
  margin: 140px auto 0;

  .rect {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 0 20px;
    border-radius: 6px;
    background: #FB99CD;
  }
`

class ArticleImage extends Component {
  render(){
    return(
      <Container>
        <div class="rect">
          <img src={notification} />
        </div>
      </Container>
    )
  }
}

export default ArticleImage;
