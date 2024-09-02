import React from 'react'

const SideBar = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center border-r-[1px] border-r-slate-600  ">
     <div className="text-white w-full text-2xl border-b-[1.2px]  border-b-slate-600 h-16  p-4  ">Cluster</div>
    <div className='w-full mt-5 flex flex-col items-center'>
    <img
      className="w-20 h-20 rounded-full mb-4"
      src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/f8239007-7d36-45ce-a0a1-fdf91052b10e/299f5e14-73c4-4a9b-99c9-e44adbc218cf.png"
    />
    <p className="text-white text-xl font-bold mb-2">Samulel Johnson</p>
    <p className="text-white mb-2">UI Designer | Let redesign the world</p>
    <p className="text-white">alisson.rochinski@gmail.com</p>

    </div>

  </div>
  )
}

export default SideBar