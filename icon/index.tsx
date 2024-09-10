import { useEffect, useState, ReactElement, SVGAttributes, forwardRef } from 'react';

export type TNames =
  | 'add'
  | 'android'
  | 'apple'
  | 'attachment'
  | 'ban'
  | 'birthday'
  | 'calendar'
  | 'chart-bar'
  | 'check'
  | 'chevron-top'
  | 'chevron-right'
  | 'chevron-bottom'
  | 'chevron-left'
  | 'clock-alarm'
  | 'donate'
  | 'download'
  | 'edit'
  | 'email'
  | 'exam'
  | 'exit'
  | 'eye-slash'
  | 'eye'
  | 'female'
  | 'file'
  | 'filter'
  | 'graduate'
  | 'health-check'
  | 'home'
  | 'information'
  | 'lock'
  | 'male'
  | 'meal'
  | 'menu'
  | 'mobile'
  | 'money-cycle'
  | 'network'
  | 'none'
  | 'package'
  | 'partnership'
  | 'play-store'
  | 'print'
  | 'resume'
  | 'search'
  | 'times'
  | 'trash'
  | 'unisex'
  | 'units'
  | 'unlock'
  | 'update'
  | 'upload'
  | 'user-add'
  | 'user-ban'
  | 'user-group'
  | 'user-specialty'
  | 'user'
  | 'value'
  | 'video-call'
  | 'warning';

export interface IIcon extends SVGAttributes<SVGElement> {
  name: TNames;
  strokeWidth?: number;
  circle?: boolean;
}

const strokeWidthDefault = 5;

const Icon = forwardRef((props: IIcon, ref) => {
  const { name = 'none', strokeWidth = strokeWidthDefault, circle = false } = props;
  const [stateIcon, setStateIcon] = useState(<></>);
  let mounted = `${name}`;
  useEffect((): (() => void) => {
    import(`./lib/${name}`)
      .then(e => {
        const svg = { ...e.default() };
        const svgProps = { ...svg.props, ...props, 'data-icon': name, ref };
        const { children: childrenSvgProps } = svgProps;
        delete svgProps.name;
        if (childrenSvgProps) {
          const childrenArray =
            childrenSvgProps.constructor.name === 'Array' ? childrenSvgProps : [childrenSvgProps];
          const children = childrenArray.map((item: ReactElement) => {
            const itemClone = { ...item };
            const itemProps = { ...itemClone.props };
            const pathStroke = itemProps.strokeWidth
              ? itemProps.strokeWidth + strokeWidth - strokeWidthDefault
              : strokeWidth;
            itemProps.strokeWidth = pathStroke;
            itemProps.circle = circle;
            itemClone.props = itemProps;
            return itemClone;
          });
          svgProps.children = children;
        }
        delete svgProps.strokeWidth;
        svg.props = svgProps;
        if (mounted !== `${name}_mounted`) {
          setStateIcon(svg);
        }
      })
      .catch(e => {
        console.error(e);
      });
    return () => (mounted = `${name}_mounted`);
  }, [name]);
  return <>{stateIcon}</>;
});

export default Icon;
