import React, { useEffect, useState } from "react";
import Axios from "axios";
const Left = () => {
  const [leftData, setLeftData] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://newsapi.org/v2/everything?q=tesla&from=2023-11-22&sortBy=publishedAt&apiKey=49fc8dfaacff488dab29d0b38b5b509a"
    )
      .then((res) => {
        console.log(res.data.articles);
        setLeftData(res.data.articles);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  return (
    <div className="">
      {leftData &&
        leftData.map(
          ({
            author,
            title,
            description,
            urlToImage,
            publishedAt,
            content,
          }) => {
            return (
              <div
                key={publishedAt}
                className="p-6 w-[600px] h-[700px] border border-slate-300 py-5 overflow-hidden flex flex-col justify-center items-center rounded-lg"
              >
                <img
                  src={urlToImage}
                  alt=""
                  className="w-[400px] h-[300px] mb-4 rounded-lg"
                />
                <h3 className="text-slate-50 font-semibold text-center mb-2 text-lg">
                  {title}
                </h3>
                <p className="text-slate-300 font-medium text-center mb-2 text-base">
                  - {author}
                </p>
                <p className="text-slate-400 font-normal text-base mb-2">
                  {description}
                </p>
                <p className="text-slate-400 font-normal text-base mb-2">
                  {content}
                </p>

                <p className="text-slate-400 font-normal text-base mb-2">
                  {publishedAt}
                </p>
              </div>
            );
          }
        )}
    </div>
  );
};

export default Left;
