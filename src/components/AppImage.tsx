import React from 'react';
import { Image } from 'react-native';

interface AppImageProps {
    source: any;
    style?: any;
}

const AppImage = ({source, style = defaultStyle }: AppImageProps): JSX.Element => {
    return (
        <Image
            resizeMode='contain'
            source={source}
            style={style}
          />
    );
}

const defaultStyle = {
    flex: 1,
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
};

export default AppImage;