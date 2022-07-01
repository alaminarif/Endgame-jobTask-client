import React from "react";

const Footer = () => {
  const today = new Date();
  const date = today.getFullYear();
  return (
    <div>
      <footer className=" flex justify-center footer p-10 absolute bottom-0  bg-neutral text-neutral-content">
        <div className="">
          <p className="text-xl"> copyright &copy; {date} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
