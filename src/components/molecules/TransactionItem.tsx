import { View, Text, TouchableOpacity } from 'react-native';
import { Transaction } from '@/types/transaction';
import { Badge } from '@/components/atoms/Badge';
import { AmountText } from '@/components/atoms/AmountText';
import { Divider } from '@/components/atoms/Divider';

interface TransactionItemProps {
  transaction: Transaction;
  onPress: (refId: string) => void;
}

export function TransactionItem({ transaction, onPress }: TransactionItemProps) {
  const date = new Date(transaction.transferDate);
  const formattedDate = date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const isPositive = transaction.amount >= 0;
  const badgeVariant = isPositive ? 'credit' : 'debit';
  const badgeLabel = isPositive ? 'Credit' : 'Debit';

  return (
    <TouchableOpacity onPress={() => onPress(transaction.refId)}>
      <View className="bg-white px-4 py-3 mb-2 rounded-lg">
        <View className="flex-row justify-between items-start mb-2">
          <View className="flex-1">
            <Text className="text-textPrimary font-semibold text-base">
              {transaction.transferName}
            </Text>
            <Text className="text-textSecondary text-xs mt-1">{formattedDate}</Text>
          </View>
          <Badge label={badgeLabel} variant={badgeVariant} />
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-textSecondary text-sm">{transaction.recipientName}</Text>
          <AmountText amount={transaction.amount} />
        </View>
      </View>
      <Divider className="my-0" />
    </TouchableOpacity>
  );
}
