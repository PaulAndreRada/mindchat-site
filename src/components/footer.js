import React, {Component} from 'react'
import styled from 'styled-components'
import download_button from '../images/Download_App_Store_Image.svg';
import arrow from '../images/Arrow.svg';
import signature from '../images/signature.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column
  background: #FB99CD;
  margin-top: 200px;
  min-height: 363px;
  justify-content: center;
  padding-bottom: 100px;
`

const MadeForFunTag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 150px;
  margin-right: 20px;
  z-index: 100;

  .tag{
    font-family: futura-pt, sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 22px;
    color: #A4286A;
    text-align: center;
  }

  .name{
    text-decoration: none;
    font-family: futura-pt-bold,sans-serif;
    font-weight: 700;
    font-style: normal;
    color: #A4286A;
  }
`

const Sig = styled.img`
  position: absolute;
  width: 300px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`

class Footer extends Component {
  render(){
    return(
      <Container>
        <Sig src={signature} />
        <MadeForFunTag>
          <div className="tag">Made for fun by <a
              href="http://www.paulrada.com/"
              className="name">
                Paul Rada
            </a>
          </div>
        </MadeForFunTag>
      </Container>
    );
  }
}

export default Footer;
