"use client";
import Link from "next/link";
import React, { SVGProps } from "react";

interface MailIconProps {
  mailto: string;
  label: string;
}

export default function ButtonMailto({ mailto, label }: MailIconProps) {
  return (
    <>
      <Link
        href="#contact"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        <MailIcon className="primary-color w-4 h-4 flex-shrink-0 hover:scale-110 transition-transform duration-300 inline mr-2" />

        {label}
      </Link>
    </>
  );
}
function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
