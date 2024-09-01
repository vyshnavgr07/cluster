import React from 'react'

const Button = ({value,handleClick}) => {
  return (
    <div>
<button class=" text-white mt-3  py-2 px-4 font-bold" onClick={handleClick}>
{value}
</button>
</div>
  )
}

export default Button