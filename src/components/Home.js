import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Home.css';
import { Link } from 'react-router-dom'
import ImageSlider from './ImageSlider';
import {SliderData} from './SliderData'

function Home() {
    return (

        
        <div className='home-container'>

            <img src="/img/home2.png"/>
            <h1>~Health is wealth~</h1>
            <p>try to build healthy body</p> 
            <div className='home-btns'>

            <Link to='/signup'> <Button className='btns'
                 buttonStyle='btn--outline' 
                 buttonSize='btn--large'
                >
                GET STARTED
                </Button></Link>

            <Link to='/ImageSlider'><Button className='btns'
                 buttonStyle='btn--primary' 
                 buttonSize='btn--large'
                >
                NEWS
                </Button></Link>
            </div>

            <ImageSlider slides={SliderData} />
            
        
            
        </div>

      
    )
}

export default Home;
