/* eslint-disable @next/next/no-html-link-for-pages */

import ContactButton from "./ContactButton";

export default function Header() {
  return (
    <>
      <div
        className="
        bg-blue
        absolute
        top-0
        
        w-full 
        text-center
        text-sm
        leading-6
        text-white
      "
      >
        Transformez votre salle de bain avec nos douches à l'Italienne sur
        mesure.
        <a href="/" className="pl-3 underline">
          Montrez-moi.
        </a>
      </div>
      <div className=" mt-6 mb-16 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-20 sm:px-0 md:px-6">
        <div className="mt-4 inline-block pb-4 pl-8">
          <div className="hidden pl-14 align-middle xl:inline-block">
            <a href="/" className="pr-12 text-xl text-black">
              Sdb.
            </a>
            <a href="/" className="pr-12 text-xl text-black">
              Béton Imprimé.
            </a>
            <a href="/" className="pr-12 text-xl text-black">
              Carrelage.
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <ContactButton className="hidden xl:inline-block" />
        </div>
      </div>
    </>
  );
}
