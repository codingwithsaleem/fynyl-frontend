import Image from 'next/image'
import React, { ReactNode } from 'react'

interface BackgroundWithImageProps {
  children: ReactNode
  bgImage: string
  sideImage: string
  sideImageAlt?: string
  sideImageClassName?: string
}

const BackgroundWithImage = ({
  children,
  bgImage,
  sideImage,
  sideImageAlt = 'Side Image',
  sideImageClassName = "w-[200px] h-auto absolute -left-20 top-1/2 -translate-y-1/2 translate-x-1/2 origin-center"
}: BackgroundWithImageProps) => {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        src={sideImage}
        alt={sideImageAlt}
        width={500}
        height={500}
        className={sideImageClassName}
      />
      {children}
    </div>
  )
}

export default BackgroundWithImage