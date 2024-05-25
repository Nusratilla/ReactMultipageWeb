// import React from 'react'
import { IoDiamondOutline } from "react-icons/io5";
import SectionHead from "./SectionHead";
import { abtInfo } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const AbtInfo = () => {
  return (
    <section className="abt-info">
      <div className="container abt-info-container">
        
          <SectionHead icon={<IoDiamondOutline />} title='Main Information'/>
        
      </div>
      <div className="abt-info-wrapper">
        {
          abtInfo.map(({ id, icon, title, info, path }) => {
            return (
               <Card className="abt-info-card" key={id}>
                 <span>{icon}</span>
                 <h4>{title}</h4>
                 <small>{info}</small>
                 <Link to={path} className="btn sm">Ko'proq <FaAngleRight /></Link>
               </Card>
             )            
          })
        }
      </div>
    </section>
  )
}

export default AbtInfo