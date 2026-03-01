import { SectionHeading } from "./SectionHeading";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <div className="portfolio-section-animate">
      <SectionHeading>Contact</SectionHeading>

      <div className="bg-[#212123] border border-[#383839] rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
        <ContactForm />
      </div>
    </div>
  );
}
