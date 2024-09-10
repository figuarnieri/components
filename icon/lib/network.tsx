import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="circle" cx="64.2" cy="42.2" r="16"/>
    <StyleSvgChild as="circle" cx="64.2" cy="91.2" r="10"/>
    <StyleSvgChild as="circle" cx="33.8" cy="71.2" r="10"/>
    <StyleSvgChild as="line" x1="64.2" y1="58.8" x2="64.2" y2="80.8"/>
    <StyleSvgChild as="line" x1="52" y1="53" x2="41.2" y2="63.8"/>
    <StyleSvgChild as="circle" cx="93.8" cy="72.2" r="10"/>
    <StyleSvgChild as="line" x1="75.5" y1="54" x2="86.8" y2="65.2"/>
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
