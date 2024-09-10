import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="circle" cx="63" cy="64" r="19.3"/>
    <StyleSvgChild as="path" d="M77.1,95A33.34,33.34,0,0,1,63,98a34,34,0,0,1,0-68c18.8,0,36,15.2,36,34a34.24,34.24,0,0,1-3.8,15.6c-3.1,5.1-12.5,6-12.5.5"/>
    <StyleSvgChild as="line" x1="82.8" y1="50.7" x2="82.8" y2="79.6"/>
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
