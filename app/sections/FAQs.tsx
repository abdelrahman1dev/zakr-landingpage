import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import React from 'react'

function FAQs() {
  return (
    <section className="container mx-auto px-2 lg:px-20 py-8 bg-card" id="FAQs">
      <h2 className="highlight bold text-4xl w-fit ">FAQs</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            <p>Our return policy lasts 30 days...</p>
          </AccordionContent>
        </AccordionItem>
        <hr  className="border-t border-gray-200 my-2"/>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I track my order?</AccordionTrigger>
          <AccordionContent>
            <p>You can track your order using the tracking link...</p>
          </AccordionContent>
        </AccordionItem>
        <hr  className="border-t border-gray-200 my-2"/>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
          <AccordionContent>
            <p>Yes, we offer international shipping to select countries...</p>
          </AccordionContent>
        </AccordionItem>
        <hr  className="border-t border-gray-200 my-2"/>
      </Accordion>
    </section>
  )
}





export default FAQs
