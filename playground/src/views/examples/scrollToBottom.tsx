import { useOnScrollToEnd } from '@rocketmakers/armstrong-edge'
import * as React from 'react'

import "./scrollToBottom.scss"

export const ScrollToEnd: React.FC = () =>{
    const ref = React.useRef<HTMLDivElement>()

    const {scrolledToEnd} = useOnScrollToEnd(() => alert('piss'), 100, ref)

    return (
        <div ref={ref} className='scroll-to-end-example' data-done={scrolledToEnd}>

        </div>
    )
}
