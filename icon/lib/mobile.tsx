import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="rect" x="43" y="30" width="42" height="68" rx="8"/>
    <StyleSvgChild as="line" x1="85" y1="41.2" x2="43" y2="41.2"/>
    <StyleSvgChild as="line" x1="85" y1="83.43" x2="43" y2="83.43"/>
    <StyleSvgChild as="line" x1="62" y1="91.2" x2="66" y2="91.2"/>
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
