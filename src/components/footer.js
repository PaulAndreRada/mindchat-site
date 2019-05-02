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

const ClickHere = styled.div`
  display: flex;
  margin: 0px auto;
  font-family: futura-pt, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 22px;
  color: #fff;
  text-align: center;
`

const Arrow = styled.img`
  margin: 10px auto;
`

const Download = styled.a`
  display: flex;
  justify-content: center;
`

const MadeForFunTag = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top:150px;
  margin-right: 20px;

  .tag{
    font-family: futura-pt, sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 22px;
    color: #ED4DA2;
    text-align: center;
  }

  .name{
    text-decoration: none;
    font-family: futura-pt-bold,sans-serif;
    font-weight: 700;
    font-style: normal;
    color: #ED4DA2;
  }
`

const Sig = styled.img`
  position: absolute;
  right: 15px;
  height: 300px;
`

class Footer extends Component {
  render(){
    return(
      <Container>
        <ClickHere>Click here to make life easier.</ClickHere>
        <Arrow src={arrow} />
        <Download href="https://itunes.apple.com/us/app/mindchat-messenger/id1161592824?ls=1&mt=8">
          <img src={download_button} />
        </Download>
        <MadeForFunTag>
          <div className="tag">Made for fun by <a
              href="http://www.paulrada.com/"
              className="name">
                Paul Rada
            </a>
          </div>
        </MadeForFunTag>
        <Sig src={signature} />
      </Container>
    );
  }
}

export default Footer;
