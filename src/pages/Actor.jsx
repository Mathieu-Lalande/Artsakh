import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from '../context/Context';

const Actor = () => {

  const { actorId } = useParams();
  const { acteurs } = useContext(Context);
  const [actorData, setActorData] = useState(false);

  const fetchActorData = async () => {

    acteurs.map((item) => {
      if (item._id === actorId) {
        setActorData(item)
        return null;
      }
      return null;
    })
  }

  useEffect(() => {
    fetchActorData();
  }, [actorId, acteurs])
  
  return actorData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex justify-between items-center mb-10 sm:mb-0">
        <div className='flex flex-col sm:flex-row items-center mb-4'>
          <img src={actorData.logo} alt={`${actorData.name} logo`} className='w-44 h-auto mr-4 mb-4 sm:mb-0' />
        </div>
        <h2 className='text-lg font-semibold'>{actorData.name}</h2>
        <button onClick={() => window.history.back()} className="border px-4 py-2 rounded transition duration-300">
          Retour
        </button>
      </div>
      {/* Actor Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row pt-4">
        {/* Actor Infos */}
        <div className="flex-1">
          {!Array.isArray(actorData.type) || !actorData.type.includes('Collectivité territoriale') ? (
            <p className="mt-5 text-gray-500 md:w-4/5">
              Domaine d'activité : {Array.isArray(actorData.domain) ? actorData.domain.join(', ') : actorData.domain}
            </p>
          ) : null}
          <p className="mt-5 text-3xl font-medium">
            {actorData.type}
            {!Array.isArray(actorData.type) || !actorData.type.includes('Collectivité territoriale') ? ` depuis ${actorData.establishedDate}` : ''}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            Dirigeant : {actorData.dirigeant}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {actorData.description}
          </p>
          {!Array.isArray(actorData.type) || !actorData.type.includes('Association') ? (
            <p className="mt-5 text-gray-500 md:w-4/5">
              Contact : {actorData.contact}
            </p>
          ) : null}
          <p className="mt-2 text-gray-500 md:w-4/5">
            Email : <a href={`mailto:${actorData.email}`} className="text-blue-500">{actorData.email}</a>
          </p>
          <p className="mt-2 text-gray-500 md:w-4/5">
            Téléphone : {actorData.telephone}
          </p>
          <hr className="my-4 sm:w-4/5" />
          <div className="flex">
            <a href={actorData.website} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              <span className="text-gray-500">Site Web - {actorData.name}: </span>{actorData.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1>Chargement...</h1>
    </div>
  )
}

export default Actor