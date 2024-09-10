import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="path" d="M98,104c0-18.1-16.8-32.7-34-32.7S30,86,30,104"/>
    <StyleSvgChild as="ellipse" cx="64" cy="45.1" rx="21" ry="21.1"/>
    <StyleSvgChild as="line" x1="92.12" y1="64" x2="111.4" y2="64"/>
    <StyleSvgChild as="line" x1="101.76" y1="73.64" x2="101.76" y2="54.36"/>
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
