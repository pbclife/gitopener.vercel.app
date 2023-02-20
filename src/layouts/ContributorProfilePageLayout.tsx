import type { ProfileProps } from '@/components/contributorProfilePage/Profile';
import type { NextPage } from 'next';
import type { ComponentProps } from 'react';

import { Socials } from '@/components/contributorProfilePage';
import Profile from '@/components/contributorProfilePage/Profile';
import GradientBG from '@/components/utilities/GradientBg';
import clsx from 'clsx';
import colors from 'tailwindcss/colors';
import Container from './Container';

type ContributorProfilePageLayoutProps = ComponentProps<'main'> &
  ProfileProps & {};

const ContributorProfilePageLayout: NextPage<
  ContributorProfilePageLayoutProps
> = ({ className, children, contributor, meta, ...props }) => {
  return (
    <main className="z-0 min-h-screen" {...props}>
      <GradientBG
        className="fixed inset-0 -z-10 h-64 w-full animate-bg-shift"
        colors={[
          colors.fuchsia[400],
          colors.teal[500],
          colors.purple[600],
          colors.indigo[600],
        ]}
      />
      <div className="h-64 w-full bg-gradient-to-t from-primary via-primary/70 to-primary/30"></div>
      <div className="relative border-t border-skin-base bg-skin-base py-4 text-skin-base">
        <Container className={clsx(className, `relative pb-8`)}>
          <Profile meta={meta} contributor={contributor} />
          <Socials />
          {children}
        </Container>
      </div>
    </main>
  );
};

export default ContributorProfilePageLayout;
