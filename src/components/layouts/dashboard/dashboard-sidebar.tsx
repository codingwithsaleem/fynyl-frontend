"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { Home, FileText, Files, User, Users, MessageCircle, HelpCircle, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import LogoSvg from "@/utils/svgs/LogoSvg"

const sidebarItems = [
  { icon: Home, label: "Dashboard", href: "/sender" },
  { icon: FileText, label: "Create Contract", href: "/sender/create-contract" },
  { icon: Files, label: "Contracts", href: "/sender/contracts" },
  { icon: User, label: "Account Information", href: "/sender/account-information" },
  { icon: Users, label: "Contacts", href: "/sender/contacts" },
  { icon: MessageCircle, label: "Contact Us", href: "/sender/contact-us" },
  { icon: HelpCircle, label: "Help", href: "/sender/help" },
]

export default function DashboardSidebar() {
  const pathname = usePathname()
  const { state } = useSidebar()
  
  // Check if current path is dashboard or if we're on the main sender page
  const isActive = (href: string) => {
    if (href === "/sender") {
      return pathname === "/sender" || pathname === "/dashboard/sender" || pathname.endsWith("/sender")
    }
    return pathname === href || pathname === `/dashboard${href}`
  }

  return (
    <Sidebar collapsible="offcanvas" className="border-r-0 bg-[#f8f9ff]">
    <SidebarHeader className="border-b-1 p-6 bg-white">
      <div className="flex items-center">
        {state === "expanded" && (
        //   <h2 className="text-2xl font-bold">fynyl.</h2>
        <LogoSvg  />
        )}
      </div>
    </SidebarHeader>

      <SidebarContent className="bg-[#f8f9ff] py-10">
        <SidebarMenu className="space-y-0 gap-0">
          {sidebarItems.map((item) => {
            const active = isActive(item.href)
            return (
              <SidebarMenuItem key={item.label} className="rounded-none">
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "py-6 lg:py-10 h-14 text-[#64748b] hover:bg-[#8898f0]/10 hover:text-[#8898f0] transition-all duration-200 border-b border-[#e5e7eb] rounded-none",
                    active && "bg-[#8898f0]/10"
                  )}
                >
                <Link href={`/dashboard${item.href}`} className="flex items-center space-x-4 px-4 md:px-8">
                    <item.icon
                        className="h-10 w-10 shrink-0"
                        color={active ? "#8898f0" : "#64748b"}
                    />
                    <span
                        className={cn(
                            "font-medium text-base",
                            active && "font-bold text-black"
                        )}
                    >
                        {item.label}
                    </span>
                </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-0">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              asChild 
              className="rounded-none text-white hover:bg-[#7c86e8] transition-all duration-200 bg-[#8898f0] h-17"
            >
              <Link href="/" className="flex items-center space-x-4 px-4">
                <LogOut className="h-4 w-5 shrink-0" />
                <span className="font-medium text-base">Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
