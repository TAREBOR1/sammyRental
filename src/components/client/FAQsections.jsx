import Accordion from "./Accordion";
import Title from "./Title";


const faqItems = [
  {
    title: "What is the check-in and check-out time?",
    content: "Check-in is from 2:00 PM and check-out is until 11:00 AM.",
  },
  {
    title: "Are pets allowed?",
    content: "Unfortunately, pets are not allowed at this property.",
  },
  {
    title: "Is parking available?",
    content: "Yes, we offer free on-site parking for all guests.",
  },
];

export default function FAQSections() {
  return (
    <section className="py-10 bg-gray-50">
     <Title title='Frequently Asked Questions'/>
      <Accordion items={faqItems} />
    </section>
  );
}
