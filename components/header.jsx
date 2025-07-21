import React from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
  Sparkles,
} from "lucide-react";

import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";

export default async function Header() {
  await checkUser();

  return (
    <header className="fixed top-0 w-full z-50 border-b border-slate-700/50 bg-slate-900/95 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-900/80">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/">
          <div className="flex items-center space-x-3 mt-4 rounded-lg">
            <Image
              src="/logo.png"
              alt="InsightCV"
              width={120}
              height={150}
              className="h-18 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <SignedIn>
            {/* Industry Insights Button */}
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2 bg-slate-800/50 border-slate-600/50 text-gray-300 backdrop-blur-sm"
              >
                <LayoutDashboard className="h-4 w-4 text-blue-400" />
                <span className="text-blue-400">Industry Insights</span>
              </Button>
              
              {/* Mobile version */}
              <Button 
                variant="ghost" 
                className="md:hidden w-10 h-10 p-0 bg-slate-800/60 text-blue-400"
              >
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>

            {/* Growth Tools Dropdown */}
           <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg rounded-xl px-4 py-2">
      <StarsIcon className="h-4 w-4" />
      <span className="hidden md:block font-medium">Growth Tools</span>
      <ChevronDown className="h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  
  <DropdownMenuContent 
    align="end" 
    className="w-64 bg-slate-800/98 backdrop-blur-xl border border-slate-600/50 shadow-2xl shadow-black/60 rounded-2xl p-1 mt-2"
  >
    {/* Header */}
    <div className="px-4 py-3 border-b border-slate-700/50">
      <h3 className="text-sm font-semibold text-white flex items-center gap-2">
        <StarsIcon className="h-4 w-4 text-purple-400" />
        AI Growth Tools
      </h3>
    </div>

    {/* Menu Items */}
    <div className="p-2 space-y-1">
      <DropdownMenuItem asChild>
        <Link 
          href="/resume" 
          className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-200 cursor-pointer transition-colors duration-200 hover:bg-slate-700/60 hover:text-white"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/30 flex items-center justify-center">
            <FileText className="h-5 w-5 text-green-400" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-white">Build Resume</div>
            {/* <div className="text-xs text-gray-400 mt-0.5">Create professional AI-powered resumes</div> */}
          </div>
         
        </Link>
      </DropdownMenuItem>
      
      <DropdownMenuItem asChild>
        <Link
          href="/ai-cover-letter"
          className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-200 cursor-pointer transition-colors duration-200 hover:bg-slate-700/60 hover:text-white"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/30 flex items-center justify-center">
            <PenBox className="h-5 w-5 text-orange-400" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-white">Cover Letter</div>
            {/* <div className="text-xs text-gray-400 mt-0.5">Generate personalized cover letters</div> */}
          </div>
        </Link>
      </DropdownMenuItem>
      
      <DropdownMenuItem asChild>
        <Link 
          href="/interview" 
          className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-200 cursor-pointer transition-colors duration-200 hover:bg-slate-700/60 hover:text-white"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/30 flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-purple-400" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-white">Interview Prep</div>
            {/* <div className="text-xs text-gray-400 mt-0.5">Practice with AI interviewer system</div> */}
          </div>
          <div className="text-purple-400 text-xs bg-purple-500/10 px-2 py-1 rounded-md">
            New
          </div>
        </Link>
      </DropdownMenuItem>
    </div>
    
    {/* Enhanced Footer */}
  
  </DropdownMenuContent>
</DropdownMenu>

          </SignedIn>

          {/* Sign In Button */}
          <SignedOut>
            <SignInButton>
              <Button 
                variant="outline" 
                className="bg-slate-800/50 border-slate-600/50 text-gray-300 backdrop-blur-sm"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          {/* User Button */}
          <SignedIn>
            <div className="relative">
              {/* Status indicator */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full z-10"></div>
              
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10 ring-2 ring-slate-600/50",
                    userButtonPopoverCard: "bg-slate-800/95 backdrop-blur-xl border-slate-700/50 shadow-2xl shadow-black/50",
                    userPreviewMainIdentifier: "font-semibold text-white",
                    userPreviewSecondaryIdentifier: "text-gray-400",
                    userButtonPopoverActions: "bg-slate-800/50",
                    userButtonPopoverActionButton: "text-gray-300",
                  },
                }}
                afterSignOutUrl="/"
              />
            </div>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
