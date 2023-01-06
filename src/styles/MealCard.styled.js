import styled from 'styled-components'

export const ContentContainer = styled.div`
  height: calc(100vh - 150px);
  overflow-x: hidden;
  overflow-y: scroll;
  transform: translateY(90px);

  &::-webkit-scrollbar {
    width: 0;
  }
`

export const MealCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  margin-bottom: 30px;

  &.overlay {
    opacity: 0.4;
  }

  & > div {
    // border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
  }
`

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;

  & > h4 {
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.subText};
  }

  & > div {
    display: flex;
    color: ${({ theme }) => theme.colors.addButton};
  }
`

export const MealInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  & > p:first-child {
    text-transform: capitalize;
    text-align: start;
    padding-left: 0;
    line-height: 0.8;
    color: ${({ theme }) => theme.colors.mainText};
    font-size: 20px;
    font-weight: bold;
  }

  & > p {
    margin-top: 0;
    line-height: 0;
    font-size: 14px;
    transform: translateY(-10px);
    color: ${({ theme }) => theme.colors.subText};
    font-weight: 500;
  }
`

export const AddButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translateY(-20px);
  padding: 0 20px;

  & > p {
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.mainText};
  }
`

export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.addButton};
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.border};
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
`
