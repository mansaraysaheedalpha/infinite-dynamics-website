// src/app/contact/page.tsx
import ContactForm from "@/components/forms/ContactForm";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import Link from "next/link";

const ContactPage = () => {
  return (
    <main
      className="relative flex min-h-[calc(100vh-5rem)] w-full items-center justify-center bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: "url(/contact-bg.png)" }}
    >
      <div className="relative z-10 w-full max-w-6xl">
        {/* Glassmorphism Card with restored styling */}
        <div className="p-8 text-white shadow-lg md:p-12">
          {/* Main Grid: 1 column on mobile, 3 on large screens */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {/* Column 1 Wrapper Starts Here */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h3 className="text-2xl font-bold drop-shadow-md">
                General Enquiries
              </h3>
              <div className="mt-6 flex flex-col items-center space-y-2 text-lg lg:items-start">
                <div className="flex items-center gap-4 drop-shadow-md">
                  <HiOutlinePhone className="h-5 w-5" />
                  <span>+232 77 123 456</span>
                </div>
                <div className="flex items-center gap-4 drop-shadow-md">
                  <HiOutlineEnvelope className="h-5 w-5" />
                  <span>info@infinitedynamics.sl</span>
                </div>
              </div>
            </div>
            {/* Column 1 Wrapper Ends Here */}

            {/* Column 2: Contact Form */}
            <div className="flex flex-col">
              <h3 className="text-center text-2xl font-bold drop-shadow-md">
                Connect With Us
              </h3>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            {/* Column 3: Our Location & Socials */}
            <div className="flex flex-col justify-center items-center text-center lg:text-right">
              <h3 className="text-2xl font-bold drop-shadow-md">
                Our Location
              </h3>
              <div className="mt-6 flex flex-col items-center space-y-2 text-lg lg:items-end">
                <div className="flex items-center gap-4 drop-shadow-md">
                  <HiOutlineMapPin className="h-5 w-5" />
                  <div className="text-center">
                    <span>New York Junction</span>
                    <br />
                    <span>213 Kanu Drive</span>
                    <br />
                    <span>Freetown, Sierra Leone</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-center gap-4 lg:justify-end">
                <Link href="#" className="hover:text-brand-yellow">
                  <FaLinkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-brand-yellow">
                  <FaXTwitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-brand-yellow">
                  <FaInstagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-brand-yellow">
                  <FaFacebook className="h-6 w-6" />
                </Link>
              </div>
              <h3 className="mt-4 text-lg text-center font-medium drop-shadow-md">
                Follow Us
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
