import { createPortal } from 'react-dom'
import React from 'react'

const Portal = ({
  children,
  wrapperId = 'portal-root',
}: {
  children?: React.ReactNode
  wrapperId?: string
}) => {
  const createWrapperAndAppendToBody = (wrapperId: string) => {
    const wrapperElement = document.createElement('div')
    wrapperElement.setAttribute('id', wrapperId)
    document.body.appendChild(wrapperElement)
    return wrapperElement
  }

  let element = document.getElementById(wrapperId)

  if (!element) element = createWrapperAndAppendToBody(wrapperId)

  return createPortal(children, element)
}

export default Portal
