import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="path" strokeWidth={5} d="M80.38,36.62V27H38a8,8,0,0,0-8,8V93a8,8,0,0,0,8,8H90a8,8,0,0,0,8-8V44.62H88.38A8,8,0,0,1,80.38,36.62Z"/>
    <StyleSvgChild as="line" strokeWidth={4} x1="48" y1="69.47" x2="80" y2="69.47"/>
    <StyleSvgChild as="line" strokeWidth={4} x1="48" y1="80.28" x2="80" y2="80.28"/>
    <StyleSvgChild as="line" strokeWidth={4} x1="48" y1="47.72" x2="80" y2="47.72"/>
    <StyleSvgChild as="line" strokeWidth={4} x1="48" y1="58.53" x2="80" y2="58.53"/>
    <StyleSvgChild as="line" strokeWidth={5} x1="80.38" y1="27" x2="98" y2="44.63"/>
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
