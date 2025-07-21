"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, parse } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { entrySchema } from "@/app/lib/schema";
import { 
  Sparkles, 
  PlusCircle, 
  X, 
  Pencil, 
  Save, 
  Loader2,
  Calendar as CalendarIcon,
  MapPin,
  Clock,
  Building2,
  User
} from "lucide-react";
import { improveWithAI } from "@/actions/resume";
import { toast } from "sonner";
import useFetch from "@/hooks/use-fetch";
import { cn } from "@/lib/utils";

const formatDisplayDate = (dateString) => {
  if (!dateString) return "";
  const date = parse(dateString, "yyyy-MM", new Date());
  return format(date, "MMM yyyy");
};

export function EntryForm({ type, entries, onChange }) {
  const [isAdding, setIsAdding] = useState(false);
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);

  const {
    register,
    handleSubmit: handleValidation,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(entrySchema),
    defaultValues: {
      title: "",
      organization: "",
      startDate: "",
      endDate: "",
      description: "",
      current: false,
    },
  });

  const current = watch("current");
  const startDate = watch("startDate");
  const endDate = watch("endDate");

  const handleAdd = handleValidation((data) => {
    const formattedEntry = {
      ...data,
      startDate: formatDisplayDate(data.startDate),
      endDate: data.current ? "" : formatDisplayDate(data.endDate),
    };

    onChange([...entries, formattedEntry]);
    reset();
    setIsAdding(false);
    toast.success(`${type} added successfully!`);
  });

  const handleDelete = (index) => {
    const newEntries = entries.filter((_, i) => i !== index);
    onChange(newEntries);
    toast.success(`${type} removed successfully!`);
  };

  const {
    loading: isImproving,
    fn: improveWithAIFn,
    data: improvedContent,
    error: improveError,
  } = useFetch(improveWithAI);

  useEffect(() => {
    if (improvedContent && !isImproving) {
      setValue("description", improvedContent);
      toast.success("Description improved successfully!");
    }
    if (improveError) {
      toast.error(improveError.message || "Failed to improve description");
    }
  }, [improvedContent, improveError, isImproving, setValue]);

  const handleImproveDescription = async () => {
    const description = watch("description");
    if (!description) {
      toast.error("Please enter a description first");
      return;
    }

    await improveWithAIFn({
      current: description,
      type: type.toLowerCase(),
    });
  };

  const getTypeIcon = () => {
    switch (type.toLowerCase()) {
      case 'experience':
        return <Building2 className="h-4 w-4" />;
      case 'education':
        return <User className="h-4 w-4" />;
      case 'project':
        return <Sparkles className="h-4 w-4" />;
      default:
        return <PlusCircle className="h-4 w-4" />;
    }
  };

  const getTypeColor = () => {
    switch (type.toLowerCase()) {
      case 'experience':
        return 'from-blue-500/20 to-blue-600/20 border-blue-500/30';
      case 'education':
        return 'from-green-500/20 to-green-600/20 border-green-500/30';
      case 'project':
        return 'from-purple-500/20 to-purple-600/20 border-purple-500/30';
      default:
        return 'from-gray-500/20 to-gray-600/20 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Existing Entries */}
      <div className="space-y-4">
        {entries.map((item, index) => (
          <Card 
            key={index} 
            className={`bg-gradient-to-br ${getTypeColor()} backdrop-blur-sm border transition-all duration-300 hover:shadow-lg hover:shadow-black/20`}
          >
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
              <div className="space-y-1 flex-1">
                <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
                  {getTypeIcon()}
                  {item.title}
                </CardTitle>
                <p className="text-sm text-gray-300 flex items-center gap-1">
                  <Building2 className="h-3 w-3" />
                  {item.organization}
                </p>
              </div>
              <Button
                variant="outline"
                size="icon"
                type="button"
                onClick={() => handleDelete(index)}
                className="h-8 w-8 bg-red-500/20 border-red-500/30 hover:bg-red-500/30 text-red-400"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                <Clock className="h-3 w-3" />
                <span>
                  {item.current
                    ? `${item.startDate} - Present`
                    : `${item.startDate} - ${item.endDate}`}
                </span>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add New Entry Form */}
      {isAdding && (
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-slate-700/50 to-slate-800/50">
            <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
              {getTypeIcon()}
              Add New {type}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            {/* Title and Organization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Title/Position *
                </label>
                <Input
                  placeholder="e.g., Software Engineer"
                  {...register("title")}
                  className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-gray-400"
                />
                {errors.title && (
                  <p className="text-sm text-red-400 flex items-center gap-1">
                    <X className="h-3 w-3" />
                    {errors.title.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Organization/Company *
                </label>
                <Input
                  placeholder="e.g., Google Inc."
                  {...register("organization")}
                  className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-gray-400"
                />
                {errors.organization && (
                  <p className="text-sm text-red-400 flex items-center gap-1">
                    <X className="h-3 w-3" />
                    {errors.organization.message}
                  </p>
                )}
              </div>
            </div>

            {/* Date Selection with Calendar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Start Date *
                </label>
                <Popover open={startDateOpen} onOpenChange={setStartDateOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-slate-700/50 border-slate-600/50 text-white hover:bg-slate-600/50",
                        !startDate && "text-gray-400"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(parse(startDate, "yyyy-MM", new Date()), "PPP") : "Select start date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-slate-800 border-slate-700">
                    <Calendar
                      mode="single"
                      selected={startDate ? parse(startDate, "yyyy-MM", new Date()) : null}
                      onSelect={(date) => {
                        if (date) {
                          setValue("startDate", format(date, "yyyy-MM"));
                          setStartDateOpen(false);
                        }
                      }}
                      className="text-white"
                    />
                  </PopoverContent>
                </Popover>
                {errors.startDate && (
                  <p className="text-sm text-red-400 flex items-center gap-1">
                    <X className="h-3 w-3" />
                    {errors.startDate.message}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  End Date {current && "(Current)"}
                </label>
                <Popover open={endDateOpen} onOpenChange={setEndDateOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      disabled={current}
                      className={cn(
                        "w-full justify-start text-left font-normal bg-slate-700/50 border-slate-600/50 text-white hover:bg-slate-600/50",
                        (!endDate || current) && "text-gray-400",
                        current && "opacity-50"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {current ? "Present" : endDate ? format(parse(endDate, "yyyy-MM", new Date()), "PPP") : "Select end date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-slate-800 border-slate-700">
                    <Calendar
                      mode="single"
                      selected={endDate ? parse(endDate, "yyyy-MM", new Date()) : null}
                      onSelect={(date) => {
                        if (date) {
                          setValue("endDate", format(date, "yyyy-MM"));
                          setEndDateOpen(false);
                        }
                      }}
                      className="text-white"
                    />
                  </PopoverContent>
                </Popover>
                {errors.endDate && (
                  <p className="text-sm text-red-400 flex items-center gap-1">
                    <X className="h-3 w-3" />
                    {errors.endDate.message}
                  </p>
                )}
              </div>
            </div>

            {/* Current Checkbox */}
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-700/30">
              <input
                type="checkbox"
                id="current"
                {...register("current")}
                onChange={(e) => {
                  setValue("current", e.target.checked);
                  if (e.target.checked) {
                    setValue("endDate", "");
                  }
                }}
                className="h-4 w-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="current" className="text-gray-300 font-medium">
                This is my current {type.toLowerCase()}
              </label>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Description *
              </label>
              <Textarea
                placeholder={`Describe your ${type.toLowerCase()} responsibilities, achievements, and key contributions...`}
                className="h-32 bg-slate-700/50 border-slate-600/50 text-white placeholder:text-gray-400 resize-none"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-sm text-red-400 flex items-center gap-1">
                  <X className="h-3 w-3" />
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* AI Improve Button */}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleImproveDescription}
              disabled={isImproving || !watch("description")}
              className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30 hover:from-purple-600/30 hover:to-blue-600/30 text-purple-300 hover:text-purple-200"
            >
              {isImproving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Improving with AI...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Improve with AI
                </>
              )}
            </Button>
          </CardContent>
          
          <CardFooter className="flex justify-end space-x-3 bg-slate-700/30">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                reset();
                setIsAdding(false);
              }}
              className="bg-slate-700/50 border-slate-600/50 text-gray-300 hover:bg-slate-600/50"
            >
              Cancel
            </Button>
            <Button 
              type="button" 
              onClick={handleAdd}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <Save className="h-4 w-4 mr-2" />
              Save {type}
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Add Button */}
      {!isAdding && (
        <Button
          className="w-full h-12 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 border border-slate-600/50 text-gray-300 hover:text-white transition-all duration-300"
          variant="outline"
          onClick={() => setIsAdding(true)}
        >
          <PlusCircle className="h-5 w-5 mr-2" />
          Add New {type}
        </Button>
      )}
    </div>
  );
}
