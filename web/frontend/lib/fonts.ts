import { 
  Tenor_Sans, 
  Inter,
  IBM_Plex_Sans_KR,
  Noto_Sans_Batak,
  Gabarito
} from "next/font/google";

export const gabaritoFont = Gabarito({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
});

export const tenorFont = Tenor_Sans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
});

export const interFont = Inter({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
});

export const interBoldFont = Inter({
  subsets: ['latin'],
  weight: '800',
  display: 'swap'
});
