import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="path" d="M88.13,34.91a4,4,0,0,0-4-4H43.87a4,4,0,0,0-4,4V50.2H88.13Z"/>
    <StyleSvgChild as="rect" x="39.87" y="74.33" width="48.27" height="22.76" rx="4"/>
    <StyleSvgChild as="path" d="M95,50.2H33a4,4,0,0,0-4,4V84.46a4,4,0,0,0,4,4h6.86V78.33a4,4,0,0,1,4-4H84.13a4,4,0,0,1,4,4V88.46H95a4,4,0,0,0,4-4V54.2A4,4,0,0,0,95,50.2Z"/>
    <StyleSvgChild as="line" x1="37.87" y1="58.82" x2="42.25" y2="58.82"/>
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
