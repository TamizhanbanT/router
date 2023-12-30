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









export default function FullStack() {
          
      const obj=[
        {img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
        title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
       summary:"When you’re hiring a full-stack developer, what are the most important things you look for?",
        button:"Read more",
    
        },

        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
        title:"Generating Concepts for Product Design: Step-by-Step Guide [2024]",
       summary:"Have you ever wondered what kickstarts the journey of creating an innovative product?",
    
        button:"Read more",


        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
        title:"Horizontal vs Vertical Scaling for Efficient System Design",
       summary:"In the world of system design, envision a digital skyscraper – a multifaceted structure built",
       button:"Read more",
        
        
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-How-to-Get-Rewarding-UIUX-Jobs.webp",
        title:"Best Books to Learn Full-Stack Development",
       summary:"In the world of system design, envision a digital skyscraper – a multifaceted structure built",
       button:"Read more",
        
        },
        {
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
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
    <Navbar.Brand href="#home">All</Navbar.Brand>
        
        <Nav.Link href="#home">Full Stack Development</Nav.Link>
            <Nav.Link href="#link">Data science</Nav.Link>
           
        <Nav.Link href="#home">Cyber security</Nav.Link>
            <Nav.Link href="#link">Career</Nav.Link>
              
             
            
                
               

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
