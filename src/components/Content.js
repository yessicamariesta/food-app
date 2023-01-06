import React from 'react'
import MealContent from '../MealContent'
import MealCard from '../components/MealCard'
import { ContentContainer } from '../styles/MealCard.styled'

export default function Content() {
  function hideScroll(e) {
    // var lastScrollTop
    var scrollTop = e.target.scrollTop

    if (scrollTop > 20) {
      document.getElementById('meal').style.display = 'none'
      document.getElementById('content').style.transform = 'translateY(-30px)'
    } else {
      document.getElementById('meal').style.display = 'initial'
      document.getElementById('content').style.transform = 'translateY(90px)'
    }

    // if (scrollTop > lastScrollTop) {
    //   document.getElementById('meal').style.top = '300px'
    // } else {
    //   document.getElementById('meal').style.top = '-170px'
    // }

    // lastScrollTop = scrollTop

    // console.log(scrollTop)
  }

  return (
    <>
      <ContentContainer id='content' onScroll={hideScroll}>
        {MealContent.map((item, index) => (
          <MealCard key={index} item={item} />
        ))}
      </ContentContainer>
    </>
  )
}
