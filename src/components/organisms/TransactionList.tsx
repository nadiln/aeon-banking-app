import { TransactionItem } from "@/components/molecules/TransactionItem";
import { Transaction } from "@/types/transaction";
import { ActivityIndicator, FlatList, View } from "react-native";

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
      <View className="flex-1 justify-center items-center py-8">
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
      // Allow native scrolling inside the page scroll
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 32,
        gap: 8,
      }}
      ItemSeparatorComponent={() => <></>}
    />
  );
}
