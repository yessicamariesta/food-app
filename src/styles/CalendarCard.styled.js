import styled from 'styled-components'

export const StyledCalendarCard = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CalendarCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  justify-content: center;
  // border: 1px solid black;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  &.grey {
    color: ${({ theme }) => theme.colors.icon};
    pointer-events: none;
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.subText};
    color: #fff;
  }

  & > h4,
  p {
    line-height: 0;
  }

  & > p {
    padding-top: 20px;
    font-size: 12px;
  }

  & > h4 {
    transform: translateY(-15px);
  }
`
