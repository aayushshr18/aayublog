import React from 'react';
import { jobs } from '../components/data';
import Card from '../components/Card';

const Jobs = () => {
  return (
    
    <div className="container p-5">
      <div className="container m-3 p-3">
        <h2 className='mb-3'>Welcome to Jobs Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis delectus dignissimos autem possimus eius adipisci ab facere fugiat in? Voluptas corporis dolore suscipit consectetur, asperiores atque, quia reiciendis reprehenderit similique cumque qui impedit molestias saepe sed natus veritatis modi doloribus necessitatibus ad dolor aspernatur. Nisi excepturi ullam consequuntur delectus?</p>
        </div>
        <div className="container d-flex flex-column align-items-center">
             {
             jobs.map((n)=>{
                  return <Card key={n.id} title={n.title} imgurl={n.urlToImage} text={n.description} url={n.url}/>
              })}
        </div>
      </div>

  )
}

export default Jobs;