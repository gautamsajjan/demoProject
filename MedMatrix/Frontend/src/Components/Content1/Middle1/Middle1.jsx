import React from 'react'
import './Middle1.css'
import { assets } from '../../../assets/assets'

const Middle1 = () => {
  return (
    <div className="Middle1">
      <div className="middle">
        <div className="inventory">
          <img src={assets.inventory} alt="Inventory" />
          <div className="h31">Manage Products</div>
          <div className="p1">Effortlessly add, update, or remove medicines and products to keep your pharmacy inventory accurate and up-to-date.</div>
          <div className="b1">
            <button>Manage Inventory</button>
          </div>
        </div>
        <div className="order">
          <img src={assets.order} alt="Order" />
          <div className="h32">Track Orders</div>
          <div className="p2">Monitor all customer orders, review details, and manage deliveries seamlessly.</div>
          <div className="b2">
            <button>Order Status</button>
          </div>
        </div>
        <div className="setting">
          <img src={assets.setting} alt="Setting" />
          <div className="h33">Profile Setup</div>
          <div className="p3">Create and update your pharmacy profile to build trust with customers and provide easy access to your services.</div>
          <div className="b3">
            <button>Setup Profile</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Middle1
