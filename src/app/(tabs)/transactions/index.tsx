import { TransactionList } from "@/components/organisms/TransactionList";
import {
    RootStackParamList,
    useTransactionListScreen,
} from "@/screens/TransactionListScreen/useTransactionListScreen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function TransactionsListScreen() {
  const router = useRouter();

  const navigation = {
    navigate: (screen: string, params: any) => {
      if (screen === "TransactionDetail" && params.refId) {
        router.push(`/transactions/${params.refId}`);
      }
    },
    goBack: () => router.back(),
  } as NativeStackNavigationProp<RootStackParamList, "TransactionList">;

  const { transactions, isLoading, onTransactionPress } =
    useTransactionListScreen({
      navigation,
    });

  const totalAmount = transactions.reduce((sum, tx) => sum + tx.amount, 0);
  const creditCount = transactions.filter((tx) => tx.amount >= 0).length;
  const debitCount = transactions.filter((tx) => tx.amount < 0).length;

  return (
    <View className="flex-1 bg-background">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header Section */}
        <View className="bg-primaryDark px-4 pt-6 pb-8">
          <Text className="text-white text-2xl font-bold mb-6">
            Your Transactions
          </Text>

          {/* Summary Cards */}
          <View className="flex-row gap-3 mb-2">
            {/* Total Balance Card */}
            <View className="flex-1 bg-white/10 rounded-xl px-4 py-4 border border-white/20">
              <Text className="text-white/70 text-xs font-medium mb-1">
                Total Balance
              </Text>
              <Text className="text-white text-xl font-bold">
                {totalAmount >= 0 ? "+" : ""}
                {totalAmount.toFixed(2)}
              </Text>
            </View>

            {/* Transaction Count */}
            <View className="flex-1 bg-white/10 rounded-xl px-4 py-4 border border-white/20">
              <Text className="text-white/70 text-xs font-medium mb-1">
                Total Transactions
              </Text>
              <Text className="text-white text-xl font-bold">
                {transactions.length}
              </Text>
            </View>
          </View>

          {/* Credit/Debit Stats */}
          <View className="flex-row gap-3">
            <View className="flex-1 bg-credit/10 rounded-xl px-4 py-3 border border-credit/30">
              <Text className="text-credit text-xs font-medium">Incoming</Text>
              <Text className="text-credit text-base font-bold">
                {creditCount}
              </Text>
            </View>
            <View className="flex-1 bg-debit/10 rounded-xl px-4 py-3 border border-debit/30">
              <Text className="text-debit text-xs font-medium">Outgoing</Text>
              <Text className="text-debit text-base font-bold">
                {debitCount}
              </Text>
            </View>
          </View>
        </View>

        {/* Transactions List */}
        <View className="px-4 pt-6 pb-8">
          <Text className="text-textPrimary text-lg font-bold mb-4">
            Recent Transactions
          </Text>

          {transactions.length === 0 && !isLoading ? (
            <View className="flex-1 justify-center items-center py-16 bg-white/30 rounded-xl">
              <Text className="text-textSecondary text-base">
                No transactions yet
              </Text>
              <Text className="text-textSecondary text-xs mt-2">
                Your transactions will appear here
              </Text>
            </View>
          ) : (
            <TransactionList
              transactions={transactions}
              isLoading={isLoading}
              onTransactionPress={onTransactionPress}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}
