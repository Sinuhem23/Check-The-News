import React from 'react';
import YouTube from './YouTube';
import News from './News';
import Search from './Search';
import '../CSS/home.css';

// export const ListContext = createContext();

const Home = (props) => {
  // const [articles, setArticles] = useState([]);
  // const [term, setTerm] = useState('world');
  // // const [isLoading, setIsLoading] = useState(true);

  // // const API = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.NEW_YORK_TIMES_API_KEY}`;

  // useEffect(() => {
  //   console.log('useEffect runs: API fetch');
  //   fetch(
  //     `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=NGDHuyCPqg46TMbprxsAixEYubGjszdw`
  //   )
  //     .then((response) => response.json())
  //     .then((result) => setArticles(result.response.docs));
  //   // setIsLoading(false);
  // }, [term]);
  // console.log(articles);
  // const articles = useContext(ListContext);

  return (
    <div className='main_container'>
      <div className='search'>
        <Search />
      </div>
      <div className='inner_container'>
        <div className='news'>
          <News />
        </div>
        <div className='youtube'>
          <YouTube />
        </div>
      </div>
    </div>
  );
};
export default Home;
