import React from 'react'

const Title = ({title,subTitle,align,font}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align==="left" && "md:items-start md:text-left"}`}>
      <h2 className={`text-4xl text-[#49B9FF]/50 md:text-[40px] ${font || 'font-nunito'}`}>
        {title}
      </h2>
      <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>{subTitle}</p>
    </div>
  )
}

export default Title
