import {useState} from 'react'

import {CustomContainer, Para, Button} from './styledComponents'

const Unlock = () => {
  const [current, setCurrent] = useState(false)

  const onClickChange = () => {
    setCurrent(prevState => !prevState)
  }

  const imgurl = current
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altText = current ? 'unlock' : 'lock'
  const text = current ? 'Unlocked' : 'Locked'
  const buttonText = current ? 'Lock' : 'Unlock'

  return (
    <CustomContainer>
      <img src={imgurl} alt={altText} />
      <Para>Your Device is {text}</Para>

      <Button type="button" onClick={onClickChange}>
        {buttonText}
      </Button>
    </CustomContainer>
  )
}
export default Unlock
