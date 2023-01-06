import React from 'react'
import {
  AddButton,
  MealCardContainer,
  RatingWrapper,
  MealInfoWrapper,
  AddButtonWrapper,
} from '../styles/MealCard.styled'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

import { GoPlus } from 'react-icons/go'

import { useGlobalContext } from '../context'

export default function MealCard({
  item: { id, img, name, rating, star, author, price },
}) {
  const generateStars = (param) => {
    if (param % 1 !== 0) {
      return (
        <>
          {[...Array(Math.floor(param))].map((item, idx) => (
            <BsStarFill key={idx}></BsStarFill>
          ))}
          <BsStarHalf></BsStarHalf>
        </>
      )
    }
    return [...Array(param)].map((item, idx) => (
      <BsStarFill key={idx}></BsStarFill>
    ))
  }

  const { openCart, isModalOpen } = useGlobalContext()

  return (
    <MealCardContainer className={isModalOpen && 'overlay'}>
      <div>
        <img src={img} alt={name} />
        <RatingWrapper>
          <h4>{rating}</h4>
          <div>{generateStars(rating)}</div>
        </RatingWrapper>
        <MealInfoWrapper>
          <p>{name}</p>
          <p>{author}</p>
        </MealInfoWrapper>
        <AddButtonWrapper>
          <p>{price}</p>
          <AddButton onClick={() => openCart()}>
            add <GoPlus />
          </AddButton>
        </AddButtonWrapper>
      </div>
    </MealCardContainer>
  )
}
