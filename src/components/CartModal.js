import React from 'react'
import { AiOutlineRight, AiOutlineShoppingCart } from 'react-icons/ai'
import {
  ModalContainer,
  ModalInfo,
  ModalIcons,
} from '../styles/CartModal.styled'

export default function CartModal() {
  return (
    <ModalContainer>
      <ModalInfo>
        <p>5 items | Rp. 125.000</p>
        <p>Termasuk ongkos kirim</p>
      </ModalInfo>

      <ModalIcons>
        <span>
          <AiOutlineShoppingCart />
        </span>
        <span>
          <AiOutlineRight />
        </span>
      </ModalIcons>
    </ModalContainer>
  )
}
