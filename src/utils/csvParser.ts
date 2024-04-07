import type { Transaction } from "../models/transaction";

export const csvToTransactions = (
  csvData: string,
  bankId: string
): Transaction[] => {
  const transactions: Transaction[] = [];
  const lines = csvData.split("\n");
  const headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i]) continue;
    const row = lines[i].split(",");
    const transaction: Transaction = {
      bankId,
      date: row[headers.indexOf("Transaction Date")],
      type: row[headers.indexOf("Transaction Type")],
      description: row[headers.indexOf("Transaction Description")],
      amount: +row[headers.indexOf("Transaction Amount")],
      balance: +row[headers.indexOf("Balance")],
    };

    if (transaction.amount === 0) {
      console.log(transaction);
      continue;
    }

    transactions.push(transaction);
  }

  return transactions;
};
