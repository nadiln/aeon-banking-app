import { RootStackParamList } from "@/screens/TransactionListScreen/useTransactionListScreen";
import { useTransactionStore } from "@/store/transactionStore";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback } from "react";

type TransactionDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "TransactionDetail"
>;

interface UseTransactionDetailScreenProps {
  refId: string;
  navigation: TransactionDetailScreenNavigationProp;
}

export function useTransactionDetailScreen({
  refId,
  navigation,
}: UseTransactionDetailScreenProps) {
  const transactions = useTransactionStore((state) => state.transactions);

  const transaction = transactions.find((t) => t.refId === refId);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    transaction,
    onGoBack: handleGoBack,
  };
}
