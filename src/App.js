import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {
  let [articles, setArticle] = useState([])
  let [country,setCoutry]=useState('india')
  useEffect(
    () => {
    
      fetch(`https://newsapi.org/v2/everything?q=${country}&sources=bbc-news&apiKey=8eb6a61da2264898ae9c75fa32e83745`)

        .then(((response) => response.json()))
        .then((data) => {
          const top10Articles = data.articles.slice(0, 10);
          setArticle(top10Articles)
        
        })
        .catch((err) => {
          console.log(err)
        })
    }, [country])

  return (
    <div className="App">
       <div className='header'>
          <h1>News API</h1>
           <input type="search" placeholder='search by country' onChange={
            (e)=>{
              setCoutry(e.target.value)
            }
           }/>
       </div>
      <div className='content'>
        {/* map function to loop through all the items of article */}
        {
          articles.map(article => (
            <News  article={article} />
          ))
        }

      </div>

    </div>
  );
}

export default App;
