import { StyleSvg, StyleSvgChild, StyleSvgCircle } from '@/components/icon/style';

const Icon = () => (
  <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <StyleSvgChild as="path" strokeWidth={5} d="M87.46,51.63l-5.76-.82-13.62-2.4a20.57,20.57,0,0,0-8.16,0L46.3,50.81l-5.76.82c-9.1,1.29-15.52,2.51-14.42,2.73-1.05.22,4.76,1.34,13.21,2.56,1.35-2.39,11.88-4.24,24.67-4.24s23.32,1.85,24.67,4.24c8.45-1.22,14.26-2.34,13.21-2.56C103,54.14,96.56,52.92,87.46,51.63Z"/>
    <StyleSvgChild as="path" strokeWidth={5} d="M64,52.68c-13.71,0-24.82,2.13-24.82,4.76V75.23C39.18,77.87,50.29,80,64,80s24.82-2.13,24.82-4.77V57.44C88.82,54.81,77.71,52.68,64,52.68Z"/>
    <StyleSvgChild as="ellipse" strokeWidth={5} cx="64" cy="75.23" rx="24.82" ry="4.77"/>
    <StyleSvgChild as="line" strokeWidth={4} x1="98" y1="66.27" x2="98" y2="54.23"/>
    <StyleSvgChild as="circle" strokeWidth={4} cx="98" cy="69.3" r="2.84"/>
    <StyleSvgCircle cx="64" cy="64" r="56" />
  </StyleSvg>
);

export default Icon;
