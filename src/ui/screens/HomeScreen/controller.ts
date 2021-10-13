import { ui, csv } from '../../../core';
import bank from '../../../core/entities/bank';
import { BankFileDataType } from '../../../core/entities/bank/bank.types';

export const onDrop = async (acceptedFiles: File[]) => {
  ui.setIsLoading(true);

  await ui.sleep(3000); // TODO REMOVE

  acceptedFiles.forEach(async (file) => {
    // Parse CSV File to Javascript object array
    const csvData = await csv.parseCSVFile(file);

    if (csvData != null) {
      // Parse Javascript object array to valid bank data
      if (bank.parseCSVData(csvData) != null) {
        ui.toast(`Proceeded '${ui.truncate(file.name)}'!`, 'success');
      }
    }
  });

  ui.setIsLoading(false);
};

export const formatBankDataByMonth = (bankData: BankFileDataType) => {
  // TODO
};