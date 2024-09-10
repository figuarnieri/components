import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="circle" cx="64" cy="64" r="22.5"/>
    <StyleSvgChild as="line" x1="64" y1="87" x2="64" y2="107"/>
    <StyleSvgChild as="line" x1="58" y1="95" x2="70" y2="95"/>
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
