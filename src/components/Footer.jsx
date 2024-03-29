import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer_area section_padding_130_0">
      <div className="container">
        <div className="row">
       
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-footer-widget section_padding_0_130">
         
              <div className="footer-logo mb-3"></div>
              <p>AayuBlog is the latest and most popular blogging page.</p>
             
              <div className="copywrite-text mb-5">
                <p className="mb-0">Made with <i className="lni-heart mr-1">&#9829; &nbsp;
</i>by<a className="ml-1" href="https://aayufolio.netlify.app/" target='_blank'> Aayush Shrivastava</a></p>
              </div>
          
              <div className="footer_social_area"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest"><i className="fa fa-pinterest"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Skype"><i className="fa fa-skype"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a></div>
            </div>
          </div>
    
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
      
              <h5 className="widget-title">About</h5>
           
              <div className="footer_menu">
                <ul>
                  <li><a href="/">About Us</a></li>
                  <li><a href="/">Corporate Sale</a></li>
                  <li><a href="/">Terms &amp; Policy</a></li>
                  <li><a href="/">Community</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
           
              <h5 className="widget-title">Support</h5>
              
              <div className="footer_menu">
                <ul>
                  <li><a href="/">Help</a></li>
                  <li><a href="/">Support</a></li>
                  <li><a href="/">Privacy Policy</a></li>
                  <li><a href="/">Term &amp; Conditions</a></li>
                  <li><a href="/">Help &amp; Support</a></li>
                </ul>
              </div>
            </div>
          </div>
         
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
            
              <h5 className="widget-title">Contact</h5>
              
              <div className="footer_menu">
                <ul>
                  <li><a href="/">Call Centre</a></li>
                  <li><a href="/">Email Us</a></li>
                  <li><a href="/">Term &amp; Conditions</a></li>
                  <li><a href="/">Help Center</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;