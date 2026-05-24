import { fetchTransactions } from "@/services/transactionService";
import { useTransactionStore } from "@/store/transactionStore";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useEffect } from "react";

export type RootStackParamList = {
  TransactionList: undefined;
  TransactionDetail: { refId: string };
};

type TransactionListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "TransactionList"
>;

interface UseTransactionListScreenProps {
  navigation: TransactionListScreenNavigationProp;
}

export function useTransactionListScreen({
  navigation,
}: UseTransactionListScreenProps) {
  const { transactions, isLoading, setTransactions, setLoading, setError } =
    useTransactionStore();

  const handleFetchTransactions = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchTransactions();
      setTransactions(data);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch transactions";
      setError(errorMessage);
      console.error("Error fetching transactions:", err);
    } finally {
      setLoading(false);
    }
  }, [setTransactions, setLoading, setError]);

  useEffect(() => {
    handleFetchTransactions();
  }, [handleFetchTransactions]);

  const handleTransactionPress = useCallback(
    (refId: string) => {
      navigation.navigate("TransactionDetail", { refId });
    },
    [navigation],
  );

  return {
    transactions,
    isLoading,
    onTransactionPress: handleTransactionPress,
  };
}
