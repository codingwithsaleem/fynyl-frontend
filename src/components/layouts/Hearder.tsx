import React from 'react'
import { BiMenu } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from 'next/link';

const Hearder = () => {
  return (
   <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="bg-[#ffffff] rounded-2xl px-8 py-4 flex items-center justify-between shadow-sm">
            <div className="text-2xl font-bold text-[#8898f0]">fynyl.</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-[#383838] hover:text-[#000000] transition-colors">
                How it work
              </Link>
              <Link href="#" className="text-[#383838] hover:text-[#000000] transition-colors">
                About Us
              </Link>
              <Link href="#" className="text-[#383838] hover:text-[#000000] transition-colors">
                Pricing
              </Link>
              <Link href="#" className="text-[#383838] hover:text-[#000000] transition-colors">
                Contact Us
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/login">
              <Button
                className="hidden md:block rounded-full px-6 py-2 text-white font-medium"
                style={{ backgroundColor: "#8f8deb" }}
              >
                Log In
              </Button>
              </Link>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <BiMenu className="h-6 w-6 text-[#383838]" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-6 mt-8">
                    <div className="text-2xl font-bold text-[#8898f0] mb-8">fynyl.</div>

                    <nav className="flex flex-col space-y-6">
                      <a href="#" className="text-[#383838] hover:text-[#000000] transition-colors text-lg">
                        How it work
                      </a>
                      <a href="#" className="text-[#383838] hover:text-[#000000] transition-colors text-lg">
                        About Us
                      </a>
                      <a href="#" className="text-[#383838] hover:text-[#000000] transition-colors text-lg">
                        Pricing
                      </a>
                      <a href="#" className="text-[#383838] hover:text-[#000000] transition-colors text-lg">
                        Contact Us
                      </a>
                    </nav>

                    <div className="pt-6 border-t">
                      <Button
                        className="w-full rounded-full px-6 py-3 text-white font-medium"
                        style={{ backgroundColor: "#8f8deb" }}
                      >
                        Log In
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Hearder