import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';

import { styleSheet } from '../../../../../styles';
import Text from './Text';

const CustomComponent = ({
  emoji,
  children,
  ...others
}: {
  emoji: string;
  children: React.ReactNode;
}) => (
  <div {...others}>
    {emoji} {children}
  </div>
);

const StyledText = styled(Text)`
  color: red;
  font-weight: bold;
`;

const useStylesText = styleSheet.withoutParams().create({
  root: css`
    color: #61dafb;
    font-weight: bold;
  `,
});

storiesOf('core/Text', module)
  .add('General usage', () => (
    <>
      <Text>Default text</Text>
      <Text weight={500}>Semibold text</Text>
      <Text weight={700}>Bold text</Text>
      <Text transform="uppercase">uppercase</Text>
      <Text transform="lowercase">LOWERcase</Text>
      <Text component="i">italic</Text>
    </>
  ))
  .add('Custom component', () => (
    <Text component={CustomComponent} emoji="😮">
      Custom component
    </Text>
  ))
  .add('Styled component', () => {
    const { classes } = useStylesText();

    return (
      <div>
        <StyledText>Styled with styled components</StyledText>

        <Text
          css={css`
            color: chocolate;
            font-weight: bold;
          `}
        >
          Styled with emotion
        </Text>

        <Text style={{ color: 'blue', fontWeight: 'bold' }}>
          Styled with style property
        </Text>

        <Text
          styles={(theme) => {
            return {
              root: { color: theme.primitiveColors.red, fontWeight: 'bold' },
            };
          }}
        >
          Styled root with styles property
        </Text>

        <Text
          styles={(theme) => ({
            root: css`
              color: ${theme.primitiveColors.green};
              font-weight: bold;
            `,
          })}
        >
          Styled root with emotion
        </Text>

        <Text styles={{ root: classes.root }}>Styled root with class name</Text>
      </div>
    );
  })
  .add('Gradient', () => (
    <Text variant="gradient" align={'center'}>
      Gradient component
    </Text>
  ))
  .add('Multiline', () => (
    <Text
      style={{
        maxWidth: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
      }}
      component={'div'}
      lineClamp={7}
    >
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui cum optio
        adipisci dolore itaque nobis unde tempore iusto ullam nisi cupiditate
        blanditiis earum minus modi officia ducimus iste, minima incidunt.
        Facilis nihil fugiat soluta repellat voluptatem in quasi dicta explicabo
        dolor animi sed commodi, laborum, optio tempora eius eligendi rem?
      </p>
      <p>
        Quidem saepe magnam soluta eos quis dolorem earum sapiente aspernatur
        iste, consectetur sunt error? Esse assumenda reiciendis vitae.
        Molestiae, fugiat perferendis neque error vero rerum iusto blanditiis
        reprehenderit officia asperiores laboriosam distinctio exercitationem
        pariatur fuga aliquid sint dicta labore minima dolorum quod nobis. Nisi
        ea commodi inventore obcaecati ullam optio.
      </p>
      <p>
        Cumque beatae animi et molestiae ea. Veritatis doloremque repellendus
        accusantium molestiae iusto nihil, pariatur qui obcaecati, natus
        perferendis sapiente voluptate sequi sit ut facilis. Voluptate id modi
        adipisci, saepe, quo aspernatur hic asperiores sequi, temporibus
        doloribus minus. Recusandae, enim molestiae. Iusto beatae facilis quidem
        alias! Suscipit delectus magnam distinctio iste!
      </p>
      <p>
        Eveniet suscipit ipsam tempore sapiente, quos debitis! Quae natus minus
        porro quam voluptate enim et, molestias blanditiis explicabo eius
        aliquid nam ipsa accusantium velit officiis nisi, quos sit. Illo
        nostrum, harum unde error voluptate dolorem, magnam delectus et officiis
        sint, vero atque enim laborum impedit iure ab ipsum consequatur
        voluptates!
      </p>
    </Text>
  ))
  .add('Themes', () => (
    <div style={{ padding: 20 }}>
      {['red', 'green'].map((color) => (
        <Text key={color} color={color} style={{ marginTop: 5 }}>
          {color} text
        </Text>
      ))}
    </div>
  ))
  .add('Sizes', () => (
    <div style={{ padding: 20 }}>
      {['xs', 'sm', 'md', 'lg', 'xl', 10, 20, 30].map((size) => (
        <Text size={size as any} key={size}>
          {size} text
        </Text>
      ))}
    </div>
  ))
  .add('Link', () => (
    <div style={{ padding: 20 }}>
      <Text component="a" href="https://google.com" variant="link">
        Link
      </Text>
    </div>
  ));
