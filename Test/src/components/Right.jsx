import React from 'react'
import { useState, useEffect} from 'react';
import Axios from 'axios'
const Right = () => {
  const [rightData, setRightData] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://newsapi.org/v2/everything?q=apple&from=2023-12-21&to=2023-12-21&sortBy=popularity&apiKey=49fc8dfaacff488dab29d0b38b5b509a"
    )
      .then((res) => {
        console.log(res.data.articles);
        setRightData(res.data.articles);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  return (
    <div className="">
      {rightData &&
        rightData.map(
          ({
            author,
            title,
            description,
            urlToImage,
            publishedAt,
            content,
            name
          }) => {
            return (
              <div
                key={name}
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


export default Right
