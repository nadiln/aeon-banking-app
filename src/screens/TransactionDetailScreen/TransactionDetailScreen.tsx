import { TransactionDetailCard } from "@/components/organisms/TransactionDetailCard";
import { RootStackParamList } from "@/screens/TransactionListScreen/useTransactionListScreen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, Text, View } from "react-native";
import { useTransactionDetailScreen } from "./useTransactionDetailScreen";

type TransactionDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "TransactionDetail"
>;

interface TransactionDetailScreenProps {
  navigation: TransactionDetailScreenNavigationProp;
  route: {
    params: {
      refId: string;
    };
  };
}

export default function TransactionDetailScreen({
  navigation,
  route,
}: TransactionDetailScreenProps) {
  const { refId } = route.params;
  const { transaction } = useTransactionDetailScreen({
    refId,
    navigation,
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
        <View className="pt-6 pb-8">
          <TransactionDetailCard transaction={transaction} />
        </View>
      </ScrollView>
    </View>
  );
}
