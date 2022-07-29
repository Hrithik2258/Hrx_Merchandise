import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';


import { useStateContext } from '../context/StateContext';

const Success = () => {
    const {setCartItems,setTotalprice,setTotalQuantites} = useStateContext();
    const [order, setOrder] = useState(null)
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill/>
            </p>
            <h2>Thank you for your order!!!</h2>
            <p className='email-msg'>check your email mto check your invoice</p>
            <p className='description'>
              if You have any query then mail to 
              <a  className="email" href="mailto:hrithikpawar1020@gmail.com">hrithikpawar1020@gmail</a>
            </p>
            <Link href='/'>
              <button type='button' width='300px' className='btn'>
                Continue Shopping

              </button>
            </Link>
        </div>
    </div>
  )
}

export default Success