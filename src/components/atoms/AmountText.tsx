import { Text } from 'react-native';

interface AmountTextProps {
  amount: number;
  className?: string;
}

export function AmountText({ amount, className = '' }: AmountTextProps) {
  const isPositive = amount >= 0;
  const colorClass = isPositive ? 'text-credit' : 'text-debit';
  const formattedAmount = `${isPositive ? '+' : ''}${amount.toFixed(2)}`;

  return (
    <Text className={`font-bold text-lg ${colorClass} ${className}`}>
      {formattedAmount}
    </Text>
  );
}
