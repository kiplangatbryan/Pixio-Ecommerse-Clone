
import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';

import SectionTitle from './SectionTitle';
import PillButton from './PillButton';

export default function Wardrobe({ categories }) {
  return (
    <View>
        <View style={ styles.sectionContainer }>
            <SectionTitle
                title={ 'Set Your Wardrobe With Our Amazing Selection' }
            />
        </View>

        <FlatList
            data={ categories }
            style={{paddingBottom: 20}}
            showsHorizontalScrollIndicator={false}
            horizontal={ true }
            keyExtractor={ ( item ) => item.id }
            renderItem={ ( { item } ) => {
               
                return <View style={ styles.categoryContainer }>
                    <Image
                        style={ styles.image }
                        source={ item.pictureUrl }
                    />

                   <PillButton label={item.name} onPress={() => {}} />
                </View>;
            }
            }
        />
    </View>
);
}

const styles = StyleSheet.create( {
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    },
    sectionContainer: {
        paddingHorizontal: 30,
        paddingVertical: 20
    },
    categoryContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 15,
        marginHorizontal: 30,
    },
    image: {
        objectFit: 'cover',
        width: 80,
        height: 80,
        borderRadius: 60
    },
    
} );