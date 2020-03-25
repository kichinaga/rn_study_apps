import React, { FC, Fragment, useState, useEffect } from 'react'
import { Text } from 'react-native'

interface BlinkProps {
  text: string
}

const Blink: FC<BlinkProps> = (blink) => {
  const [isShowing, setShowing] = useState(true)
  
  useEffect(() => {
    isShowing ? console.log('render!') : console.log('unmounted...')
    const timerId = setInterval(() => setShowing(!isShowing), 1000)

    return () => clearInterval(timerId);
  }, [isShowing])

  return (
    <Fragment>
      { isShowing && (<Text>{blink.text}</Text>) }
    </Fragment>
  )
}

export default Blink