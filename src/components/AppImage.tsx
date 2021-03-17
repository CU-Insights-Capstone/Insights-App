import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

interface AppImageProps {
    source: any;
    style?: any;
    onClick?: () => void;
}

const AppImage = ({source, style = defaultStyle, onClick }: AppImageProps): JSX.Element => {
    const image = <Image
        resizeMode='contain'
        source={source}
        style={style}
    />
    if (onClick)
        return  <TouchableOpacity onPress={onClick} style={defaultStyle}>{image}</TouchableOpacity>
    else
        return image;
}

const defaultStyle = {
    flex: 1,
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
};

export default AppImage;