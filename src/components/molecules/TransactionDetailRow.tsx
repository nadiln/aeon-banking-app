import { Text, View } from "react-native";

interface TransactionDetailRowProps {
  label: string;
  value: string | number;
  isAmount?: boolean;
}

export function TransactionDetailRow({
  label,
  value,
  isAmount = false,
}: TransactionDetailRowProps) {
  const displayValue = isAmount
    ? typeof value === "number"
      ? `${value >= 0 ? "+" : ""}${value.toFixed(2)}`
      : value
    : value;

  const valueColorClass =
    isAmount && typeof value === "number" && value < 0 ? "text-debit" : "";

  return (
    <View className="flex-row justify-between items-center py-3 px-4">
      <Text className="text-textSecondary text-sm font-medium">{label}</Text>
      <Text
        className={`text-textPrimary font-semibold text-base ${valueColorClass} ${
          isAmount ? "text-lg font-bold" : ""
        }`}
      >
        {displayValue}
      </Text>
    </View>
  );
}
