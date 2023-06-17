import React from 'react'

const Card = ({title,imgurl,text,url}) => {
  return (
    <div className="card m-3 col-8 " >
      <img src={imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href={url} target='_blank' className="btn btn-primary">Read More</a>
        </div>
    </div>
  )
}

export default Card