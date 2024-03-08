import { JSX, SVGProps } from "react";
import ButtonMailto from "./Mail";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7WD0W8Oe67M
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-8 md:py-16  flex items-center justify-center xl:h-screen lg:py-24"
    >
      <div className="container items-center flex justify-center px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl pb-6">
              Prenez Contact
            </h2>
            <p className="max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-3xl/relaxed ">
              Nous sommes à votre disposition ! Contactez-nous pour une
              consultation ou pour toute question. Nous nous engageons à offrir
              un service personnalisé et à répondre rapidement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-2 md:gap-4 pt-4">
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium xl:text-2xl hover:underline">
                <ButtonMailto
                  label="carrestyle@laposte.net"
                  mailto="mailto:carrestyle@laposte.net"
                />
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium xl:text-2xl">
                <a href="tel:PHONE_NUM" className="hover:underline">
                  <PhoneIcon className="primary-color w-4 h-4 flex-shrink-0 hover:scale-110 transition-transform duration-300 inline mr-2" />
                  +33 (0)1 23 45 67 89
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
