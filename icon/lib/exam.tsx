import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="rect" x="30" y="27" width="68" height="74" rx="8"/>
    <StyleSvgChild as="polyline" strokeWidth={4} points="45.25 42.72 47.28 44.75 51.25 40.75"/>
    <StyleSvgChild as="line" strokeWidth={4} x1="59.4" y1="42.75" x2="82.75" y2="42.75"/>
    <StyleSvgChild as="line" strokeWidth={4} x1="59.4" y1="85.25" x2="82.75" y2="85.25"/>
    <StyleSvgChild as="polyline" strokeWidth={4} points="45.25 85.22 47.28 87.25 51.25 83.25"/>
    <StyleSvgChild as="line" strokeWidth={4} x1="59.4" y1="71.08" x2="82.75" y2="71.08"/>
    <StyleSvgChild as="polyline" strokeWidth={4} points="45.25 71.05 47.28 73.08 51.25 69.08"/>
    <StyleSvgChild as="line" strokeWidth={4} x1="59.4" y1="56.92" x2="82.75" y2="56.92"/>
    <StyleSvgChild as="polyline" strokeWidth={4} points="45.25 56.89 47.28 58.92 51.25 54.92"/>
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
