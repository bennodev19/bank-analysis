import { createStyles } from '../../../../../styles';
import { AgileNumberSize, AgileTheme } from '../../../../../styles/theme';
import { css } from '@emotion/react';
import { getSizeValue } from '../../../../../styles/theme/utils/getSizeValue';

export const sizes = {
  xs: 30,
  sm: 36,
  md: 42,
  lg: 50,
  xl: 60,
};

function getInvalidStyles({
  invalid,
  theme,
}: {
  invalid: InputStyles['invalid'];
  theme: AgileTheme;
}) {
  if (!invalid) {
    return null;
  }

  const color = theme.colors.denotive.error;

  return css`
    color: ${color};
    border-color: ${color};

    &::placeholder {
      opacity: 1;
      color: ${color};
    }
  `;
}

function getDisabledStyles({
  disabled,
  theme,
}: {
  disabled: InputStyles['disabled'];
  theme: AgileTheme;
}) {
  return disabled
    ? css`
            background-color: ${theme.colors.disabled.d1}
            color: ${theme.colors.disabled.d2};
            opacity: 0.6;
            cursor: not-allowed;

            &::placeholder {
              color: ${theme.colors.disabled.d2},
            },
      `
    : null;
}

export const useStyles = createStyles<InputStyles>()(
  (theme, { size, multiline, radius, invalid, disabled }) => {
    return {
      root: css`
        position: relative;
        border-radius: ${getSizeValue(radius, theme.radius)};
      `,

      input: css`
        display: block;
        text-align: left;
        appearance: none;
        resize: none;
        box-sizing: border-box;

        width: 100%;

        height: ${multiline ? 'auto' : getSizeValue(size, sizes)};
        min-height: ${getSizeValue(size, sizes)}px;
        line-height: ${multiline
          ? theme.lineHeight
          : `${getSizeValue(size, sizes) - 2}px`};

        -webkit-tap-highlight-color: transparent;

        padding-left: ${getSizeValue(size, sizes) / 3}px;
        padding-right: ${getSizeValue(size, sizes) / 3}px;

        font-size: ${getSizeValue(size, theme.fontSizes)}px;

        color: ${theme.colors.layout.hc};
        background-color: ${theme.colors.layout.lc};
        border: 1px solid ${theme.colors.layout.rHc};
        border-radius: ${getSizeValue(radius, theme.radius)}px;

        transition: border-color 100ms ease, box-shadow 100ms ease;

        ${getDisabledStyles({ disabled, theme })}
        ${getInvalidStyles({ invalid, theme })}

        &:focus,
        &:focus-within {
          outline: none;
          border-color: ${theme.colors.interactive.primary.pP2};
        }

        &:disabled {
          background-color: ${theme.colors.disabled.d2};
          color: ${theme.colors.disabled.d1};
          opacity: 70%;
          cursor: not-allowed;
        }
      `,

      withLeftSection: css`
        padding-left: ${getSizeValue(size, sizes)}px !important;
      `,

      leftSection: css`
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        pointer-events: none;
        width: ${getSizeValue(size, sizes)}px;
        color: ${invalid
          ? theme.colors.denotive.error
          : theme.colors.layout.hc};
      `,

      rightSection: css`
        position: absolute;
        z-index: 1;
        top: 0;
        bottom: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
      `,
    };
  }
);

interface InputStyles {
  radius: AgileNumberSize;
  size: AgileNumberSize;
  multiline: boolean;
  invalid: boolean;
  disabled: boolean;
}
