import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="path" d="M74.75,90.51H87.88a18.12,18.12,0,1,0,0-36.24c-.41,0-.82,0-1.23.06a23,23,0,0,0-45.3,0c-.41,0-.82-.06-1.23-.06a18.12,18.12,0,0,0,0,36.24H52.59"/>
    <StyleSvgChild as="polyline" points="56.2 81.99 63.7 90.51 72.22 83.02"/>
    <StyleSvgChild as="line" x1="63.63" y1="66.8" x2="63.73" y2="90.01"/>
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
