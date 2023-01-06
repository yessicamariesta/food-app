import styled from 'styled-components'

export const LocationModalContainer = styled.div`
  position: relative;
  display: flex;s
  align-items: center;
  justify-content: flex-start;
  padding: 0 15px;

  svg:first-child {
    transform: translateY(30px);
    font-size: 20px;
  }
`

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 12px;
  margin-left: 20px;

  & > p {
    color: ${({ theme }) => theme.colors.subText};
    font-weight: 600;
  }
`

export const TokopediaBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 20px;
  transform: translateY(-30px);
  cursor: pointer;

  p {
    margin-right: 10px;
  }

  svg {
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.addButton};
  }
`

export const CalendarContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  cursor: pointer;
  padding: 0 10px;
  transform: translateY(-30px);

  &::-webkit-scrollbar {
    width: 0;
  }

  &.overlay {
    opacity: 0.4;
  }
`

export const Meal = styled.div`
  position: absolute;
  top: 170px;
  width: 100%;
`

export const MealContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0;
  align-items: center;
  justify-content: space-around;
  margin: 0 15px;
  border-radius: 5px;
  line-height: 0;
  cursor: pointer;
  transform: translateY(-30px);
  color: ${({ theme }) => theme.colors.border};
  overflow: hidden;

  &.overlay {
    opacity: 0.4;
  }

  & > div.active {
    text-align: center;
    width: 1fr;
    background-color: ${({ theme }) => theme.colors.mainText};
    border: none;
    height: 100%;
  }

  & > div {
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.border};
  }

  &.overlay > div {
    border: 1px solid ${({ theme }) => theme.colors.subText};
  }

  &.hidden {
    display: none;
  }
`
