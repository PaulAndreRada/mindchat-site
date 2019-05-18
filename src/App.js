import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import Article from './components/article.js';
import ArticleImage from './components/articleImage.js';
import ArticleText from './components/articleText.js';
import Footer from './components/footer.js';
import Highlight from './components/highlight.js';
import StickyFooter from './components/stickyFooter.js';

// article images
import iOne from './images/write_mobile_no_shadow.svg';
import iTwo from './images/set_mobile_no_shadow.svg';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Article
          direction="row"
          imageShadow={true}
          image={iOne}
          title="Write to yourself">
          This is <Highlight>for the quick ones.</Highlight> For that eureka moment happening mid conversation. For those often lost as a barrage of steps come between you and some app's text input. Leaving you empty and anxious for the future. Mindchat is for that moment. <Highlight>Open, write and continue on with life.</Highlight>
        </Article>
        <Article
          direction="row-reverse"
          image={iTwo}
          title="Remind yourself">
          <Highlight>Don't set when.</Highlight> Events in time aren't often predictable. Rarely do simple or personal things require an exact time. Being exact is important only when it is. so let's start with the real cases. Mindchat is designed to remind you like a friend, not a computer. Wan't to remember later today, tomorrow, sometime this week? Let's leave the extra steps for when you need them, for now and for most, <Highlight>just say when.</Highlight>
        </Article>
        <ArticleImage />
        <Article
          title="Remember">
          With a simple list of the best average times comes <Highlight>a simple notification and you finally remembered</Highlight> that little thing you where always too bothered to write.
        </Article>
      <Footer/>
      <StickyFooter/>
      </div>
    );
  }
}

export default App;
