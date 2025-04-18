import React from 'react'
import { Link } from 'react-router-dom'

const ProjectItem = ({ id, name, description, association, type, startDate, endDate, budget, currency, image, domain, externalLink }) => {
    return (
        <div>
            <Link className='text-gray-700 cursor-pointer' to={`/projets/${id}`}>
                {/* Card to present Projects */}
                <div className='flex flex-col bg-white border rounded-lg shadow-md hover:shadow-lg h-auto'>
                    {image && (
                        <div className='w-full h-56 overflow-hidden rounded-t-lg'>
                            <img src={image} alt={`${name} image`} className='w-full h-full object-center object-cover' />
                        </div>
                    )}
                    <div className='p-3'>
                        <div className='flex flex-col sm:flex-row items-center mb-2'>
                            <h2 className='text-lg font-semibold'>{name}</h2>
                        </div>
                        <div className='flex flex-col'>
                            {association && <p className='text-sm text-gray-500 mt-2 font-semibold'>Association : {association}</p>}
                            {domain && <p className='text-sm text-gray-500'>Domaine de la mission : <span className='font-bold'>{domain}</span></p>}
                            <p className='text-sm text-gray-500 mt-2'>{description}</p>
                            {(startDate || endDate) && (
                                <p className='text-sm text-gray-500 mt-2'>
                                    {startDate && `Début : ${startDate}`} {endDate && `- Fin : ${endDate}`}
                                </p>
                            )}
                            <p className='text-sm text-gray-500 mt-2'>Type de mission : <span className='font-semibold'>{type}</span></p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProjectItem