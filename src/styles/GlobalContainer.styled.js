import styled from 'styled-components'

export const GlobalContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 370px;
  height: 100vh;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
  overflow: hidden;

  &.modal-overlay {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }

  h3 {
    padding: 0 15px;
    transform: translateY(-20px);
    color: ${({ theme }) => theme.colors.mainText};
  }

  h3.hidden {
    display: none;
  }
`
