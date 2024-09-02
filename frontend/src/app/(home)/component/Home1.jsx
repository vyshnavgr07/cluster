'use client'
import Meteors from "@/components/magicui/meteors";
import Button from '@/shared/Button'
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react'
const Home1 = () => {
  const router=useRouter()
  const [bg, setBg] = useState('red');
  const [index, setIndex] = useState(0);
  const arr = ['red','blue'];
  
  useEffect(() => {
 
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % arr.length);
      setBg(arr[index]);
    }, 2000);
  
    return () => clearInterval(intervalId); 
  }, [index]);

  const handleClick=()=>{
    router.push('/login')
  }
  return (
    <div className={`bg-${bg}-500 w-full overflow-hidden hide-scrollbar`} >
    <Meteors number={30} />
    <div className='w-full flex justify-between' >
    <Button value={'Blogger'}  />
    <div className="flex">
    <Button value={'Sign up'}  handleClick={handleClick}/>
    <Button value={'Sign in'}  handleClick={handleClick}/>
    </div>
    
    </div>

    <div className='w-full m-5 '>
     <h1 className='text-center text-5xl text-white'>Publish Your Passion on Your Way </h1>
     <h1 className='text-center text-3xl text-white'>Publish Your Passion on Your Way </h1>
    </div>
 </div>
  )
}  

export default Home1