import React, {Component} from 'react';
import styled from 'styled-components';
import logo from '../images/mindchat_logo.svg';

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;

  .headerBlockContainer {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    flex-grow: 1;
    margin: 15px 0 0;
  }

  .blockContainer{
    position: relative;
    display: flex;
    flex-grow: 1;
    justify-content: center;
  }

  .logoContainer {
    position: relative;
    display: flex;
    margin-right: 20px;
    margin-top: 10px;
  }

  .titleContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 0px;
  }
`

const Title = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  color: #FB99CD;
  font-family: futura-pt-bold,sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 51px;
  letter-spacing: -2px;
`

const Tagline = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  margin-top: -10px;
  font-family: futura-pt, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 17px;
  color: #434343;
`


class PageHeader extends Component {
  render(){
    return(
      <Header>
        <div className="headerBlockContainer">
          <div className="blockContainer">
            <div className="logoContainer">
              <img src={logo} alt="" />
            </div>
            <div className="titleContainer">
              <Title>MINDCHAT</Title>
              <Tagline>You already text yourself, formalize it.</Tagline>
            </div>
          </div>
        </div>
      </Header>
    )
  }
}

export default PageHeader;
