import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import globalStyles from '../../styles/global'
import TextPageHeader from './texts/TextPageHeader';

interface PageTitleProps {
    title: string
}

const PageTitle = ({title}: PageTitleProps) => {

    return (
        <View>
            <TextPageHeader>{title}</TextPageHeader>
            <View style={globalStyles.horizontalAlign}>
                <View style={styles.rectangle} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rectangle: {
        width: 300,
        height: 5,
        backgroundColor: 'white',
        borderRadius: 40
    },
});

export default PageTitle;