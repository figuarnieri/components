import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="circle" cx="64" cy="63.7" r="9" />
    <StyleSvgChild as="path" d="M96,63.3C89.4,52.2,76.8,44.6,64,44.6S38.6,52.1,32,63.3" />
    <StyleSvgChild as="path" d="M32,64.7c6.6,11.1,19.2,18.7,32,18.7s25.4-7.5,32-18.7" />
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
