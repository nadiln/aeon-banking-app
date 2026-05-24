import { View, TouchableOpacity, Text, Share } from 'react-native';
import { Transaction } from '@/types/transaction';
import { TransactionDetailRow } from '@/components/molecules/TransactionDetailRow';
import { Divider } from '@/components/atoms/Divider';

interface TransactionDetailCardProps {
  transaction: Transaction;
}

export function TransactionDetailCard({ transaction }: TransactionDetailCardProps) {
  const date = new Date(transaction.transferDate);
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const handleShare = async () => {
    try {
      const message = `Transaction Details\nRef: ${transaction.refId}\nDate: ${formattedDate}\nRecipient: ${transaction.recipientName}\nAmount: ${transaction.amount >= 0 ? '+' : ''}${transaction.amount.toFixed(2)}`;
      await Share.share({
        message,
        title: 'Share Transaction Details',
      });
    } catch (error) {
      console.error('Error sharing transaction:', error);
    }
  };

  return (
    <View className="bg-white rounded-xl mx-4 shadow-lg overflow-hidden">
      {/* Header Section */}
      <View className="bg-primaryDark px-4 py-4">
        <Text className="text-white text-lg font-bold">{transaction.transferName}</Text>
        <Text className="text-white/80 text-xs mt-1">{transaction.recipientName}</Text>
      </View>

      <Divider />

      {/* Details Section */}
      <TransactionDetailRow label="Reference ID" value={transaction.refId} />
      <Divider />

      <TransactionDetailRow label="Date & Time" value={formattedDate} />
      <Divider />

      <TransactionDetailRow label="Recipient Name" value={transaction.recipientName} />
      <Divider />

      <TransactionDetailRow label="Transfer Name" value={transaction.transferName} />
      <Divider />

      <View className="px-4 py-3">
        <Text className="text-textSecondary text-sm font-medium mb-2">Amount</Text>
        <Text
          className={`font-bold text-2xl ${
            transaction.amount >= 0 ? 'text-credit' : 'text-debit'
          }`}
        >
          {transaction.amount >= 0 ? '+' : ''}
          {transaction.amount.toFixed(2)}
        </Text>
      </View>

      <Divider />

      {/* Share Button */}
      <TouchableOpacity
        onPress={handleShare}
        className="bg-primary m-4 rounded-lg py-3 items-center"
      >
        <Text className="text-white font-bold text-base">Share Transaction</Text>
      </TouchableOpacity>
    </View>
  );
}
