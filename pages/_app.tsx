import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Outfit } from "next/font/google";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  return (
    <main className={outfit.className}>
      <Navbar />
      <AnimatePresence mode="wait">
        <div key={router.route}>
          <motion.div
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            variants={{
              initialState: {
                opacity: 0,
                clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)'
              },
              animateState: {
                opacity: 1,
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
              },
              exitState: {
                opacity: 0,
                clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)'
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </div>
      </AnimatePresence>
    </main>
  );
}
