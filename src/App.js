import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PageHeader from './components/header.js';
import Article from './components/article.js';
import ArticleText from './components/articleText.js';

// article images
import iOne from './images/write_mobile.svg';
import iTwo from './images/set_mobile.svg';
import iThree from './images/notification.svg';

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader></PageHeader>
        <Article
          direction="row"
          image={iOne}
          title="Write to yourself"
          desc="This is for the quick ones. For that eureka moment happening mid conversation. For those often lost as a barrage of steps come between you and some app's text input. Leaving you empty and anxious for the future, beside what's now an annoyed friend. Mindchat is for that moment. Open, write and continue on with life."
          />
        <Article
          direction="row-reverse"
          image={iTwo}
          title="Write to yourself"
          desc="This is for the quick ones. For that eureka moment happening mid conversation. For those often lost as a barrage of steps come between you and some app's text input. Leaving you empty and anxious for the future, beside what's now an annoyed friend. Mindchat is for that moment. Open, write and continue on with life."
          />
        <Article
          direction="column"
          containerColor="#FB99CD"
          image={iThree}
          />
        <ArticleText
          title="Write to yourself"
          desc="This is for the quick ones. For that eureka moment happening mid conversation. For those often lost as a barrage of steps come between you and some app's text input. Leaving you empty and anxious for the future, beside what's now an annoyed friend. Mindchat is for that moment. Open, write and continue on with life." />
      </div>
    );
  }
}

export default App;
