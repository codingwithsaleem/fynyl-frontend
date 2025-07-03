import Image from 'next/image'
import React, { ReactNode } from 'react'

const BackgroundWithImage = ({ children }: { children: ReactNode }) => {
  return (
    <div
          className="min-h-screen relative overflow-hidden"
          style={{
            backgroundImage: "url('/images/home/bghero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Large background text */}
          <Image
            src="/images/home/herologo.png"
            alt="Background Text"
            width={500}
            height={500}
            className="w-[200px] h-auto absolute -left-20 top-1/2 -translate-y-1/2 translate-x-1/2 origin-center"
          />
          
          {children}
        </div>
  )
}

export default BackgroundWithImage