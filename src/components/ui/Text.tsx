import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native'

import * as Colors from '~/lib/colors'

export interface TextProps extends RNTextProps {}

const Text = ({ children, style, ...props }: TextProps) => {
  return (
    <RNText style={[styles.text, style]} {...props}>
      {children}
    </RNText>
  )
}

export default Text

const styles = StyleSheet.create({
  text: {
    color: Colors.text,
  },
})
