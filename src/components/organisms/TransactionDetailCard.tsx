import { Divider } from "@/components/atoms/Divider";
import { Transaction } from "@/types/transaction";
import { Share, Text, TouchableOpacity, View } from "react-native";

interface TransactionDetailCardProps {
  transaction: Transaction;
}

export function TransactionDetailCard({
  transaction,
}: TransactionDetailCardProps) {
  const date = new Date(transaction.transferDate);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const isPositive = transaction.amount >= 0;

  const handleShare = async () => {
    try {
      const message = `Transaction Details\nRef: ${transaction.refId}\nDate: ${formattedDate}\nRecipient: ${transaction.recipientName}\nAmount: ${transaction.amount >= 0 ? "+" : ""}${transaction.amount.toFixed(2)}`;
      await Share.share({
        message,
        title: "Share Transaction Details",
      });
    } catch (error) {
      console.error("Error sharing transaction:", error);
    }
  };

  return (
    <View className="gap-4">
      {/* Amount Section */}
      <View
        className={`rounded-2xl px-6 py-8 ${isPositive ? "bg-credit/10" : "bg-debit/10"}`}
      >
        <Text className="text-textSecondary text-sm font-medium mb-2">
          Amountsss
        </Text>
        <Text
          className={`text-5xl font-bold ${
            isPositive ? "text-credit" : "text-debit"
          }`}
        >
          {isPositive ? "+" : ""}
          {transaction.amount.toFixed(2)}
        </Text>
        <View className="mt-4 pt-4 border-t border-border/30">
          <Text className="text-textSecondary text-xs">
            {isPositive ? "Incoming" : "Outgoing"} Payment
          </Text>
        </View>
      </View>

      {/* Transaction Info Card */}
      <View className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/30">
        {/* Header */}
        <View className="bg-primaryDark px-6 py-6">
          <Text className="text-white text-2xl font-bold mb-1">
            {transaction.transferName}
          </Text>
          <Text className="text-white/80 text-sm">
            {transaction.recipientName}
          </Text>
        </View>

        <Divider />

        {/* Details Grid */}
        <View className="px-6 py-4">
          <Text className="text-textPrimary font-semibold text-sm mb-4">
            Transaction Details
          </Text>

          <View className="gap-4">
            {/* Reference ID */}
            <View>
              <Text className="text-textSecondary text-xs font-medium mb-1">
                Reference ID
              </Text>
              <Text className="text-textPrimary font-mono text-sm">
                {transaction.refId}
              </Text>
            </View>

            <Divider />

            {/* Date & Time */}
            <View>
              <Text className="text-textSecondary text-xs font-medium mb-1">
                Date & Time
              </Text>
              <Text className="text-textPrimary text-sm">{formattedDate}</Text>
            </View>

            <Divider />

            {/* Recipient */}
            <View>
              <Text className="text-textSecondary text-xs font-medium mb-1">
                Recipient
              </Text>
              <Text className="text-textPrimary text-sm">
                {transaction.recipientName}
              </Text>
            </View>

            <Divider />

            {/* Transfer Type */}
            <View>
              <Text className="text-textSecondary text-xs font-medium mb-1">
                Transfer Type
              </Text>
              <Text className="text-textPrimary text-sm">
                {transaction.transferName}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="gap-3 px-6">
        <TouchableOpacity
          onPress={handleShare}
          className="bg-primary rounded-xl py-4 items-center shadow-sm"
          activeOpacity={0.8}
        >
          <Text className="text-white font-bold text-base">Share Details</Text>
        </TouchableOpacity>

        <View className="bg-background rounded-xl py-4 items-center border border-border">
          <Text className="text-textSecondary font-medium text-sm">
            {isPositive ? "Money Received" : "Money Sent"}
          </Text>
        </View>
      </View>
    </View>
  );
}
