import React, {Component} from 'react';
import styled from 'styled-components';
import download_button from '../images/Download_App_Store_Image.svg';


const Banner = styled.div`
  position: fixed;
  bottom: 0px;
  height: 70px;
  width: 100%;
  background: #FB99CD;
  box-shadow:  3px 3px 7px 6px rgba(0,0,0,0.08);
`

const DownloadButton = styled.a`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  img {
    height: 50px;
    margin: 10px;
  }
`


class Footer extends Component {
  render(){
    return(
      <Banner>
          <DownloadButton href="https://itunes.apple.com/us/app/mindchat-messenger/id1161592824?ls=1&mt=8">
            <img src={download_button} className="downloadButton" alt=""/>
          </DownloadButton>
      </Banner>
    )
  }
}

export default Footer;
