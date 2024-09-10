import React from 'react'

const PostModal = () => {
  return (
    <dialog id="my_modal_1" className="modal w-1/2 h-3/4 rounded-none p-0">
      <div className="modal-box h-full w-full bg-orange-600 p-0 m-0">
        <div className="bg-white p-4 rounded-lg shadow-lg mx-auto h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-bold text-lg">Vyshnav GR</h3>
                <p className="text-sm text-gray-500">Post to Anyone</p>
              </div>  
            </div>
            <button 
              className="text-gray-500 hover:text-gray-700" 
              onClick={() => document.getElementById('my_modal_1').close()}
            >
              ✕
            </button>
          </div>
          
          <textarea 
            className="w-full flex-grow p-2 border rounded-md resize-none" 
            placeholder="What do you want to talk about?"
          ></textarea>
          
          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-2">
              <button className="p-2 text-gray-500 hover:text-gray-700">📷</button>
              <button className="p-2 text-gray-500 hover:text-gray-700">📅</button>
              <button className="p-2 text-gray-500 hover:text-gray-700">🖨️</button>
              <button className="p-2 text-gray-500 hover:text-gray-700">➕</button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">🕒</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default PostModal
