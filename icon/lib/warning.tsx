import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="path" d="M57.9,35.4a7.12,7.12,0,0,1,12.2,0L82.6,56.5,95.1,77.6A6.87,6.87,0,0,1,89,87.9H39a6.87,6.87,0,0,1-6.1-10.3L45.4,56.5Z" />
    <StyleSvgChild as="line" x1="64" y1="49.2" x2="64" y2="68.4" />
    <StyleSvgChild as="line" x1="64" y1="74.8" x2="64" y2="76.8" />
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
