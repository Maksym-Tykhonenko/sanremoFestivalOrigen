import {ImageBackground} from 'react-native';

const ImagedBackground = ({children, style}) => {
  return (
    <ImageBackground
      style={[style, {flex: 1}]}
      source={require('../../assets/img/bg/backgr.png')}>
      {children}
    </ImageBackground>
  );
};

export default ImagedBackground;
