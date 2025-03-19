"use client"
import { ReactLenis} from 'lenis/react'

function SmoothScroll({children}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <ReactLenis root options={{
        lerp:0.1,
        duration: 1.5,
    }}>
      { children }
    </ReactLenis>
  )
}
export default SmoothScroll