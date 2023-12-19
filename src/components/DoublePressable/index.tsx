import {View, Text, Pressable} from 'react-native';
interface IDoublePressable {
  onDoublePress?: () => void;
  children: React.ReactNode;
}
const DoublePressable = ({
  onDoublePress = () => {},
  children,
}: IDoublePressable) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      onDoublePress();
    }
    lastTap = now;
  };

  return (
    <Pressable onPress={handleDoublePress}>
      <Text>{children}</Text>
    </Pressable>
  );
};
export default DoublePressable;
