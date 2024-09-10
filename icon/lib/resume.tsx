import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="path" strokeWidth={4} d="M73.7,60.7c0-5.2-4.8-9.4-9.7-9.4s-9.7,4.2-9.7,9.4"/>
    <StyleSvgChild as="circle" strokeWidth={4} cx="64" cy="43.9" r="6"/>
    <StyleSvgChild as="circle" strokeWidth={4} cx="64" cy="49.3" r="16"/>
    <StyleSvgChild as="line" strokeWidth={4} x1="59.8" y1="77" x2="83.8" y2="77"/>
    <StyleSvgChild as="polyline" strokeWidth={4} points="44.6 77 47.3 79.8 52.6 74.2"/>
    <StyleSvgChild as="line" strokeWidth={4} x1="59.8" y1="88" x2="83.8" y2="88"/>
    <StyleSvgChild as="polyline" strokeWidth={4} points="44.6 88 47.3 90.8 52.6 85.2"/>
    <StyleSvgChild as="rect" strokeWidth={5} x="30" y="27" width="68" height="74" rx="8"/>
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
