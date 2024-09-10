import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="path" d="M92.4,78.2V94a8,8,0,0,1-8,8H45.1a8,8,0,0,1-8-8V34.1a8,8,0,0,1,8-8H85.2a7.23,7.23,0,0,1,7.2,7.2V49.9" />
    <StyleSvgChild as="polyline" points="100.1 58.9 105.2 64 100.1 69.1" />
    <StyleSvgChild as="line" x1="103.8" y1="64" x2="78.8" y2="64" />
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
