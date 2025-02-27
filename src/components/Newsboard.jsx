import { useEffect, useState } from "react"
import Newsitem from "./Newsitem";


const Newsboard = ({category}) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        
        setArticles(data.articles);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news. Please try again later.");
      }
    };

    fetchNews();
  }, [category]); 

  return (
    <div>
      <h2 className="text-center"> <span className="badge bg-danger">Latest News Headlines</span></h2>

      {/* {articles.map((news,index)=>{
            return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}  />
      })} */}

    <div className="row"> 
          {articles.map((news, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">  
              <Newsitem
                title={news.title}
                description={news.description}
                src={news.urlToImage || "https://via.placeholder.com/350x200?text=No+Image"}
                url={news.url}
              />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Newsboard
