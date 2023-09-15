import React from "react";

const  NewsItem =(props)=> {
 
    let { title, description, url, urlImage, author, date ,company} = props;
    return (
      <div>
        <div className="my-3">
        <div className="card">

          <div style={{display:'flex',
          position:'absolute',
           justifyContent: 'flex-end', 
           right:'0',
          }}>
          <span className=" badge rounded-pill bg-danger  " >
            {company}
          </span>
         
          </div>
       
          <img
            src={
              !urlImage
                ? "https://images.cnbctv18.com/wp-content/uploads/2022/08/Indian-Flag-1019x573.jpg?im=FitAndFill,width=1200"
                : urlImage
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              href={url}
              target=".blank"
              className="btn btn-sm btn-primary btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
