import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  line-height: 0;
  border-radius: 5px;
  transform: translateY(-10px);
  background-color: ${({ theme }) => theme.colors.cartButton};
  color: #fff;
`

export const ModalInfo = styled.div`
  & > p:first-child {
    font-weight: bold;
  }

  & > p:nth-child(2) {
    font-size: 12px;
  }
`

export const ModalIcons = styled.div`
  font-size: 20px;
  cursor: pointer;
`
