import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="path" d="M102,78.5,85.9,72.8c-2-.6-4-1.8-4-3.9V59.1c0-2.2,2-3.3,4-3.9L102,49.5a4,4,0,0,1,4,3.9V74.5A4,4,0,0,1,102,78.5Z" />
    <StyleSvgChild as="rect" x="22" y="44" width="55.1" height="40" rx="8" />
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
