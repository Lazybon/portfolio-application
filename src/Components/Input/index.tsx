import React from 'react'
import styled from '@emotion/styled'
import { FiPlus } from 'react-icons/fi'

export type InputProps = {
  control?: React.ReactNode
}

const BaseInput = styled.div(({ theme: { palette, utils } }) => ({
  width: '100%',
  overflowX: 'hidden',
  '& > svg': {
    paddingRight: utils.getModule(1),
  },
}))

const Input = ({ control }: InputProps) => {
  return (
    <BaseInput>
      {control}
      <input type="text" />
    </BaseInput>
  )
}

export default Input
