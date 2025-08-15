

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import HeroSection from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";
// import Particles from "./components/particles";
import { data } from "./components/ds";

export default function LandingPage() {

  return (
    <>
     

      {/* Hero Section */}
      <HeroSection />



      {/* Features Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
  {/* Dynamic animated background */}
 

  {/* Floating elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-20 w-40 h-40 border border-violet-500/20 rounded-full animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-32 h-32 border border-blue-500/20 rotate-45 animate-bounce"></div>
    <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-cyan-500/20 rounded-lg rotate-12 animate-spin" style={{ animationDuration: '10s' }}></div>
    
    {/* Grid pattern overlay */}
    <div className="absolute inset-0 opacity-5">
      <div className="w-full h-full" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
        backgroundSize: '50px 50px'
      }}></div>
    </div>
  </div>

  <div className="container mx-auto px-4 md:px-6 relative z-10">
    {/* Enhanced header section */}
    <div className="text-center mb-20">
      <div className="inline-block mb-6">
        <span className="text-sm font-bold text-violet-400 bg-violet-500/10 px-4 py-2 rounded-full border border-violet-500/20 uppercase tracking-wider">
          Features
        </span>
      </div>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent leading-tight">
        Powerful Features for Your Career Growth
      </h2>
      
      <div className="flex items-center justify-center space-x-2 mb-6">
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-blue-500 rounded-full"></div>
        <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></div>
        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-transparent rounded-full"></div>
      </div>
      
      <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
        Discover the tools and capabilities that will accelerate your professional journey
      </p>
    </div>

    {/* Enhanced features grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group relative"
          style={{
            animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
          }}
        >
          {/* Feature card */}
          <Card className="relative h-full border-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm transition-all duration-500 group-hover:transform group-hover:scale-105 overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/50 via-blue-500/50 to-cyan-500/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0.5 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-lg"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-blue-500/10 to-cyan-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardContent className="relative z-10 pt-8 pb-6 px-6 text-center flex flex-col items-center h-full">
              {/* Icon section with enhanced styling */}
              <div className="relative mb-6">
                {/* Icon background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-blue-500/20 to-cyan-500/20 rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 p-0.5 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-300" style={{ animationDuration: '3s' }}>
                  <div className="w-full h-full rounded-full bg-slate-800"></div>
                </div>
                
                {/* Icon container */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-slate-700/80 to-slate-800/80 rounded-full flex items-center justify-center border border-slate-600/50 group-hover:border-violet-500/50 transition-all duration-300">
                  <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-violet-400 group-hover:text-white">
                    {feature.icon}
                  </div>
                </div>
              </div>
              
              {/* Content section */}
              <div className="flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-violet-300 transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
                
                {/* Action button that appears on hover */}

              </div>
            </CardContent>
            
            {/* Floating particles inside card */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <div className="absolute top-4 right-4 w-2 h-2 bg-violet-400/30 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400/40 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-cyan-400/30 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-700" style={{ animationDelay: '1s' }}></div>
            </div>
          </Card>
        </div>
      ))}
    </div>

    {/* Call to action section */}
    
  </div>
</section>




      {/* Stats Section */}
      <section className="w-full py-16 md:py-32 relative overflow-hidden">
  {/* Dynamic animated background */}
  <div className="absolute inset-0 ">
    <div className="absolute inset-0"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(34,197,94,0.08),transparent_50%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.08),transparent_50%)]"></div>
  </div>

  {/* Animated particles */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 2}s`
        }}
      />
    ))}
  </div>

  <div className="container mx-auto px-4 md:px-6 relative z-10">
    {/* Section header */}
    <div className="text-center mb-16">
      <div className="inline-block mb-4">
        <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 uppercase tracking-wider">
          Our Impact
        </span>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
        Proven Results That Matter
      </h2>
      
      <div className="w-24 h-0.5 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
    </div>

    {/* Enhanced statistics grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
      {[
        { 
          number: "50+", 
          label: "Industries Covered",
          icon: "🏢",
          gradient: "from-emerald-400 to-teal-500",
          bgGradient: "from-emerald-500/10 to-teal-500/10",
          borderGradient: "from-emerald-500/30 to-teal-500/30"
        },
        { 
          number: "1000+", 
          label: "Interview Questions",
          icon: "❓",
          gradient: "from-blue-400 to-indigo-500",
          bgGradient: "from-blue-500/10 to-indigo-500/10",
          borderGradient: "from-blue-500/30 to-indigo-500/30"
        },
        { 
          number: "95%", 
          label: "Success Rate",
          icon: "🎯",
          gradient: "from-purple-400 to-pink-500",
          bgGradient: "from-purple-500/10 to-pink-500/10",
          borderGradient: "from-purple-500/30 to-pink-500/30"
        },
        { 
          number: "24/7", 
          label: "AI Support",
          icon: "🤖",
          gradient: "from-orange-400 to-red-500",
          bgGradient: "from-orange-500/10 to-red-500/10",
          borderGradient: "from-orange-500/30 to-red-500/30"
        }
      ].map((stat, index) => (
        <div
          key={index}
          className="group relative"
          style={{
            animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
          }}
        >
          {/* Stat card */}
          <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${stat.bgGradient} backdrop-blur-sm border border-transparent bg-clip-padding transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl overflow-hidden`}>
            
            {/* Gradient border on hover */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
            <div className="absolute inset-0.5 rounded-2xl bg-slate-800/90 -z-10"></div>

            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.bgGradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-20`}></div>

            {/* Icon */}
            <div className="text-3xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
              {stat.icon}
            </div>

            {/* Number with counter animation */}
            <div className="flex flex-col items-center space-y-3">
              <h3 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 counter-animate`}>
                {stat.number}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm md:text-base font-medium text-center leading-tight">
                {stat.label}
              </p>
            </div>

            {/* Animated progress bar */}
            <div className="mt-6 w-full bg-slate-700/50 rounded-full h-1 overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out`}
                style={{ animationDelay: `${index * 0.2}s` }}
              ></div>
            </div>

            {/* Floating particles inside card */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Additional info section */}
    <div className="text-center mt-16 space-y-6">
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Join thousands of professionals who have transformed their careers with our platform
      </p>
      
      {/* Achievement badges */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {["Trusted by Fortune 500", "Award Winning Platform", "99.9% Uptime"].map((badge, index) => (
          <span 
            key={index}
            className="px-4 py-2 bg-slate-800/60 border border-slate-600/30 rounded-full text-gray-300 text-sm font-medium backdrop-blur-sm hover:bg-slate-700/60 hover:border-slate-500/50 transition-all duration-300"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>




      {/* How It Works Section */}
      <section className="w-full py-8 md:py-32 relative overflow-hidden">
  {/* Animated background with gradients */}
  <div className="absolute inset-0 ">
    <div className="absolute inset-0 "></div>
    
  </div>

  {/* Floating geometric shapes */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 rounded-full animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-24 h-24 border border-purple-500/20 rotate-45 animate-bounce"></div>
    <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-cyan-500/20 rounded-lg rotate-12 animate-spin-slow"></div>
  </div>

  <div className="container mx-auto px-4 md:px-6 relative z-10">
    {/* Enhanced heading section */}
    <div className="text-center max-w-4xl mx-auto mb-20">
      <div className="inline-block mb-6">
        <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
          PROCESS
        </span>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight">
        How It Works
      </h2>
      
      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
      
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Four simple steps to accelerate your career growth and unlock your potential
      </p>
    </div>

    {/* Enhanced steps grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto">
      {howItWorks.map((item, index) => (
        <div
          key={index}
          className="group relative"
          style={{
            animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`
          }}
        >
          {/* Step connector line (hidden on mobile) */}
          {index < howItWorks.length - 1 && (
            <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/30 transform translate-x-6 z-0">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
          )}

          {/* Main content card */}
          <div className="flex flex-col items-center text-center space-y-6 relative z-10 p-6 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-900/20">
            
            {/* Step number badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
              {index + 1}
            </div>

            {/* Enhanced icon container */}
            <div className="relative mt-4">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-0.5 group-hover:animate-spin-slow">
                <div className="w-full h-full rounded-full bg-slate-800"></div>
              </div>
              
              {/* Icon container */}
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-slate-700/80 to-slate-800/80 flex items-center justify-center backdrop-blur-sm border border-slate-600/50 group-hover:border-slate-500/70 transition-all duration-300">
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300 text-white group-hover:text-blue-300">
                  {item.icon}
                </div>
              </div>
            </div>

            {/* Enhanced typography */}
            <div className="space-y-4">
              <h3 className="font-bold text-xl md:text-2xl text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed text-base max-w-xs mx-auto">
                {item.description}
              </p>
            </div>

            {/* Subtle action indicator */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
              <svg className="w-6 h-6 text-blue-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>

    
  </div>
</section>





     <section className="w-full py-16 md:py-32 relative overflow-hidden">
  {/* Animated background gradient */}
  <div className="absolute inset-0 ">
    <div className="absolute inset-0"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
  </div>

  {/* Floating particles/dots */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce"></div>
    <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-ping"></div>
    <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-pink-400/20 rounded-full animate-pulse"></div>
  </div>

  <div className="container mx-auto px-4 md:px-6 relative z-10">
    {/* Enhanced heading with gradient text */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
        What Our Users Say
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
      <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
        Discover how our platform has transformed careers and empowered developers worldwide
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {testimonial.map((testimonial, index) => (
        <div
          key={index}
          className="group relative"
          style={{
            animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
          }}
        >
          {/* Card with enhanced styling */}
          <Card className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-900/25">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardContent className="pt-8 pb-6 px-6 relative z-10">
              <div className="flex flex-col space-y-6">
                {/* Author section with enhanced styling */}
                <div className="flex items-center space-x-4">
                  <div className="relative h-14 w-14 flex-shrink-0">
                    {/* Avatar glow ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-0.5 group-hover:animate-spin-slow">
                      <div className="w-full h-full rounded-full bg-slate-800"></div>
                    </div>
                    <Image
                      width={52}
                      height={52}
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="absolute inset-0.5 rounded-full object-cover z-10"
                    />
                    {/* Online indicator */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-slate-800 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="font-semibold text-white text-lg group-hover:text-blue-300 transition-colors">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-400 font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Quote section with enhanced styling */}
                <blockquote className="relative">
                  <div className="absolute -top-4 -left-4 text-6xl font-bold bg-gradient-to-br from-blue-400 to-purple-500 bg-clip-text text-transparent opacity-30">
                    "
                  </div>
                  <div className="absolute -bottom-8 -right-4 text-6xl font-bold bg-gradient-to-br from-purple-500 to-pink-400 bg-clip-text text-transparent opacity-30 rotate-180">
                    "
                  </div>
                  
                  <p className="text-gray-300 italic relative z-10 text-base leading-relaxed px-4 py-2 group-hover:text-white transition-colors duration-300">
                    {testimonial.quote}
                  </p>
                  
                  {/* Rating stars */}
                  <div className="flex items-center justify-center mt-4 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>

  
  </div>
</section>


      {/* FAQ Section */}
  <section className="w-full py-16 md:py-32 relative overflow-hidden">
  {/* Dynamic animated background */}
  

  {/* Floating elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 right-20 w-32 h-32 border border-amber-500/20 rounded-full animate-pulse"></div>
    <div className="absolute bottom-32 left-16 w-24 h-24 border border-orange-500/20 rotate-45 animate-bounce"></div>
    <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-red-500/20 rounded-lg rotate-12 animate-spin" style={{ animationDuration: '8s' }}></div>
    
    {/* Question mark patterns */}
    <div className="absolute top-16 left-1/4 text-6xl text-amber-500/10 animate-pulse">?</div>
    <div className="absolute bottom-16 right-1/3 text-4xl text-orange-500/10 animate-bounce">?</div>
  </div>

  <div className="container mx-auto px-4 md:px-6 relative z-10">
    {/* Enhanced header section */}
    <div className="text-center max-w-4xl mx-auto mb-20">
      <div className="inline-block mb-6">
        <span className="text-sm font-bold text-amber-400 bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20 uppercase tracking-wider">
          Support
        </span>
      </div>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent leading-tight">
        Frequently Asked Questions
      </h2>
      
      <div className="flex items-center justify-center space-x-2 mb-6">
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-orange-500 rounded-full"></div>
        <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
        <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-transparent rounded-full"></div>
      </div>
      
      <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
        Find answers to common questions about our platform and get the help you need
      </p>
    </div>

    {/* Enhanced FAQ accordion using data array */}
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {data.map((faq, index) => (
          <div
            key={faq.id}
            className="group relative"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
          >
            <AccordionItem 
              value={`item-${faq.id}`} 
              className="border-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-900/20"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 via-orange-500/30 to-red-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0.5 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl"></div>
              
              <div className="relative z-10">
                <AccordionTrigger className="text-left px-8 py-6 hover:no-underline group/trigger transition-all duration-300 [&[data-state=open]]:pb-2">
                  <div className="flex items-center space-x-4 w-full">
                    {/* Question number badge */}
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {faq.id}
                    </div>
                    
                    {/* Question text */}
                    <span className="text-lg md:text-xl font-semibold text-white group-hover/trigger:text-amber-300 transition-colors duration-300 text-left flex-1">
                      {faq.question}
                    </span>
                    
                    {/* Enhanced chevron icon */}
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 group-hover/trigger:bg-amber-500/30 flex items-center justify-center transition-all duration-300 group-data-[state=open]/trigger:rotate-180">
                      <svg className="w-4 h-4 text-amber-400 group-hover/trigger:text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-8 pb-6">
                  <div className="ml-12 pt-4 border-t border-slate-700/50">
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </p>
                    
                    {/* Optional "Was this helpful?" section */}
                    <div className="mt-6 pt-4 border-t border-slate-700/30">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Was this helpful?</span>
                       
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>

    {/* Additional support section */}
    <div className="text-center mt-20 space-y-8">
      <div className="p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
        <p className="text-gray-400 mb-6">Our support team is here to help you 24/7</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Live Chat</span>
            </span>
          </button>
          
          <button className="px-6 py-3 border-2 border-slate-600 hover:border-amber-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-amber-500/10 flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Email Support</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-32 relative overflow-hidden">
  {/* Clean, minimal background */}
  <div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.1),transparent_50%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.1),transparent_50%)]"></div>
  </div>

  {/* Subtle floating elements */}


  <div className="mx-auto py-24 relative z-10">
    <div className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden">
      {/* Simple gradient background */}
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 text-center px-8 py-20">
        
        {/* Clean heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Ready to Accelerate Your Career?
        </h2>

        {/* Simple description */}
        <p className="mx-auto max-w-2xl text-blue-100 text-lg md:text-xl leading-relaxed">
          Join thousands of professionals who are advancing their careers with AI-powered guidance.
        </p>

        {/* Clean CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/dashboard" passHref>
            <Button
              size="lg"
              className="h-12 px-8 bg-white hover:bg-gray-100 text-blue-600 font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Start Your Journey Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

         
        </div>

        {/* Simple trust indicators */}
        <div className="mt-8 space-y-3">
          <p className="text-blue-200 text-sm">Trusted by professionals worldwide</p>
          <div className="flex items-center justify-center space-x-2 text-blue-200/80 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Secure & Private</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
