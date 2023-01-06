import React, { useEffect, useRef } from 'react'
import {
  StyledCalendarCard,
  CalendarCardContainer,
} from '../styles/CalendarCard.styled'
import { useGlobalContext } from '../context'

export default function CalendarCard({ item: { id, day, date } }) {
  const { value, setValue } = useGlobalContext()

  return (
    <StyledCalendarCard>
      <CalendarCardContainer
        className={
          day === 'SAB' || day === 'MIN' ? 'grey' : id === value ? 'active' : ''
        }
        onClick={() => setValue(id)}
      >
        <p>{day}</p>
        <h4>{date}</h4>
      </CalendarCardContainer>
    </StyledCalendarCard>
  )
}
