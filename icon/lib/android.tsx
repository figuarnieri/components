import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="path" d="M64,46.82a33.66,33.66,0,0,0-33.61,32H97.61A33.66,33.66,0,0,0,64,46.82Z" />
    <StyleSvgChild as="line" x1="40.64" y1="39.17" x2="46.73" y2="49.62" />
    <StyleSvgChild as="line" x1="81.27" y1="49.62" x2="87.36" y2="39.17" />
    <StyleSvgChild strokeWidth={4} as="circle" cx="47.53" cy="66" r="3" />
    <StyleSvgChild strokeWidth={4} as="circle" cx="80.53" cy="66" r="3" />
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
