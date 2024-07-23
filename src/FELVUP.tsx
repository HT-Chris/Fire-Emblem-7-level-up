import { CharacterSelect } from './components/CharacterSelect'
import { CharacterPage } from './components/CharacterPage'
import { CharacterContextProvider, initialUnitProps } from './components/CharacterContext'
import {Routes, Route} from 'react-router-dom'
import './FELVUP.css'
import React from 'react'


export const FELVUP = () => {



  return (
    <>
    <CharacterContextProvider>

    <Routes>
      <Route path='/' element={<CharacterSelect /> }/>
      <Route path='/FELVUP/unit/:id' element={<CharacterPage unit={initialUnitProps}/>}/>
     
    </Routes>
    </CharacterContextProvider>
    </>
  )
}


