import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <Container>
        <div className="flex gap-6 items-center justify-center min-h-screen">
          <div className="space-y-6 w-full">
            <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-6 font-montserrat">
              <span className="text-[#8898f0]">About Us &#45; Fynlyze</span>
            </h2>
            <p className="text-[#383838] leading-relaxed md:text-lg">
              Fynlyze was built for independent professionals&#44; creatives&#44; and
              service providers who need real protection without all the legal
              noise. Whether you&#39;re managing bookings&#44; side gigs&#44; or full&#45;time
              clients&#44; you deserve contracts that match how you actually work.
            </p>
            <p className="text-[#383838] leading-relaxed md:text-lg">
              We make it easy to create clear, customized agreements using smart
              prompts and industry-specific protections &#8212; no legal background
              required. Just straightforward support, built with your business
              in mind. Protect your paper. Secure your hustle. That&#8217;s Fynlyze.
            </p>
            <p className="text-[#383838] leading-relaxed md:text-lg">
                Protect your paper. Secure your hustle. That&#8217;s Fynlyze.
            </p>
          </div>
          <div>
            <Image
              src="/images/home/aboutus1.png"
              alt="Woman with phone - FyNyL Always On"
              width={400}
              height={400}
              className="object-cover w-4xl h-full"
            />
          </div>
        </div>
    </Container>
  );
};

export default page;
