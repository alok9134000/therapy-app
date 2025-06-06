import React from "react"
import {
  Root as AccordionPrimitiveRoot,
  Item as AccordionPrimitiveItem,
  Header as AccordionPrimitiveHeader,
  Trigger as AccordionPrimitiveTrigger,
  Content as AccordionPrimitiveContent,
} from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import "../../app/globals.css"
import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitiveRoot

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitiveItem>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitiveItem>
>(({ className, ...props }, ref) => (
  <AccordionPrimitiveItem
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitiveTrigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitiveTrigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitiveHeader className="flex">
    <AccordionPrimitiveTrigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitiveTrigger>
  </AccordionPrimitiveHeader>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitiveContent>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitiveContent>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitiveContent
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitiveContent>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
