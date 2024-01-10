import React from "react";

export default function Hotel(props)
{
    return(
        <div>
            <div className='border-2 shadow-xl mx-3 p-2  rounded-ee-3xl'><img src={props.imgUrl} alt='hotel1' className='w-200 h-300'></img>
            <div><p className='text-lg'><b>{props.name}</b></p><p>{props.address}</p><div className='flex'><div className='bg-blue-400 w-7 rounded-lg px-1 '>{props.rating}</div><div className='mx-1'>{props.review}</div></div></div>
            </div> 
        </div>
    );
}
