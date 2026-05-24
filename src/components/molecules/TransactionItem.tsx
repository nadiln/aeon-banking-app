import { AmountText } from "@/components/atoms/AmountText";
import { Badge } from "@/components/atoms/Badge";
import { Transaction } from "@/types/transaction";
import { Text, TouchableOpacity, View } from "react-native";

interface TransactionItemProps {
  transaction: Transaction;
  onPress: (refId: string) => void;
}

export function TransactionItem({
  transaction,
  onPress,
}: TransactionItemProps) {
  const date = new Date(transaction.transferDate);
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const isPositive = transaction.amount >= 0;
  const badgeVariant = isPositive ? "credit" : "debit";
  const badgeLabel = isPositive ? "Credit" : "Debit";

  // Icon indicator
  const iconSymbol = isPositive ? "↓" : "↑";
  const iconColor = isPositive ? "text-credit" : "text-debit";

  return (
    <TouchableOpacity
      onPress={() => onPress(transaction.refId)}
      activeOpacity={0.7}
    >
      <View
        className="bg-white rounded-xl mb-3 px-4 py-4 shadow-sm border border-border/30"
        style={{ elevation: 3 }}
      >
        <View className="flex-row items-center gap-3">
          {/* Icon Circle */}
          <View
            className={`w-12 h-12 rounded-full items-center justify-center ${isPositive ? "bg-credit/10" : "bg-debit/10"}`}
          >
            <Text className={`text-xl font-bold ${iconColor}`}>
              {iconSymbol}
            </Text>
          </View>

          {/* Content */}
          <View className="flex-1">
            <View className="flex-row justify-between items-start mb-1">
              <Text className="text-textPrimary font-semibold text-base flex-1 pr-2">
                {transaction.transferName}
              </Text>
              <Badge label={badgeLabel} variant={badgeVariant} />
            </View>
            <Text className="text-textSecondary text-xs mb-1">
              {transaction.recipientName}
            </Text>
            <Text className="text-textSecondary text-xs opacity-75">
              {formattedDate}
            </Text>
          </View>

          {/* Amount */}
          <View className="items-end">
            <AmountText amount={transaction.amount} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
