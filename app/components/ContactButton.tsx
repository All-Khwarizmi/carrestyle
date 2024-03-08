interface ContactButtonProps {
  className?: string;
}

export default function ContactButton({ className ="" }: ContactButtonProps) {
  return (
    <div className={`${className} py-1 text-right `}>
      <a
        className="bg-blue mt-2 inline-flex items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white"
        href="/"
      >
        Contact
      </a>
    </div>
  );
}
