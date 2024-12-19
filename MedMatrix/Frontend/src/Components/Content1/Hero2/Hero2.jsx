import React from 'react'
import './Hero2.css'
import { assets } from '../../../assets/assets'

const Hero2 = () => {
    return (
        <div className="Hero2">
            <div className="pero">
                <div className="zero">
                    <div className="hero2">
                        <div className="htext1">Your Trusted Pharmacy at Your Fingertips</div>
                        <div className="htext2">Order Medicines Conveniently, Save More, and Stay Healthy</div>
                        <div className="htext3">A Marketplace Built on Care, Trust, and Reliability</div>
                        <div className="hbutton">
                            <button>Shop Now</button>
                        </div>
                    </div>
                    <div className="hero-img">
                        <img src={assets.pharmacyHero} alt="Customer Hero" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2
