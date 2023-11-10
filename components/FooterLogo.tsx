import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import navigateUpLogo from "../public/navigateuplogo.jpg";

type Props = {};

const FooterLogo = ({}: Props) => {
  return (
    <Link href="#hero">
      <footer
        id="logo"
        className="hidden sm:block h-10 w-10 mx-auto sticky bottom-5 cursor-pointer"
      >
        <motion.div
          className="flex h-10 w-10 justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileTap={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          <Image
            className="rounded-full ring ring-inset filter grayscale hover:grayscale-0 cursor-pointer"
            src={navigateUpLogo}
            alt="logo"
          />
        </motion.div>
      </footer>
    </Link>
  );
};

export default FooterLogo;
