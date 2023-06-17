import React from 'react';
const Homes = () => {
  return (
      <div className="container">
        <div className="container m-2 p-5">
          <h1>Welcome to AayuBlog</h1>
          <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit error nesciunt eius nam sint. Nam, nihil vitae? Recusandae alias error repellat eveniet blanditiis minus nisi perspiciatis iusto cum beatae a aperiam modi aliquid, illo, vero, inventore eos? Eveniet libero nostrum id provident tempore itaque! Amet architecto porro labore sit perferendis!</h6>
        </div>
        <div className="container d-flex flex-column flex-sm-row p-5 justify-content-center">
        <div className="card m-2  col-lg-3" >
          <img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">News Feeds</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam corporis repellat, illo distinctio numquam veritatis delectus vitae velit molestiae earum!</p>
              <a href="/news" className="btn btn-primary">Jump to Main Page</a>
            </div>
        </div>
        <div className="card m-2 col-lg-4 " >
          <img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Updates on Current Events</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam corporis repellat, illo distinctio numquam veritatis delectus vitae velit molestiae earum!</p>
              <a href="/updates" className="btn btn-primary">Jump to Main Page</a>
            </div>
        </div>
        <div className="card m-2 col-lg-3" >
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8am9ic3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Jobs</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam corporis repellat, illo distinctio numquam veritatis delectus vitae velit molestiae earum!</p>
              <a href="/jobs" className="btn btn-primary">Jump to Main Page</a>
            </div>
        </div>
        </div>
      </div>
  )
}

export default Homes;