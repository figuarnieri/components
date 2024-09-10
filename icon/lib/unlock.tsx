import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="line" x1="64" y1="87.5" x2="64" y2="75.5" />
    <StyleSvgChild
      as="path"
      d="M84.27,41.26C84.27,30.07,75.19,21,64,21h0c-11.19,0-20.27,9.07-20.27,20.26v14.79"
    />
    <StyleSvgChild
      as="path"
      d="M89.26,99H38.74C35.02,99,32,95.98,32,92.26V62.79c0-3.72,3.02-6.74,6.74-6.74h50.53 c3.72,0,6.74,3.02,6.74,6.74v29.47C96,95.98,92.98,99,89.26,99z"
    />
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
