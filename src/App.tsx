import { SparklesCore } from "./components/ui/sparkles";
import SparklesPreview from "./components/ui/Heading";
import "./styles.css";
import WhatIsDOS from "./components/ui/WhatIsDOS";
import { HeroParallax } from "./components/ui/Parallax";
import { motion } from "framer-motion";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top-left corner
  }, []);
  //
  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },

    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },

    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },

    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];
  //


  const layerVariants = {
    hidden: { opacity: 0, scale: 1.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2.0,
        // ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <div className="App bg-black">
      {/* Layer 1: Background */}
      <motion.div
        variants={layerVariants}
        initial="hidden"
        animate="visible"
        style={{ zIndex: 1, position: "relative" }}
      >
        <SparklesPreview />
      </motion.div>

      {/* Layer 2: Middle */}
      {/* <motion.div
        variants={layerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        style={{ zIndex: 2, position: "relative" }}
      > */}
        <WhatIsDOS />
      {/* </motion.div> */}

      {/* Layer 3: Foreground */}
      {/* <motion.div
        variants={layerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
        style={{ zIndex: 3, position: "relative" }}
      > */}
        <HeroParallax products={products} />
      {/* </motion.div> */}
    </div>
  );
}
