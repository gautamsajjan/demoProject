import React from 'react'
import './Hero1.css'
import { assets } from '../../../assets/assets'

const Hero1 = () => {
    return (
        <div className="Hero1">
            <div className="pero">
                <div className="zero">
                    <div className="hero">
                        <div className="htext1">Connect with Trusted Pharmacies</div>
                        <div className="htext2">Access Medicines Easily, Manage Prescriptions, and Stay Healthy</div>
                        <div className="htext3">A Platform Dedicated to Your Health and Convenience</div>
                        <div className="hbutton">
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="hero-img">
                        <img src={assets.pharmacyHero} alt="Pharmacy Hero" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero1
