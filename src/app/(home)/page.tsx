import AboutUsSection from "@/components/home/about-us-section";
import BackgroundWithImage from "@/components/layouts/BackgroundWithImage";
import Hearder from "@/components/layouts/Hearder";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Component() {
  return (
    <>
      <div
        className="min-h-screen relative overflow-hidden font-montserrat"
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
          className="w-[200px] h-auto absolute -left-20 top-1/2 -translate-y-1/2 translate-x-1/2 origin-center hidden lg:block"
        />
        <Hearder />

        {/* Main Content */}
        <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-20 font-montserrat">
          {/* Badge */}
          <div className="flex justify-center mb-12">
            <div className="rounded-full px-8 py-3 text-white font-medium bg-[#8F8DEB]/45 lg:text-2xl font-montserrat">
              10k +Growing Businesses
            </div>
          </div>

          {/* Hero Text */}
          <div className="text-center mb-8">
            <h1 className="text-6xl md:text-7xl font-medium leading-tight mb-6 font-montserrat">
              <span className="text-[#000000]">Create </span>
              <span className="text-white/80">proposals </span>
              <span className="text-[#000000]">that</span>
              <br />
              <span className="text-white/80">Genuinely </span>
              <span className="text-[#000000]">stand out.</span>
            </h1>

            <p className="text-[#383838] text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
              Make your documents shine. Our top-rated solution handles every
              step—from creation to eSigning—with ease.
            </p>

            <Button
              size="lg"
              className="rounded-full md:px-12 md:py-8 text-white font-medium text-lg bg-linear-to-l  from-[#8F8DEB] to-[#6977C5] hover:opacity-90 transition-opacity duration-300"
              // style={{
              //   background: "linear-gradient(90deg, #8F8DEB 0%, #6977C5 100%)",
              //   border: "none",
              // }}
            >
              Get Started
            </Button>
          </div>
        </main>

        {/* Partners Section */}
        <section className="relative z-10 max-w-6xl mx-auto px-6 pb-16">
          <div className="text-center mb-12">
            <h2 className="text-[#000000] text-xl font-semibold underline decoration-2 underline-offset-4">
              Growing Partnership Around The World
            </h2>
          </div>

          <div className="flex items-center justify-center space-x-12 md:space-x-16 opacity-60">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="relative mb-2"
                style={{ width: "120px", aspectRatio: "3 / 1" }}
              >
                <Image
                  src={`/images/home/icon${num}.png`}
                  alt={`Partner ${num}`}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 80px, 120px"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <BackgroundWithImage
        bgImage="/images/home/bghero.png"
        sideImage="/images/home/aboutlogo.png"
        sideImageAlt="About Us Image"
      >
        <AboutUsSection />
      </BackgroundWithImage>
    </>
  );
}
