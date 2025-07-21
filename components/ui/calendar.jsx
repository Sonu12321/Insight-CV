"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 bg-slate-800 rounded-lg border border-slate-700", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center mb-4",
        caption_label: "text-base font-semibold text-white",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          "h-8 w-8 bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-slate-500 text-gray-300 hover:text-white rounded-md flex items-center justify-center transition-colors"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse",
        head_row: "flex mb-2",
        head_cell: "text-gray-400 rounded-md w-9 h-9 font-medium text-sm flex items-center justify-center",
        row: "flex w-full",
        cell: cn(
          "relative p-0 text-center text-sm",
          "h-9 w-9 flex items-center justify-center",
          "[&:has([aria-selected])]:bg-slate-700/50 [&:has([aria-selected].day-outside)]:bg-slate-700/25",
          "first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md",
          "focus-within:relative focus-within:z-20"
        ),
        day: cn(
          "h-9 w-9 p-0 font-normal text-gray-300 rounded-md",
          "hover:bg-slate-600/50 hover:text-white transition-colors",
          "focus:bg-slate-600 focus:text-white focus:outline-none",
          "disabled:text-gray-600 disabled:opacity-50"
        ),
        day_selected: cn(
          "bg-blue-600 text-white font-semibold",
          "hover:bg-blue-700 hover:text-white",
          "focus:bg-blue-600 focus:text-white"
        ),
        day_today: "bg-slate-700 text-white font-semibold border border-slate-600",
        day_outside: cn(
          "text-gray-600 opacity-50",
          "hover:bg-slate-700/30 hover:text-gray-500",
          "aria-selected:bg-slate-700/25 aria-selected:text-gray-500"
        ),
        day_disabled: "text-gray-700 opacity-30 cursor-not-allowed",
        day_range_middle: "aria-selected:bg-slate-700 aria-selected:text-white",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
