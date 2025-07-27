import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";

export default function Component() {
  return (
    <>
      <div>
        {/* Main Content */}
        <main className="relative z-10  mx-auto px-6 font-montserrat flex justify-center items-center gap-4 py-10">
          {/* Hero Text */}
          <div className=" mb-8">
            <h1 className="text-6xl md:text-7xl font-medium leading-tight mb-6 font-montserrat">
              <span className="text-[#000000]">Protect </span>
              <span className="text-white/80">your </span>
              <br />
              <span className="text-white/80">paper. Secure </span>
              <br />
              <span className="text-[#000000]">your Hustle. </span>
            </h1>

            <div className="text-[#000000] text-lg md:text-xl mb-8">
              <div className="flex gap-8 items-center">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CircleCheck size={20} />
                    No Nonsense
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck size={20} />
                    Secure
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CircleCheck size={20} />
                    confidential
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck size={20} />
                    no confusion,
                  </li>
                </ul>
              </div>
            </div>

            <Button
              size="lg"
              className="rounded-full md:px-12 md:py-8 text-white font-medium text-lg bg-linear-to-l  from-[#8F8DEB] to-[#6977C5] hover:opacity-90 transition-opacity duration-300"
            >
              Get Started
            </Button>
          </div>
            <div>
            <video
              src="/videos/hero-section.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg shadow-lg max-w-full h-auto"
              style={{ maxHeight: 400 }}
            />
            </div>
        </main>
      </div>
    </>
  );
}
