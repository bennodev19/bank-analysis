import React from 'react';
import { useDropzone } from 'react-dropzone';

import styled from '@emotion/styled';

import Text from '../../../../components/primitive/text/Text';
import PlusIcon from './components/PlusIcon';

const DropZone: React.FC<Props> = (props) => {
  const { onDrop } = props;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Container {...getRootProps()} isDragActive={isDragActive}>
      <DropField {...getInputProps()} />
      <ContentContainer>
        <PlusIcon />
        <InfoText size={'md'}>
          Add your bank CSV file to start analysing.
        </InfoText>
      </ContentContainer>
    </Container>
  );
};

export default DropZone;

type Props = {
  onDrop: (acceptedFiles: File[]) => void;
};

const Container = styled.div<{ isDragActive: boolean }>`
  display: flex;
  align-items: center;

  padding: 25px;

  background: ${({ theme, isDragActive }) =>
    isDragActive ? theme.colors.layout.bg : theme.colors.layout.lc};
  border: 2px solid
    ${({ theme, isDragActive }) =>
      isDragActive ? theme.colors.layout.p : theme.colors.layout.rHc2};
  border-radius: 5px;

  cursor: pointer;

  filter: drop-shadow(
    0px ${({ isDragActive }) => (isDragActive ? '8px 14px' : '4px 10px')}
      rgba(0, 0, 0, 0.25)
  );

  transition: all 200ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.layout.p};
    background: ${({ theme }) => theme.colors.layout.lc};

    filter: drop-shadow(0px 8px 14px rgba(0, 0, 0, 0.25));
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DropField = styled.input`
  display: flex;
  flex: 1;
`;

const InfoText = styled(Text)`
  color: ${({ theme }) => theme.colors.layout.rHc};
  margin-left: 10px;
`;
