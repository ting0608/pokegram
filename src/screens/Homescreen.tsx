import {
  View,
  StyleSheet,
  FlatList,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import FeedPost from '../components/FeedPost';
import posts from '../assets/data/posts.json';
import {useRef, useState} from 'react';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        //setActiveImageIndex(viewableItems[0].index || 0);
        setActivePostId(viewableItems[0].item.id);
      }
    },
  );

  return <View style={styles.app}></View>;
};

const styles = StyleSheet.create({
  app: {flex: 1},
});

export default HomeScreen;
