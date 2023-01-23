import axios from '@/config/axios';
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type THeaderContext = {
  contributorsCount: string;
};

const HeaderContext = createContext<THeaderContext>({
  contributorsCount: `0`,
});

type HeaderProps = {
  children: ReactNode;
};

// Fetch total contributors
const countTotalContributors = async (): Promise<{
  totalContributors: number;
}> => {
  try {
    const { data } = await axios.get(`/contributors/total`);
    return data;
  } catch (error) {
    throw new Error(`Something went wrong while fetching total contributors`);
  }
};

// Convert total contributors to string
const convertTotalConts = (count: number): string => {
  let suffixes = ['', 'k', 'm', 'b', 't'];
  let suffixNum = Math.floor(count.toString().length / 3);
  let shortValue: string | number = parseFloat(
    (suffixNum !== 0 ? count / Math.pow(1000, suffixNum) : count).toPrecision(2)
  );
  if (shortValue % 1 !== 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
};

// Context Provider
const HeaderProvider: FC<HeaderProps> = ({ children }) => {
  const [totalContributors, settotalContributors] = useState<number>(0);

  useEffect(() => {
    async function fetchTotalContibutors() {
      try {
        const { totalContributors: totalConts } =
          await countTotalContributors();
        settotalContributors(totalConts);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTotalContibutors();
  }, []);

  const value: THeaderContext = {
    contributorsCount: convertTotalConts(totalContributors),
  };
  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};

export default HeaderProvider;

export const useHeaderContext = () => useContext(HeaderContext);
