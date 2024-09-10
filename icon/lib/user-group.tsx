import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="path" d="M86.2,94c0-11.9-11-21.5-22.2-21.5S41.9,82.1,41.9,94" />
    <StyleSvgChild as="ellipse" cx="64" cy="55.3" rx="13.7" ry="13.8" />
    <StyleSvgChild as="path" strokeWidth={4} d="M112,60.2c0-5.9-5.5-10.7-11.1-10.7S89.8,54.3,89.8,60.2" />
    <StyleSvgChild as="ellipse" strokeWidth={4} cx="100.9" cy="40.9" rx="6.8" ry="6.9" />
    <StyleSvgChild as="path" strokeWidth={4} d="M38.1,60.2c0-5.9-5.5-10.7-11.1-10.7S15.9,54.3,15.9,60.2" />
    <StyleSvgChild as="ellipse" strokeWidth={4} cx="27.1" cy="40.9" rx="6.8" ry="6.9" />
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
