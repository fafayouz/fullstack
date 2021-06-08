import React from 'react'
import { useMediaQuery } from 'react-responsive'
import About from '../components/aboutus/About'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import NavbarMobile from '../components/navbar/NavbarMobile'
import NewPost from '../components/newPost/NewPost'
import NewPostAvendre from '../components/newPost/NewPostAvendre'
import NewPostLocation from '../components/newPost/NewPostLocation'
import NewPostlouer from '../components/newPost/NewPostlouer'
import Slider from '../components/slider/Slider'
import SliderMobile from '../components/slider/SliderMobile'

const Home = () => {
    

      
    return (
        <>
                <Navbar/>
                <Slider/>
                <NewPostAvendre/>
                <NewPostlouer/>
                <About/>
                <Footer/>
        </>
    )
}

export default Home
