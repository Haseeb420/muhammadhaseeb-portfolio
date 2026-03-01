import { SectionHeading } from "./SectionHeading";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <div className="portfolio-section-animate">
      <SectionHeading>Contact</SectionHeading>

      <div className="w-full h-64 md:h-80 bg-[#383839] rounded-3xl mb-8 overflow-hidden grayscale contrast-125 border border-[#383839] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108844.20230234127!2d74.240755!3d31.52037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc202c607751d9750!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709123456789!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Map of Lahore, Pakistan"
          className="opacity-60"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#1e1e1f] via-transparent to-transparent h-1/2 bottom-0" />
      </div>

      <div className="bg-[#212123] border border-[#383839] rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
        <ContactForm />
      </div>
    </div>
  );
}
