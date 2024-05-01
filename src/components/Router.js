import React from 'react';

import "./style2.css";

import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import  Container from 'react-bootstrap/Container';

import Card  from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import { Badge } from 'react-bootstrap';

import { Rating } from '@mui/material';









export default function All() {
          
      const obj=[
        {img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-The-Role-of-Micro-Interactions-in-UX.webp",
        title:"The Role of Micro-Interactions in UX",
       summary:"Have you ever noticed how satisfying it feels to swipe down on your phone",
        button:"Read more",
    
        },

        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Generating-Concepts-for-Product-Design-Step-by-Step-Guide.webp",
        title:"Generating Concepts for Product Design: Step-by-Step Guide [2024]",
       summary:"Have you ever wondered what kickstarts the journey of creating an innovative product?",
    
        button:"Read more",


        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-How-to-Get-Rewarding-UIUX-Jobs.webp",
        title:"UI UX vs Product Design: 8 Insightful Comparisons",
       summary:"Adobe XD is a versatile design and prototyping tool that has become an essential tool",
       button:"Read more",
        
        
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-How-to-Get-Rewarding-UIUX-Jobs.webp",
        title:"How to Get Rewarding UI/UX Jobs? [2024]",
       summary:"In the ever-evolving landscape of technology, the demand for skilled professionals in UI/UX design",
       button:"Read more",
        
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Generating-Concepts-for-Product-Design-Step-by-Step-Guide.webp",
            title:"Generating Concepts for Product Design: Step-by-Step Guide [2024]",
           summary:"Have you ever wondered what kickstarts the journey of creating an innovative product?",
        
            button:"Read more",
    
        }
      ];

      
         
          let obj1=[obj[2],obj[0],obj[1],obj[3],obj[4]]
        

      

 



        function Cont(y){
            

            

                let samp=y.map((x)=>{
                        
                     
                 
                    return(
                        <div class="container" >
                      
                       <div class="card" >
                       
                        
                          <img  class="card-img-top"   src={x.img} />
                                <div class="card-body">
                                         <h3 class="card-title">{x.title}</h3>
                                              <p class="card-text">
                                                   {x.summary}
                                                   </p>
                                                   
                                                   <Button variant="outline-dark" >{x.button}</Button>
                                                  
                                       
                                  </div>
                        </div>                     
                    
                     </div>
                     )
                 }
                 
                    )
           return(samp )
           
        }


  return (
   <div>
    <Navbar expand="md" className="bg-body-tertiary">
    <Container className='pad'>
    <Link to="/">All</Link>
        
      
            <Link to="/like">like</Link>
           
        <Link to="/Amazon">shopping card</Link>
        <Link to="/Fullstack">Full Stack Development</Link>
            
              
             
            
                
               

        </Container>
    </Navbar>
      
     

    <div className='cards'>
         
        {Cont(obj)}
       
    </div>
    <div className='cards'>
         
        {Cont(obj1)}
       
    </div>
    <div className='cards'>
         
        {Cont(obj)}
        </div>
    </div>
  )
}
