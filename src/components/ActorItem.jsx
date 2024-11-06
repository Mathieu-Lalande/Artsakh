import React from 'react'
import { Link } from 'react-router-dom'

const ActorItem = ({ id, name, description, country, type, establishedDate, website, logo, status }) => {
    return (
        <div>
            <Link className='text-gray-700 cursor-pointer' to={`/acteurs/${id}`}>
                {/* Card to present actors */}
                <div className='flex flex-col bg-white py-6 px-3 rounded-lg shadow-lg h-auto'>
                    <div className='flex flex-col sm:flex-row items-center mb-4'>
                        {logo && <img src={logo} alt={`${name} logo`} className='w-16 h-auto mb-4 sm:mb-0' />}
                        <h2 className='ml-2 text-lg font-semibold'>{name}</h2>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-sm text-gray-500 font-semibold'>{country}</p>
                        <p className='text-sm text-gray-500'>{type}</p>
                        <p className='text-sm text-gray-500 mt-2'>{description}</p>
                        {establishedDate && <p className='text-sm text-gray-500 mt-2 font-semibold'>Depuis: {establishedDate}</p>}
                        <p className='text-sm text-gray-500 mt-2'>{website}</p>
                        {status && (
                            <p className='text-sm text-gray-500 mt-2'>Statut de la mission : <span className={`text-sm font-semibold mt-2 ${status === 'En cours' ? 'text-yellow-500' : 'text-green-500'}`}>
                                    {status}
                                </span>
                            </p>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ActorItem