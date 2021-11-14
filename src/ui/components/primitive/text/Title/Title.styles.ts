import { createStyles } from '../../../../../styles';
import { ExtractStylesType } from 'create-styles';
import { HeadingElement } from './Title';

export const useStyles = createStyles<TitleStyles>()(
  ({ theme, params: { element } }) => ({
    root: {
      fontFamily: theme.headings.fontFamily,
      fontWeight: theme.headings.fontWeight,
      fontSize: theme.headings.sizes[element].fontSize,
      lineHeight: theme.headings.sizes[element].lineHeight,
      margin: 0,
      color: theme.colors.layout.hc,
    },
  })
);

type TitleStyles = {
  element: HeadingElement;
};

export type ExtractedStylesType = ExtractStylesType<typeof useStyles>;
