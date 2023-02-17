import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  copyright: boolean;
};

const FooterLogo = ({ copyright = false }: Props) => {
  let year = new Date().getFullYear();

  return (
    <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer ">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <img
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            src="navigateuplogo.jpg"
            alt="logo"
          />
          {copyright ? <p> &copy; {year} Razvan Chiriac</p> : null}
        </motion.div>
      </footer>
    </Link>
  );
};

export default FooterLogo;
