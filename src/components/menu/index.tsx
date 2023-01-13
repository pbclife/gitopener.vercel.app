import Logo from '@utilities/logo';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Container from '../layouts/container';

export default function Menu() {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      if (scrollTop >= 530) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const DisplayLogoVarients: Variants = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
      scale: 0.5,
    },
    onEnter: {
      opacity: 1,
      scale: 0.85,
    },
    onExit: {
      opacity: 0,
      scale: 0.65,
    },
  };

  const DisplayLogo = (
    <AnimatePresence>
      {isSticky && (
        <motion.div
          variants={DisplayLogoVarients}
          key={`DisplayLogo`}
          initial={`initial`}
          animate={`onEnter`}
          exit={`onExit`}
        >
          <Logo />
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className=" w-full border-b border-skin-base bg-skin-base">
      <Container className="flex min-h-[5rem] items-center ">
        {DisplayLogo}
      </Container>
    </div>
  );
}
