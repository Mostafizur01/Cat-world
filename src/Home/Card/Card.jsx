import React from 'react'
import cardData from './Card'

function Card() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {cardData.map((item, index) => (
                <div className="bg-white flex flex-col justify-between text-black rounded-lg overflow-hidden shadow-md">
                    {item.url && (
                        <img src={item.url} alt={item.title || 'Card image'} className="w-full h-48 object-cover" />
                    )}
                    <div className="p-4">
                        {item.title && (
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        )}
                        {item.p && (
                            <p className="text-sm text-gray-700 leading-relaxed">{item.p}</p>
                        )}
                        
                    </div>
                    <button className=' w-70 mx-[15%] my-20 bg-amber-400 hover:bg-amber-800 text-white font-bold px-10 py-3 text-2xl mt-5 cursor-pointer'>READ MORE</button>
                </div>
            ))}
        </div>
    )
}

export default Card