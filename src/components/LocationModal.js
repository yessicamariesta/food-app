import React, { useRef } from 'react'
import { BsXLg } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import {
  LocationModalContainer,
  LocationInfoContainer,
  LocationInfo,
  Form,
} from '../styles/LocationModal.styled'
import { useGlobalContext } from '../context'
import LocationContent from '../LocationContent'

export default function LocationModal() {
  const { closeModal, searchTerm, setSearchTerm, isModalOpen } =
    useGlobalContext()
  const searchValue = useRef('')

  function searchLocation() {
    setSearchTerm(searchValue.current.value)
  }

  return (
    <LocationModalContainer className={isModalOpen && 'show-modal'}>
      <p onClick={() => closeModal()}>
        <BsXLg />
      </p>
      <p>Cek makanan yang tersedia di lokasi kamu!</p>
      <Form spellCheck='false'>
        <p>
          <IoLocationSharp />
        </p>
        <input type='text' ref={searchValue} onChange={searchLocation} />
      </Form>

      {searchTerm.length > 3 &&
        LocationContent.map((item) => (
          <LocationInfoContainer>
            <p>
              <IoLocationSharp />
            </p>
            <LocationInfo>
              <p>{item.name}</p>
              <p>{item.address}</p>
            </LocationInfo>
          </LocationInfoContainer>
        ))}
    </LocationModalContainer>
  )
}
