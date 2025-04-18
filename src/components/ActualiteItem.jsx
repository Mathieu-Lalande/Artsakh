import React from 'react'
import { Link } from 'react-router-dom'

const ActualiteItem = ({ title, subtitle, date, image, video, lien }) => {
    const [showFullSubtitle, setShowFullSubtitle] = React.useState(false);

    return (
        <div>
            {/* Card to present Actualites */}
            <div className='flex flex-col bg-white border rounded-lg shadow-md hover:shadow-lg h-auto'>
                {video ? (
                    <div className='overflow-hidden rounded-t-lg'>
                        <video controls className='aspect-video'>
                            <source src={video} type="video/mp4" />
                            Votre navigateur ne supporte pas la lecture de vidéos.
                        </video>
                    </div>
                ) : (
                    image && (
                        <div className='w-full h-64 overflow-hidden rounded-t-lg'>
                            <img src={image} alt={`${title} image`} className='w-full h-full object-cover object-center' />
                        </div>
                    )
                )}
                <div className='px-4'>
                    <div className='flex flex-col sm:flex-row items-center mt-2'>
                        <h2 className='text-xl font-semibold'>{title}</h2>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <p className='text-base text-gray-500 font-semibold mt-2'>
                            {showFullSubtitle ? subtitle : (subtitle.length > 200 ? `${subtitle.substring(0, 200)}...` : subtitle)}
                        </p>
                        {subtitle.length > 200 && (
                            <button
                                onClick={() => setShowFullSubtitle(!showFullSubtitle)}
                                className='text-blue-500 hover:underline mt-2 self-start'
                            >
                                {showFullSubtitle ? 'Lire moins' : 'Lire tout'}
                            </button>
                        )}
                    </div>
                </div>

                {lien !== "#" && (
                    <div className='flex justify-end -mt-5'>
                        <Link
                            to={lien}
                            target='_blank'
                            className='text-white hover:underline py-2 px-4 rounded-tl-lg rounded-br-lg blue-gradient_bg'
                            onClick={(e) => e.stopPropagation()}
                        >
                            Lire l'article
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ActualiteItem