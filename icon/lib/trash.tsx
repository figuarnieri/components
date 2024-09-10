import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="path" d="M74.1,35v-3a3.62,3.62,0,0,0-3.61-3.62h-13a3.62,3.62,0,0,0-3.61,3.62v3"/>
    <StyleSvgChild as="path" d="M42.12,46.72l-.13,0v47a3.61,3.61,0,0,0,3.61,3.61H82.4A3.61,3.61,0,0,0,86,93.71v-47l-.13,0Z"/>
    <StyleSvgChild as="rect" x="38.5" y="35.87" width="50.99" height="10.84" rx="3.61"/>
    <StyleSvgChild as="line" x1="52.25" y1="60.01" x2="52.25" y2="84.03"/>
    <StyleSvgChild as="line" x1="64" y1="60.01" x2="64" y2="84.03"/>
    <StyleSvgChild as="line" x1="75.75" y1="60.01" x2="75.75" y2="84.03"/>
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
