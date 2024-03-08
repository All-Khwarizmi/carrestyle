/* eslint-disable @next/next/no-html-link-for-pages */

export default function Footer() {
  return (
    <>
      <footer className="w-full h-2/3 bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} CarréStyle. Tous
              droits réservés.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="/mentions-legales" className="text-sm hover:underline">
              Mentions légales
            </a>
            <a
              href="/politique-de-confidentialite"
              className="text-sm hover:underline"
            >
              Politique de confidentialité
            </a>
            <a href="#contact" className="text-sm hover:underline">
              Contactez-nous
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
