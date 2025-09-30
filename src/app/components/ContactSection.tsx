import {
  Instagram,
  Facebook,
  MailIcon,
  PhoneIcon,
  Music2Icon,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-16 ">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="space-y-4 text-left">
          <div className="space-y-3">
            {/* Email */}
            <div className="flex items-center gap-2 text-white hover:text-white transition font-rockwell">
              <MailIcon className="w-5 h-5" />
              <span>enginerecy@gmail.com</span>
            </div>
          </div>
          <div className="space-y-3">
            {/* Phone */}
            <div className="flex items-center gap-2 text-white hover:text-white transition">
              <PhoneIcon className="w-5 h-5" />
              <span>06-3591-6545 MT | 09-8440-3355 JB</span>
            </div>
          </div>
          <div className="space-y-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/engine_recy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink-400 hover:text-pink-500 transition"
            >
              <Instagram className="w-5 h-5" />
              <span>@engine_recy</span>
            </a>
          </div>
          <div className="space-y-3">
            {/* Face */}
            <a
              href="https://www.facebook.com/people/Engine-RECY/61567636742246/#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition"
            >
              <Facebook className="w-5 h-5" />
              <span>@engine_recy</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
