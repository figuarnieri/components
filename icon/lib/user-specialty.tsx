import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="path" d="M98,104c0-18.1-16.8-32.7-34-32.7S30,86,30,104" />
    <StyleSvgChild as="ellipse" cx="64" cy="45.1" rx="21" ry="21.1" />
    <StyleSvgChild
      as="path"
      d="M95.9,71.42v5.8a2,2,0,0,0,2,2l3-3,3,3a2,2,0,0,0,2-2v-5.8a8,8,0,0,1-5,1.8A7.83,7.83,0,0,1,95.9,71.42Z"
    />
    <StyleSvgChild as="circle" cx="100.9" cy="65.12" r="8" />
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
