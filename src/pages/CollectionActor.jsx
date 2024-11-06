import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ActorItem from '../components/ActorItem';

const CollectionActor = () => {

  const { acteurs, search, showSearch } = useContext(Context);
  const [showFilter, setShowFilter] = useState(false)
  const [filterActors, setFilterActors] = useState(acteurs)
  const [sortTypeActor, setSortTypeActor] = useState([])
  const [sortPays, setSortPays] = useState([])
  const [sortStatus, setsortStatus] = useState('')

  const toggleType = (e) => {
    if (sortTypeActor.includes(e.target.value)) {
      setSortTypeActor(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSortTypeActor(prev => [...prev, e.target.value])
    }
  }

  const togglePays = (e) => {
    if (sortPays.includes(e.target.value)) {
      setSortPays(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSortPays(prev => [...prev, e.target.value])
    }
  }

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  const applyFilter = () => {
    let actorsCopy = acteurs.slice();

    if (sortTypeActor.length > 0) {
      actorsCopy = actorsCopy.filter(item => sortTypeActor.includes(item.type))
    }

    if (sortPays.length > 0) {
      actorsCopy = actorsCopy.filter(item => sortPays.includes(item.country))
    }

    if (sortStatus === 'en-cours') {
      actorsCopy = actorsCopy.filter(item => item.status === 'En cours');
    } else if (sortStatus === 'termine') {
      actorsCopy = actorsCopy.filter(item => item.status === 'Terminé');
    }

    if (showSearch && search) {
      actorsCopy = actorsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    setFilterActors(actorsCopy)
  }

  useEffect(() => {
    applyFilter();
  }, [sortTypeActor, sortPays, sortStatus, search, showSearch])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/** Filtres gauche */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filtres
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/** Filtre par Pays */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>PAYS</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'France'} onChange={togglePays} /> France
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Arménie'} onChange={togglePays} /> Arménie
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Monde'} onChange={togglePays} /> Monde
            </p>
          </div>
        </div>
        {/** Filtre par Type */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE D'ORGANISATION</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Non-governmental Organization'} onChange={toggleType} /> Non Gouvernementale
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Governmental Association'} onChange={toggleType} /> Gouvernementale
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Association'} onChange={toggleType} /> Association
            </p>
          </div>
        </div>
      </div>

      {/** Filtre droite */}
      <div className='flex-1 '>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1='Tous nos ' text2='Acteurs Humanitaires' />
          {/** Trier par année */}
          <select onChange={(e) => setsortStatus(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value=''>Trier par : Tous</option>
            <option value='en-cours'>Trier par : En cours</option>
            <option value='termine'>Trier par : Terminé</option>
          </select>
        </div>

        {/** Liste des acteurs */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterActors.map((item, index) => (
              <ActorItem 
                key={index} 
                id={item._id} 
                name={item.name} 
                country={item.country} 
                type={item.type} 
                description={truncateDescription(item.description, 115)} 
                logo={item.logo} 
                establishedDate={item.establishedDate} 
                status={item.status} 
              />
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default CollectionActor