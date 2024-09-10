import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="circle" cx="64" cy="64" r="22.5"/>
    <StyleSvgChild as="polyline" points="92.8 40.8 92.8 31.2 83.2 31.2"/>
    <StyleSvgChild as="line" x1="79.6" y1="46.3" x2="92.5" y2="31.5"/>
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
