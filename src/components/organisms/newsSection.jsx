import moment from "moment";
import PLACEHOLDER from "../../../assets/images/placeholder_the_news_room.png";
const NewsSection = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {data &&
        data.data &&
        data.data.articles &&
        data.data.articles.map((article) => (
          <div
            key={article.url}
            className="flex flex-col justify-end border-solid border-blue-500 border-2 p-2 m-2 w-auto lg:w-1/3 xl:w-1/4 2xl:w-1/4 md:w-1/3 rounded-lg cursor-pointer"
            onClick={() => window.open(article.url)}
          >
            <div className="flex-1">
              <img
                className="w-full"
                src={article.urlToImage || PLACEHOLDER}
                alt={article.title}
              />
            </div>
            <div className="">
              <h2 className="text-2xl font-bold">{article.title}</h2>
              <p>{article.description}</p>
              <div className="flex justify-between">
                <p className="font-bold m-2">{article.source.name}</p>
                <div className="flex">
                  <p className="m-2 italic">{(article.author?article.author+", ": "")+(article.publishedAt && moment(article.publishedAt).fromNow())}</p>
                  {article.publishedAt && (
                    <p className="m-2">
                      {}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default NewsSection;
