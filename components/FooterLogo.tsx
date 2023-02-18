import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

type Props = {};

const FooterLogo = ({}: Props) => {
  return (
    <Link href="#hero">
      <footer id="logo" className="sticky bottom-5 w-full cursor-pointer">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileTap={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          <img
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            src="navigateuplogo.jpg"
            alt="logo"
          />
        </motion.div>
      </footer>
    </Link>
  );
};

export default FooterLogo;
