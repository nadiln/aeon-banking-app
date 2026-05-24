import { View, FlatList, ActivityIndicator } from 'react-native';
import { Transaction } from '@/types/transaction';
import { TransactionItem } from '@/components/molecules/TransactionItem';

interface TransactionListProps {
  transactions: Transaction[];
  isLoading: boolean;
  onTransactionPress: (refId: string) => void;
}

export function TransactionList({
  transactions,
  isLoading,
  onTransactionPress,
}: TransactionListProps) {
  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#C8102E" />
      </View>
    );
  }

  return (
    <FlatList
      data={transactions}
      renderItem={({ item }) => (
        <TransactionItem transaction={item} onPress={onTransactionPress} />
      )}
      keyExtractor={(item) => item.refId}
      scrollEnabled={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
    />
  );
}
