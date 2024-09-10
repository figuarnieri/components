import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild
      as="path"
      d="M74.8,90.5h13.1c10,0,18.1-8.1,18.1-18.1c0-10-8.1-18.1-18.1-18.1c-0.4,0-0.8,0-1.2,0.1c-2-10.7-11.4-18.8-22.7-18.8c-11.3,0-20.7,8.1-22.7,18.8c-0.4,0-0.8-0.1-1.2-0.1c-10,0-18.1,8.1-18.1,18.1c0,10,8.1,18.1,18.1,18.1h12.5"
    />
    <StyleSvgChild as="polyline" points="71.1,75.3 63.6,66.8 55.1,74.3" />
    <StyleSvgChild as="line" x1="63.7" y1="90.5" x2="63.6" y2="67.3" />
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
