const App = () => {
  const [tweets, setTweets] = React.useState([
    {
      id: 0,
      icon: '🌽',
      displayName: 'もろこし太郎',
      accountName: 'morokoshi',
      content: '今日も1日もろこしがうまい'
    },
    {
      id: 1,
      icon: '🦐',
      displayName: 'エビデンス',
      accountName: 'evidence',
      content: 'かにみそたべたい'
    },
    {
      id: 2,
      icon:"😂",
      displayName:"まみよ",
      accountName:"wristcutter",
      content:"今日も血が旨い😂"
    }
  ]);

  const addTweet = React.useCallback((tweet) => setTweets((prev) => [tweet, ...prev]), [setTweets]);

  return (
    <div>
      <TweetInput addTweet={addTweet}/>
      <Timeline tweets={tweets}/>
    </div>
  );
}

const target = document.querySelector('#app');
ReactDOM.render(<App/>, target);