import React from 'react';
import {
  PolymorphicComponentProps,
  PolymorphicRef,
} from '../../../../../styles';
import { ExtractedStylesType, useStyles } from './Text.styles';
import {
  DefaultProps,
  AgileGradient,
  AgileNumberSize,
} from '../../../../../styles/theme';

const Text: TextComponent = React.forwardRef(
  <C extends React.ElementType = 'p'>(
    props: TextProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const {
      className,
      component,
      children,
      size = 'sm',
      weight,
      transform,
      color,
      variant = 'text',
      lineClamp,
      gradient = { from: 'blue', to: 'red', deg: 45 },
      inline = false,
      inherit = false,
      align,
      styles,
      ...others
    } = props;
    const { cx, classes } = useStyles(
      {
        variant,
        color,
        size,
        lineClamp,
        inline,
        inherit,
        gradient,
        weight,
        transform,
        align,
      },
      { name: 'text', styles }
    );
    const Element: React.ElementType = component || 'p';

    return (
      <Element
        ref={ref}
        className={cx(
          classes.root,
          { [classes.gradient]: variant === 'gradient' },
          className
        )}
        {...others}>
        {children}
      </Element>
    );
  }
) as any;

export default Text;

export interface SharedTextProps {
  size?: AgileNumberSize;
  color?: string;
  weight?: React.CSSProperties['fontWeight'];
  transform?: 'capitalize' | 'uppercase' | 'lowercase';
  align?: 'left' | 'center' | 'right';
  variant?: 'text' | 'link' | 'gradient';
  lineClamp?: number;
  inline?: boolean;
  inherit?: boolean;
  gradient?: AgileGradient;
}

export type TextProps<C extends React.ElementType = 'p'> =
  PolymorphicComponentProps<C, SharedTextProps>;

type TextComponent = <C extends React.ElementType = 'p'>(
  props: TextProps<C> & DefaultProps<ExtractedStylesType>
) => React.ReactElement;
