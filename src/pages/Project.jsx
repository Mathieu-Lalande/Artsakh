import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from '../context/Context';

const Project = () => {

  const { projectId } = useParams();
  const { projets } = useContext(Context);
  const [projectData, setProjectData] = useState(false);

  const fetchProjectData = async () => {
    projets.map((item) => {
      if (item._id === projectId) {
        setProjectData(item)
        return null;
      }
      return null;
    })
  }

  useEffect(() => {
    fetchProjectData();
  }, [projectId, projets])
  
  const handleContributeClick = () => {
    window.location.href = '/messagerie';
  };

  return projectData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex justify-between items-center pb-4">
        <h2 className='text-xl font-semibold'>{projectData.name}</h2>
        <button onClick={() => window.history.back()} className="border px-4 py-2 rounded transition duration-300">
          Retour
        </button>
      </div>
      <div className="flex flex-col sm:flex-row items-start mb-10 sm:mb-0">
        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-8">
          <img src={projectData.image} alt={`${projectData.name} logo`} className='w-[30vw] h-auto' />
        </div>
        <div className="flex-1">
          <p className="mt-5 text-gray-500 md:w-4/5">
            Association : {projectData.association}
          </p>
          <p className="mt-5 text-xl font-medium">
            {projectData.type} depuis le {new Date(projectData.startDate).toLocaleDateString()} jusqu'à {new Date(projectData.endDate).toLocaleDateString()}.
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {projectData.description}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            Domaine de la mission : {projectData.domain}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            Budget: {projectData.currency}{projectData.budget}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            Lien vers l'article : <a href={projectData.externalLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{projectData.externalLink}</a>
          </p>
          <hr className="mt-8 sm:w-4/5" />
          <button onClick={handleContributeClick} className="mt-5 border px-4 py-2 rounded transition duration-300">
            Contacter
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1>Chargement...</h1>
    </div>
  )
}

export default Project;