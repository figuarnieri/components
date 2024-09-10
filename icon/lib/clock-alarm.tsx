import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="ellipse" cx="63.9" cy="64" rx="37.8" ry="38" />
    <StyleSvgChild as="line" x1="26" y1="37.1" x2="37" y2="26" />
    <StyleSvgChild as="line" x1="102" y1="37.1" x2="91" y2="26" />
    <StyleSvgChild as="line" x1="64" y1="64.4" x2="79.3" y2="78" />
    <StyleSvgChild as="line" x1="64" y1="38.2" x2="64" y2="64.4" />
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
