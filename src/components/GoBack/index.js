import React from 'react'
import {Icon} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

const GoBack = props => {
  const back = () => {
    props.history.goBack()
  }
  return (
    <Icon size='lg' color={props.color || '#7486FC'} type="left" onClick={back} />
  )
}

export default withRouter(GoBack)