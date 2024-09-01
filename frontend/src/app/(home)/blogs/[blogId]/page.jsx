import ProfileHeader from '@/shared/ProfileHeader'
import React from 'react'

const BlogById = () => {
    let img='https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/f8239007-7d36-45ce-a0a1-fdf91052b10e/299f5e14-73c4-4a9b-99c9-e44adbc218cf.png'
  return (
    <div className='w-full  h-screen overflow-y-auto p-2  hide-scrollbar'>
<ProfileHeader name={'vyshnav'} image={img}/>
<div className='w-full '>
   <img className='w-56 h-56 flex justify-items-center' src='https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png' />
   <p  className='leading-relaxed text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, sunt. Reprehenderit, rerum maxime quibusdam veniam velit harum temporibus possimus ex quisquam a impedit corrupti architecto iusto ut amet inventore omnis!
   Sed voluptatum atque aliquam eaque dicta excepturi nisi cumque sit omnis! Itaque eveniet reprehenderit blanditiis, voluptatibus numquam eligendi quis vel dolorum, facere corporis quia nesciunt atque tempora officia ab nulla.
   Cumque suscipit tempora similique aperiam ducimus, illo atque fuga delectus. Culpa, numquam ipsa? Non quo libero quaerat, deleniti, blanditiis suscipit expedita eligendi cupiditate nostrum perspiciatis aliquam quas iusto quos optio.
   Nobis debitis reiciendis, suscipit quibusdam illo eligendi laudantium illum ipsam cum numquam amet nostrum esse assumenda. Tempore, consequatur. Sapiente, nam voluptatum! Obcaecati nam voluptates rem at perspiciatis fuga, corporis assumenda!
   Vero nam modi eveniet, ullam eos veritatis facere provident ipsam ab velit,?
   </p>
</div>
<div>
 </div>


</div>
  )
}

export default BlogById