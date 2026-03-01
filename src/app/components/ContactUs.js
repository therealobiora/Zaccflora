import { Mail } from "lucide-react";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-10 md:mb-14">
          Contact Us
        </h2>

        <div className="text-center">
          <p className="text-lg md:text-xl text-gray-700 mb-10 md:mb-12 max-w-3xl mx-auto">
            For inquiries, Menu, Orders, Recommendations, General Support and
            Microdosing Schedules, Feel free to reach out.
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
            {/* Telegram */}
            <a
              href="https://t.me/myshroomwall"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#27ae60]/10 flex items-center justify-center group-hover:bg-[#27ae60]/20 transition-colors">
                <FaTelegram className="w-8 h-8 md:w-10 md:h-10 text-[#27ae60]" />
              </div>
              <span className="text-sm md:text-base font-medium text-gray-800">
                Telegram
              </span>
            </a>

            {/* Whatsapp */}
            <a
              href="https://wa.me/18583740774"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#27ae60]/10 flex items-center justify-center group-hover:bg-[#27ae60]/20 transition-colors">
                <FaWhatsapp className="w-8 h-8 md:w-10 md:h-10 text-[#27ae60]" />
              </div>
              <span className="text-sm md:text-base font-medium text-gray-800">
                Whatsapp
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:myshroomwall@gmail.com"
              className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#27ae60]/10 flex items-center justify-center group-hover:bg-[#27ae60]/20 transition-colors">
                <Mail className="w-8 h-8 md:w-10 md:h-10 text-[#27ae60]" />
              </div>
              <span className="text-sm md:text-base font-medium text-gray-800">
                Email
              </span>
            </a>
          </div>

          <p className="mt-12 text-gray-600 text-base md:text-lg">
            Follow us on social media for updates, tips, and more.
          </p>
        </div>
      </div>
    </section>
  );
}
