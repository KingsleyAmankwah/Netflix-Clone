import React from 'react'
import './Header.css'


function Header() {
    return (
        <div className="banner" 
        style={{
            backgroundImage: `url('./assets/bg.jpg')`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            objectFit: "contain"
        
        }}>
            <div className="banner-content">
                <div className="banner-nav">
                    <div className="logo">
                        <img src="./assets/logo.png" width="150px" alt="" srcSet="" />
                    </div>

                    <div className="login-btn">
                        <button className="sign-in-btn" type="submit">Sign In</button>
                    </div>
                </div>
              <div className="banner-container">
                <div className="banner-text">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>
                    Watch anywhere. Cancel anytime.
                    
                    </h2>
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
        </div>
    )
}

export default Header
