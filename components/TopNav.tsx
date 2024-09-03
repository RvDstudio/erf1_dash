import { Facebook, Instagram, Linkedin, MailIcon, Twitter } from "lucide-react";
import React from "react";

function TopNav() {
  return (
    <div className="flex justify-between max-w-7xl mx-auto items-center py-2 text-sm text-[#888888]">
      <div className="">Exclusive Black Friday Offers on all products!</div>
      <div className="flex space-x-4">
        <Facebook className="w-4 h-4" />
        <Twitter className="w-4 h-4" />
        <Instagram className="w-4 h-4" />
        <Linkedin className="w-4 h-4" />
        <div className="border-r border-[#343434]"></div>
        <span className="flex items-center">
          <MailIcon className="w-4 h-4 mr-2 text-[#FD9739]" />
          <p>info@pcbuilder.nl</p>
        </span>
      </div>
    </div>
  );
}

export default TopNav;
