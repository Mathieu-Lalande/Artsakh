import React from 'react';
import { Link } from 'react-router-dom';

const InfoRow = ({ label, value, isLink }) => {
    if (!value) return null;
    return (
        <p className='text-sm text-gray-500 mt-2'>
            {label}: {isLink ? (
                <span className='text-blue-500 underline'>{value}</span>
            ) : (
                <span className='font-semibold'>{value}</span>
            )}
        </p>
    );
};

const ActorItem = ({ id, name, description, domain, type, establishedDate, logo, dirigeant, email, contact, website, telephone }) => {
    const isCollectiviteTerritoriale = Array.isArray(type) && type.includes('Collectivité territoriale');
    const isAssociation = Array.isArray(type) && type.includes('Association');

    return (
        <div>
            <div className='text-gray-700'>
                {/* Card to present actors */}
                <Link to={`/acteurs/${id}`}>
                    <div className='flex flex-col bg-white py-6 px-3 border rounded-lg shadow-md hover:shadow-lg h-auto'>
                        <div className='flex flex-col sm:flex-row items-center mb-4'>
                            {logo && <img src={logo} alt={`${name} logo`} className='w-16 h-auto mb-4 sm:mb-0' />}
                            <h2 className='ml-2 text-lg font-semibold cursor-pointer'>{name}</h2>
                        </div>
                        <div className='flex flex-col'>
                            <InfoRow label="Type " value={Array.isArray(type) ? type.join(', ') : type} />
                            <InfoRow label="Domaine d'activité" value={Array.isArray(domain) ? domain.join(', ') : domain} />
                            {!isCollectiviteTerritoriale && (
                                <>
                                    <InfoRow label="Dirigeant(e) " value={dirigeant} />
                                </>
                            )}
                            {!isAssociation && (
                                <InfoRow label="Contact" value={contact} />
                            )}
                            <InfoRow label="Email " value={email} />
                            <InfoRow label="Téléphone " value={telephone} />
                            <InfoRow label="Site internet " value={website} isLink={false} />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ActorItem;