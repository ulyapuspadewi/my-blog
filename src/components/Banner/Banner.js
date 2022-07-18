import React from "react"
import { Banners, BannerCard } from './styled';

const Banner = () => {
    return (

        <Banners id="Banners" className='carousel slide' data-bs-ride="carousel">
            <div className='carousel-inner'>
                <div className='carousel-item active' data-bs-interval="3000">
                    <BannerCard src={require('../../images/banner1.jpg')} className='d-block w-100' />
                </div>
                <div className='carousel-item' data-bs-interval="3000">
                    <BannerCard src={require('../../images/banner2.jpg')} className='d-block w-100' />
                </div>
                <div className='carousel-item' data-bs-interval="3000">
                    <BannerCard src={require('../../images/banner3.jpg')} className='d-block w-100' />
                </div>
            </div>
            <button className='carousel-control-prev' type="button" data-bs-target="#Banners" data-bs-slide="prev">
                <span className='carousel-control-prev-icon' aria-hidden="true"></span>
                <span className='visually-hidden'>Previous</span>
            </button>
            <button className='carousel-control-next' type="button" data-bs-target="#Banners" data-bs-slide="next">
                <span className='carousel-control-next-icon' aria-hidden="true"></span>
                <span className='visually-hidden'>Next</span>
            </button>
        </Banners>

    )
}

export default Banner