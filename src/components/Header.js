import React, { useEffect, useState } from 'react'
import { BsChevronDown, BsArrowLeft } from 'react-icons/bs'
import {
  LocationModalContainer,
  LocationContainer,
  TokopediaBox,
  CalendarContainer,
  MealContainer,
  Meal,
} from '../styles/Header.styled'
import CalendarContent from '../CalendarContent'
import CalendarCard from './CalendarCard'
import { useGlobalContext } from '../context'

export default function Header() {
  const { openModal, activeMeal, mealIsActive, isModalOpen } =
    useGlobalContext()

  return (
    <>
      <LocationModalContainer>
        <BsArrowLeft />
        <LocationContainer>
          <p>alamat pengantaran</p>
          <TokopediaBox onClick={() => openModal()}>
            <p>tokopedia tower</p>
            <BsChevronDown />
          </TokopediaBox>
        </LocationContainer>
      </LocationModalContainer>

      <CalendarContainer className={isModalOpen && 'overlay'}>
        {CalendarContent.map((item, index) => (
          <CalendarCard key={index} item={item} />
        ))}
      </CalendarContainer>

      <Meal id='meal'>
        <MealContainer className={isModalOpen && 'overlay'}>
          <div
            className={mealIsActive === 'lunch' ? 'active' : ''}
            onClick={() => activeMeal('lunch')}
          >
            <h4>Lunch</h4>
          </div>

          <div
            className={mealIsActive === 'dinner' ? 'active' : ''}
            onClick={() => activeMeal('dinner')}
          >
            <h4>Dinner</h4>
          </div>
        </MealContainer>

        <h3>Kamis, 13 Maret 2019</h3>
      </Meal>
    </>
  )
}
