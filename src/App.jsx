import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import data from './data';



function App() {
  const [reviews,setReviews]=useState(data)
  const [value,setValue]=useState(0)

  useEffect(()=>{
    const lastindex=reviews.length-1;
    if (value<0){
      setValue(lastindex)
    }
    if (value>lastindex){
      setValue(0)
    }

  },[value,reviews])

  useEffect(()=>{
    let slider=setInterval(()=>{
setValue(value+1)

    },3000);
    return(()=>{clearInterval(slider)})
  },[value])



  return(
    
    
    <section className='section'>
      <div className="title">
      <h2><span>/</span>
        Reviews</h2>
      </div>
      <div className="section-center">
        {reviews.map((review,index)=>{
          const {id,image,name,title,quote}=review;
          let position="nextSlide"
          if (index ===value){
            position="activeSlide"
          }
          if(index ===value-1 || (index===0 && value===reviews.length -1)){
            position="lastSlide"
          }


          return(

            <article className={position} key={id}>
              <img src={image} className='person-img' alt="" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteLeft className='icon'/>
           

            
            </article>
          )

          

        })}
    
     
       <button className="prev" onClick={()=>setValue(value-1)}>
       <FaChevronLeft />
       </button>
       <button className="next" onClick={()=>setValue(value+1)}>
       <FaChevronRight/>
       </button>


      </div>



  </section>
  

)
  
  ;
}

export default App;
