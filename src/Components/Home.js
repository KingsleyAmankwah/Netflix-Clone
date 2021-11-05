import React, {useState} from 'react';
import Header from './Header'
import Cards from './Cards'
import Footer from './Footer'
import Faq  from './Questions';
import data from './data'


function Home() {
    const [Questions, setQuestions] = useState(data);
    return (
      <div>
            <Header/>
            <Cards/>

            <div className="card-header">
     <div className="Questions-header">
      <h1>Frequently Asked Questions</h1>  
      </div>
     </div>

          {
            Questions.map((Question)=>{
              return (
                <Faq key={Question.id} {...Question} />
              )
            })
          }
          
      <div className="sub-form">
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
        

    
      <Footer/>
      </div>
    )
}

export default Home
