// import React from 'react'
import { IoDiamondOutline } from "react-icons/io5";
import SectionHead from "./SectionHead";
import { abtInfo } from "../data";

const AbtInfo = () => {
  return (
    <section className="abt-info">
      <div className="container abt-info-container">
        
          <SectionHead icon={<IoDiamondOutline />} title='Main Information'/>
        
      </div>
      <div className="abt-info-wrapper">
        {
          abtInfo.map(({ id, icon, title, info, path }) => {
            
          })
}
      </div>
    </section>
  )
}

export default AbtInfo