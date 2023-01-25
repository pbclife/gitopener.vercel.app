import Glow from '@utilities/Glow';
import Logo from '@utilities/Logo';
import StarUs from '@utilities/StarUs';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import Container from '../../layouts/Container';
import ThemeButton from '../navbar/ThemeButton';
import MenuList from './MenuList';

interface TMenu {
  docs?: boolean;
}

const Menu: FC<TMenu> = ({ docs = false }) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;

      if (scrollTop >= 53) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const displayLogoVarient: Variants = {
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
      scale: 0.95,
    },
    onExit: {
      opacity: 0,
      scale: 0.65,
    },
  };
  const displayIconVarient: Variants = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
      scale: 0.5,
      rotate: 150,
    },
    onEnter: {
      opacity: 1,
      scale: 1,
      rotate: 360,
      transition: {
        delay: 0.25,
      },
    },
    onExit: {
      opacity: 0,
      scale: 0.65,
    },
  };

  function getAnimComp(Comp: FC, varient: Variants, key: string) {
    return (
      <AnimatePresence>
        {isSticky && (
          <motion.div
            variants={varient}
            key={key}
            initial={`initial`}
            animate={`onEnter`}
            exit={`onExit`}
            className="flex items-center gap-x-12 "
          >
            <Comp />
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  const displayLogo = getAnimComp(Logo, displayLogoVarient, `displayLogo`);
  const displayIcon = getAnimComp(
    ThemeButton,
    displayIconVarient,
    `displayIcon`
  );

  return (
    <div className="relative w-full border-b border-skin-base bg-skin-base text-skin-base ">
      <Glow className="sm:right-0 sm:max-w-3xl " />
      <Container className="relative z-0 flex min-h-[4rem] flex-col items-center  justify-end sm:min-h-[5rem] sm:flex-row sm:justify-between">
        {docs ? (
          <div className="flex w-full items-center justify-between">
            {/* logo */}
            <Logo />
            {/* links section */}
            <div className="flex items-center gap-x-4">
              <ThemeButton />
              <div className="hidden sm:block">
                <StarUs />
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* upper section */}
            <div className="z-10 flex items-center gap-x-12">
              {displayLogo}
              {displayIcon}
            </div>
            {/* links section */}
            <div className="z-0 sm:self-end">
              <MenuList />
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default Menu;
