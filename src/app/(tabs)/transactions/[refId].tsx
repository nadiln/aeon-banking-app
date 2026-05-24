import { TransactionDetailCard } from "@/components/organisms/TransactionDetailCard";
import { useTransactionDetailScreen } from "@/screens/TransactionDetailScreen/useTransactionDetailScreen";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function TransactionDetailScreen() {
  const { refId } = useLocalSearchParams<{ refId: string }>();
  const router = useRouter();

  if (!refId) {
    return (
      <View className="flex-1 bg-background justify-center items-center">
        <Text className="text-textSecondary text-base">
          Invalid transaction ID
        </Text>
      </View>
    );
  }

  const { transaction } = useTransactionDetailScreen({
    refId,
    navigation: { goBack: () => router.back() } as any,
  });

  if (!transaction) {
    return (
      <View className="flex-1 bg-background justify-center items-center">
        <Text className="text-textSecondary text-base">
          Transaction not found
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-background">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View className="px-6 pt-6 pb-12">
          <TransactionDetailCard transaction={transaction} />
        </View>
      </ScrollView>
    </View>
  );
}
