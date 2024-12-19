import React from 'react'
import './Middle2.css'
import { assets } from '../../../assets/assets'

const Middle2 = () => {
    return (
        <div className="Middle2">
            <div className="middle2">
                <div className="shoppr">
                    <img src={assets.buy} alt="Medicine" />
                    <div className="h31">Browse Medicines</div>
                    <div className="p1">Explore a wide range of medicines and healthcare products. Use filters to find what you need quickly and easily.</div>
                    <div className="b1">
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className="appointment">
                    <img src={assets.appointment} alt="Appointment" />
                    <div className="h32">Manage Appointments</div>
                    <div className="p2">Book, view, or reschedule your appointments with ease. Stay on top of your healthcare needs effortlessly.</div>
                    <div className="b2">
                        <button>Book Now</button>
                    </div>
                </div>
                <div className="profile">
                    <img src={assets.profile} alt="Profile" />
                    <div className="h33">Update Profile</div>
                    <div className="p3">Edit your personal information and preferences to ensure a smooth and personalized experience on our platform.</div>
                    <div className="b3">
                        <button>Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Middle2
