import { useAgile } from '@agile-ts/react';
import React from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { bank } from '../../../core';
import { BANK_DATA } from '../../../core/entities/bank/bank.controller';
import { IS_LOADING } from '../../../core/entities/ui/ui.controller';
import PageLayout from '../../components/layout/PageLayout';
import BarChart from './components/Charts/BarChart';
import { useChartData } from './hooks/useChartData';

const ChartScreen: React.FC = () => {
  const [isLoading, bankData] = useAgile([IS_LOADING, BANK_DATA]);
  const chartData = useChartData(
    bankData.length > 0 ? bank.getDataset(bankData[0])?.dataset : null
  );

  if (chartData == null) return <Redirect to="/" />;

  return (
    <PageLayout isLoading={isLoading}>
      <Container>{!isLoading && <BarChart data={chartData} />}</Container>
    </PageLayout>
  );
};

export default ChartScreen;

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
