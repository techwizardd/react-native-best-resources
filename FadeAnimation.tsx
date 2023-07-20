import React, { useRef } from 'react';
import { Animated, ViewStyle } from 'react-native';

export type FadeAnimationProps = {
  children: JSX.Element;
  style?: ViewStyle;
  startTime?: number;
  duration?: number;
  isFadeIn?: boolean;
  flex?: number;
};

export const FadeAnimationDefaultProps = {
  startTime: 0,
  duration: 300,
  isFadeIn: false,
};

function FadeAnimation(
  props: FadeAnimationProps & typeof FadeAnimationDefaultProps,
): JSX.Element {
  const { children, style, startTime, duration, isFadeIn, flex } = props;

  const fadeAnim = useRef(new Animated.Value(isFadeIn ? 0 : 1)).current;

  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: isFadeIn ? 1 : 0,
        duration,
        useNativeDriver: true,
      }).start();
    }, startTime);
    return () => {
      clearTimeout(timeOut);
    };
  }, [fadeAnim, duration, startTime, isFadeIn]);

  return (
    <Animated.View
      style={{ flex: flex || undefined, ...style, opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
}

FadeAnimation.defaultProps = FadeAnimationDefaultProps;

export default FadeAnimation;
