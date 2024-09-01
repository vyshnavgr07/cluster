import React from 'react'

const ProfileHeader = ({name,image}) => {
  return (
<div className='w-full  shadow-md flex p-2 rounded-xl '>
<img className='w-14 h-14 ml-2 rounded-full' src={image}/>
<p className='ml-2 text-2xl text-white flex items-center justify-center'>{name}</p>
</div>
  )
}

export default ProfileHeader