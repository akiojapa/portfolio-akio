import React from 'react';
import php_logo from "../../assets/img/php-logo.png";
import html_logo from "../../assets/img/html-logo.png";
import python_logo from "../../assets/img/python-logo.webp";
import java_logo from "../../assets/img/java-logo.svg";
import logo_c from "../../assets/img/logo-c.svg";
import react_logo from "../../assets/img/react-logo.png";
import { DiPhp,DiPython,DiHtml5,DiCss3,DiJavascript,DiJava, DiBootstrap, DiReact } from "react-icons/di";
import { IconContext } from 'react-icons';
import Carousel from 'react-multi-carousel';
import {CircularProgressbarWithChildren} from 'react-circular-progressbar'
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../assets/img/color-sharp.png"
import './Skills.css'
import {GradientSVG} from '../GradientSVG/GradientSVG';

const Skills = () => {

    const idCSS = "hello"

    const tam_logo = "80px";

  const colorPHP =[
    {
      id: "PHP",
      cor1:"#00000",
      cor2: "#8673FF"

    }
  ]

  const colorPython =[
    {
      id: "Python",
      cor1: "#0038FF",
      cor2: "#FFE600"
    }
  ]

  const colorJava =[
    {
      id: "Java",
      cor1: "#00C2FF",
      cor2: "#FF5C00"
    }
  ]

  const colorHTML = [
    {
      id: "HTML",
      cor1: "#FAFF00",
      cor2: "#FF5C00"
    }
  ]

  const colorC = [
    {
      id: "ColorC",
      cor1: "#FFFFFF",
      cor2: "#0157FF"
    }
  ]

  const colorReact = [
    {
      id: "React",
      cor1: "#FFFFFF",
      cor2: "#00C2FF"
    }
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

  return (
    <section className="skill" id="skills" >
        <div className="container">
            <div className="row">
                <div className="col-10">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here are what i know about the programming languages in the market.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                        <div style={{width: '50%', height: '50%', margin: 'auto', }}>
                        {
                            colorPHP.map((colors,index)=>{
                              return (
                                <GradientSVG 
                                  key={index}
                                  {...colors}
                                />
                              )
                            })
                          }
                        <CircularProgressbarWithChildren 
                         value={80} 
                         strokeWidth={8}
                         styles={{path: {stroke: `url(#PHP)`, height:"100%"},
                         trail:{
                            stroke: "transparent"
                         }
                        }} 
                            className="item">
                          <IconContext.Provider value={{size: tam_logo}}>
                            <div>
                            <DiPhp />
                            </div>
                          </IconContext.Provider>
                         </CircularProgressbarWithChildren>
                         </div>
                         <div style={{width: '50%', height: '50%', margin: 'auto', }}>
                         {
                            colorPython.map((colors,index)=>{
                              return (
                                <GradientSVG 
                                  key={index}
                                  {...colors}
                                />
                              )
                            })
                          }
                         <CircularProgressbarWithChildren 
                         value={60} 
                         strokeWidth={8}
                         styles={{path: {stroke: `url(#HTML)`, height:"100%"},
                         trail:{
                            stroke: "transparent"
                         }
                        }} 
                            className="item">
                          <IconContext.Provider value={{size: tam_logo}}>
                            <div>
                            <DiPython />
                            </div>
                          </IconContext.Provider>
                         </CircularProgressbarWithChildren>
                         </div>

                         <div style={{width: '50%', height: '50%', margin: 'auto', }}>
                         {
                            colorHTML.map((colors,index)=>{
                              return (
                                <GradientSVG 
                                  key={index}
                                  {...colors}
                                />
                              )
                            })
                          }
                         <CircularProgressbarWithChildren 
                         value={75} 
                         strokeWidth={8}
                         styles={{path: {stroke: `url(#Python)`, height:"100%"},
                         trail:{
                            stroke: "transparent"
                         }
                        }} 
                            className="item">
                          <IconContext.Provider value={{size: tam_logo}}>
                            <div>
                            <DiJava />
                            </div>
                          </IconContext.Provider>
                         </CircularProgressbarWithChildren>
                         </div>
                         
                         <div style={{width: '50%', height: '50%', margin: 'auto', }}>
                         {
                            colorJava.map((colors,index)=>{
                              return (
                                <GradientSVG 
                                  key={index}
                                  {...colors}
                                />
                              )
                            })
                          }
                         <CircularProgressbarWithChildren 
                         value={90} 
                         strokeWidth={8}
                         styles={{path: {stroke: `url(#Java)`, height:"100%"},
                         trail:{
                            stroke: "transparent"
                         }
                        }} 
                            className="item">
                          <IconContext.Provider value={{size: tam_logo}}>
                            <div>
                            <DiHtml5 />
                            </div>
                          </IconContext.Provider>
                         </CircularProgressbarWithChildren>
                         </div>
                         <div style={{width: '50%', height: '50%', margin: 'auto', }}>
                         {
                            colorC.map((colors,index)=>{
                              return (
                                <GradientSVG 
                                  key={index}
                                  {...colors}
                                />
                              )
                            })
                          }
                         <CircularProgressbarWithChildren 
                         value={50} 
                         strokeWidth={8}
                         styles={{path: {stroke: `url(#ColorC)`, height:"100%"},
                         trail:{
                            stroke: "transparent"
                         }
                        }} 
                            className="item">
                          <IconContext.Provider value={{size: tam_logo}}>
                            <div>
                            <DiCss3 />
                            </div>
                          </IconContext.Provider>
                         </CircularProgressbarWithChildren>
                         </div>
                         <div style={{width: '50%', height: '50%', margin: 'auto', }}>
                         {
                            colorReact.map((colors,index)=>{
                              return (
                                <GradientSVG 
                                  key={index}
                                  {...colors}
                                />
                              )
                            })
                          }
                         <CircularProgressbarWithChildren 
                         value={70} 
                         strokeWidth={8}
                         styles={{path: {stroke: `url(#React)`, height:"100%"},
                         trail:{
                            stroke: "transparent"
                         }
                        }} 
                            className="item">
                          <IconContext.Provider value={{size: tam_logo}}>
                            <div>
                            <DiJavascript />
                            </div>
                          </IconContext.Provider>
                         </CircularProgressbarWithChildren>
                         </div>
                         <div style={{width: '50%', height: '50%', margin: 'auto', }}>
                         {
                            colorC.map((colors,index)=>{
                              return (
                                <GradientSVG 
                                  key={index}
                                  {...colors}
                                />
                              )
                            })
                          }
                         <CircularProgressbarWithChildren 
                         value={50} 
                         strokeWidth={8}
                         styles={{path: {stroke: `url(#ColorC)`, height:"100%"},
                         trail:{
                            stroke: "transparent"
                         }
                        }} 
                            className="item">
                          <IconContext.Provider value={{size: tam_logo}}>
                            <div>
                            <DiReact />
                            </div>
                          </IconContext.Provider>
                         </CircularProgressbarWithChildren>
                         </div>
                         <div style={{width: '50%', height: '50%', margin: 'auto', }}>
                         {
                            colorC.map((colors,index)=>{
                              return (
                                <GradientSVG 
                                  key={index}
                                  {...colors}
                                />
                              )
                            })
                          }
                         <CircularProgressbarWithChildren 
                         value={70} 
                         strokeWidth={8}
                         styles={{path: {stroke: `url(#ColorC)`, height:"100%"},
                         trail:{
                            stroke: "transparent"
                         }
                        }} 
                            className="item">
                          <IconContext.Provider value={{size: tam_logo}}>
                            <div>
                            <DiBootstrap />
                            </div>
                          </IconContext.Provider>
                         </CircularProgressbarWithChildren>
                         </div>
                         
                         

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills;