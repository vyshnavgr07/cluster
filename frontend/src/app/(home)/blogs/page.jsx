import ProfileHeader from '@/shared/ProfileHeader'
import React from 'react'
import SearchBar from '../component/SearchBar'
import NavBar from '../component/NavBar'
import HomeHead from '../component/HomeHead'

const page = () => {
let img='https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/f8239007-7d36-45ce-a0a1-fdf91052b10e/299f5e14-73c4-4a9b-99c9-e44adbc218cf.png'
  return (
    <div className='w-full   h-screen overflow-y-auto p-2  hide-scrollbar'>
      <HomeHead img={img}/>
 {[...Array(5)].map((x)=>(
   <div className='w-full border border-white h-[700px] shadow-2xl mt-10 overflow-hidden rounded-md p-3'>
   <ProfileHeader  image={img} name={'saleej'}/>
    <div className='w-full '>
        <div className='w-full flex justify-center  mt-2'> 
        <img className='w-56 h-56 ' src='https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png' />
        </div>
         
       <p className='leading-relaxed text-white'><strong>title</strong>    titledbdbsbsdbsbsfbsfb</p>
       <p  className='leading-relaxed text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, sunt. Reprehenderit, rerum maxime quibusdam veniam velit harum temporibus possimus ex quisquam a impedit corrupti architecto iusto ut amet inventore omnis!
       Sed voluptatum atque aliquam eaque dicta excepturi nisi cumque sit omnis! Itaque eveniet reprehenderit blanditiis, voluptatibus numquam eligendi quis vel dolorum, facere corporis quia nesciunt atque tempora officia ab nulla.
       Cumque suscipit tempora similique aperiam ducimus, illo atque fuga delectus. Culpa, numquam ipsa? Non quo libero quaerat, deleniti, blanditiis suscipit expedita eligendi cupiditate nostrum perspiciatis aliquam quas iusto quos optio.
       Nobis debitis reiciendis, suscipit quibusdam illo eligendi laudantium illum ipsam cum numquam amet nostrum esse assumenda. Tempore, consequatur. Sapiente, nam voluptatum! Obcaecati nam voluptates rem at perspiciatis fuga, corporis assumenda!
       Vero nam modi eveniet, ullam eos veritatis facere provident ipsam ab velit,?
       <a href='https://yourlink.com' className='text-blue-500 hover:underline mt-2 block'>See more.......</a>   </p>
   </div>
   <div>
     
   </div>
   </div>
))}
     
   
        
    </div>
  )
}

export default page