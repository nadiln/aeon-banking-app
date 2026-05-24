import { TransactionList } from "@/components/organisms/TransactionList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, Text, View } from "react-native";
import {
  RootStackParamList,
  useTransactionListScreen,
} from "./useTransactionListScreen";

type TransactionListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "TransactionList"
>;

interface TransactionListScreenProps {
  navigation: TransactionListScreenNavigationProp;
}

export default function TransactionListScreen({
  navigation,
}: TransactionListScreenProps) {
  const { transactions, isLoading, onTransactionPress } =
    useTransactionListScreen({
      navigation,
    });

  return (
    <View className="flex-1 bg-gradient-to-b from-primaryDark to-background">
      {/* <View className="flex-1 bg-red"> */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="pt-4 pb-8">
          {transactions.length === 0 && !isLoading ? (
            <View className="flex-1 justify-center items-center py-16">
              <Text className="text-textSecondary text-base">
                No transactions found
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
