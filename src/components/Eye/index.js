import React from 'react'
import PngIcon from '../PngIcon'

const Eye = props => {
  const {type, handleClick} = props
  const icon = type === 'text' ? 'eye' : 'eye_close'
  return (
    <PngIcon handleClick={handleClick} icon={icon} />
  )
}

export default Eye