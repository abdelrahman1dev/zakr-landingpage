import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import React from 'react'
import { useTranslation } from '../hooks/useTranslation';

function FAQs() {
  const { t } = useTranslation();
  return (
    <section className="container rtl:text-right mx-auto px-2 lg:px-20 py-8 bg-card" id="FAQs">
      <h2 className="highlight bold text-4xl w-fit ">{t('landingPage.faqSection.title')}</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{t('landingPage.faqSection.questions.q1')}</AccordionTrigger>
          <AccordionContent>
            <p>{t('landingPage.faqSection.questions.a1')}</p>
          </AccordionContent>
        </AccordionItem>
        <hr  className="border-t border-gray-200 my-2"/>
        <AccordionItem value="item-2">
          <AccordionTrigger>{t('landingPage.faqSection.questions.q2')}</AccordionTrigger>
          <AccordionContent>
            <p>{t('landingPage.faqSection.questions.a2')}</p>
          </AccordionContent>
        </AccordionItem>
        <hr  className="border-t border-gray-200 my-2"/>
        <AccordionItem value="item-3">
          <AccordionTrigger>{t('landingPage.faqSection.questions.q3')}</AccordionTrigger>
          <AccordionContent>
            <p>{t('landingPage.faqSection.questions.a3')}</p>
          </AccordionContent>
        </AccordionItem>
        <hr  className="border-t border-gray-200 my-2"/>
      </Accordion>
    </section>
  )
}





export default FAQs
