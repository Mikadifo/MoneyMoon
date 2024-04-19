import type { Transaction } from "../models/transaction";

export const csvToTransactions = (
  csvData: string,
  bankId: string
): Transaction[] => {
  const transactions: Transaction[] = [];
  const lines = csvData.split("\n");
  const headers = new Map<string, number>();

  lines[0].split(",").forEach((header, index) => {
    if (header.includes("Date")) {
      headers.set("date", index);
      return;
    }

    if (header.includes("Type")) {
      headers.set("type", index);
      return;
    }

    if (header.includes("Description")) {
      headers.set("description", index);
      return;
    }

    if (header.includes("Amount")) {
      headers.set("amount", index);
      return;
    }

    if (header.includes("Balance")) {
      headers.set("balance", index);
    }
  });

  if (headers.size !== 5) {
    console.error("All field should be present.");
    return transactions;
  }

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i]) continue;
    const row = lines[i].split(",");
    const transaction: Transaction = {
      bankId,
      date: row[headers.get("date") || 0],
      type: row[headers.get("type") || 0],
      description: row[headers.get("description") || 0],
      amount: +row[headers.get("amount") || 0],
      balance: +row[headers.get("balance") || 0],
    };

    if (transaction.amount === 0) {
      continue;
    }

    transactions.push(transaction);
  }

  return transactions;
};
