import React from 'react'
import  './Faq.css'
function Faq() {
    return (
        <div className="Faq-container">
             <div className="card-header">
                       
                       <div className="faq-content">
                       <h1>
                            Frequently Asked Questions
                        </h1>
                       </div>

                        <div className="banner-form">
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>  
                          <form action="" method="post">
             
                        <div className="form-group">
                            <input type="email" placeholder="Email Address"/>
                        </div>

                        <div className="form-group">
                            <button type="submit">Get Started &#62;  </button>
                        </div>
                       </form>
                    </div>
            </div>
            
        </div>
    )
}

export default Faq
