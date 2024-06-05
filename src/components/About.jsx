// import React from 'react'
import Image from '../images/about.png'
import SectionHead from './SectionHead'
import { IoDiamondOutline } from "react-icons/io5";
import { about } from '../data';
import Card from '../UI/Card';

const About = () => {
  return (
    <section className="about">
      <div className="container about-container">
        <div className="about-left">
          <div className="abut-image">
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="about-right">
          <SectionHead icon={<IoDiamondOutline />} title='About' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius illo quibusdam sed laboriosam dolorum unde et,
            nesciunt magnam similique ipsum.</p>
          <div className="about-wrapper">
            {
              about.map(({ id, icon, title, info }) => {
                return (
                  <Card className='about-about' key={id}>
                    <span>{icon}</span>
                    <h4>{title}</h4>
                    <small>{info}</small>
                  </Card>
                )
                  
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default About