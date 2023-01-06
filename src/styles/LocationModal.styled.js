import styled from 'styled-components'

export const LocationModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 368px;
  padding: 5px 20px 20px;
  border-radius: 5px;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
  background-color: #fff;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.5s ease-in-out;
  pointer-events: none;

  &.show-modal {
    opacity: 1;
    transform: translateY(0);
    pointer-events: visible;
  }

  & > p:first-child {
    text-align: right;
    color: ${({ theme }) => theme.colors.mainText};
    cursor: pointer;
  }

  & > p:nth-child(2) {
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.mainText};
  }
`

export const Form = styled.form`
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 20px;
  line-height: 0;

  & > p {
    text-align: center;
    margin-right: 20px;
    color: ${({ theme }) => theme.colors.addButton};
  }

  & > input {
    border: none;
    font-family: inherit;
    font-size: 16px;
  }

  & > input:focus {
    outline: none;
  }
`

export const LocationInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 0.4;

  & > p {
    margin-left: 5px;
    margin-right: 15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-align: center;
    background-color: ${({ theme }) => theme.colors.border};
  }

  & > p > svg {
    transform: translateY(5px);
    color: ${({ theme }) => theme.colors.subText};
  }
`

export const LocationInfo = styled.div`
  cursor: pointer;

  & > p:first-child {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.mainText};
  }

  & > p:nth-child(2) {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.subText};
  }
`
