# react-native-form-fields

Form Fields for React Native

## Installation

Install package using

`npm install m-react-native-form-fields` or `yarn add m-react-native-form-fields`

## Usage

## Text Input

```
import {TextInput} from 'm-react-native-form-fields'
```

### Props

`label`\
The label to display.\
Type: string;\
Default: 'label'\
<br />
`withLabel`\
Hide/show the label\
Type: boolean;\
Default: true\
<br />
`variant`\
The variant to use.\
Type: "standard" | "outlined"\
Default: "outlined"\
<br />
`leading`\
Element placed before the text input.\
Type: React.ReactNode | function\
Optional: Yes\
Example: `leading = {<Icon name="check" color={'red'} size={18} />}` or `leading={props => {return <Icon name="eye" {...props} />;}}`
<br />
<br />
`trailing`\
Element placed before the text input.\
Type: React.ReactNode | function\
Optional: Yes\
Example: `trailing = {<Icon name="check" color={'red'} size={18} />}` or `trailing={props => {return <Icon name="eye" {...props} />;}}`
<br />
<br />
`labelStyles`\
Style to give the label.\
Type: `StyleProp<TextStyles>`\
optional: Yes\
default = {}\
<br />
`containerStyles`\
Style to give the container of the input.\
Type: `StyleProp<ViewStyles>`\
optional: Yes\
default = {}\
<br />
`textStyles`
Style to give the text of the input.\
Type: `StyleProp<TextStyles>`\
optional: Yes\
default = {}\

```
...TextInputProps
```

## Button

```
import {Button} from 'm-react-native-form-fields'
```

### Props

`label`\
The label on the button.\
Type: string;\
Default: Button\
<br />
`variant`\
The variant to use.\
Type: "outlined" | "filled"\
default: "filled"\
<br />
`size`\
The size to use.\
Type: "small" | "medium" | "full"\
default: "small"\
<br />
`withLoader`\
has loader or not.\
Type: boolean;\
Default: false\
<br />
`isLoading`\
Show/Hide loading icon.\
Type: boolean;\
Default: false\
<br />
`loaderSize`\
The position of the loader, `leading=before label`, `trailing=after label`.\
Type: "leading" | "trailing"\
Default: "leading"\
<br />
`loaderPosition`\
The size of the loader.\
Type: "small" | "large"\
Default: "small"\
<br />
`leading`\
Element placed before the text input.\
Type: React.ReactNode | function\
Optional: Yes\
Example: `leading = {<Icon name="check" color={'red'} size={18} />}` or `leading={props => {return <Icon name="eye" {...props} />;}}`
<br />
<br />
`trailing`\
Element placed before the text input.\
Type: React.ReactNode | function\
Optional: Yes\
Example: `trailing = {<Icon name="check" color={'red'} size={18} />}` or `trailing={props => {return <Icon name="eye" {...props} />;}}`
<br />
<br />
`buttonStyle`\
Style to give conatiner of button.\
Type: `StyleProp<ViewStyle>`\
optional: Yes\
Default: {}\
<br />
`textStyles`\
Style to give the label of the button.\
Type: `StyleProp<TextStyles>`\
optional: Yes\
Default: {}\

```
...TouchableOpacityProps
```

## Radio

```
import {Radio} from 'm-react-native-form-fields'
```

### Props

`label`\
The label of the radio button.\
Type: string;\
Default: Label\
<br />
`labelPosition`\
The positon of the label.\
Type: 'top' | 'right' | 'bottom' | 'left'\
default: "left"\
<br />
`isChecked`\
Value of the radio button.\
Type: boolean;\
Default: false\
<br />
`checkedColor`\
The color of the checked radio button.\
Type: string;\
default: '#56AFF0'\
<br />
`uncheckedColor`\
The color of the unchecked radio button.\
Type: string;\
default: '#E9E9E9'\
<br />
`radioButtonShape`\
The shape of the radio button.\
Type: 'circle' | 'square'\
default: 'square'\
<br />
`radioButtonType`\
The type of radio button.\
`icon = shows check icon when isChecked={true}`\
`color = shows filled color when isChecked={true}`\
Type: 'icon' | 'color';\
Default: 'color'\
<br />
`containerStyles`\
The styles of the radio button container.\
Type: `StyleProp<ViewStyle>`\
Default: {}

## Switch

```
import {Switch} from 'm-react-native-form-fields'
```

`label`\
The label of the radio button.\
Type: string;\
Default: Switch\
<br />
`labelPosition`\
The positon of the label.\
Type: 'leading' | 'trailing'\
default: "leading"\
<br />
`containerStyles`\
The styles of the switch container.\
Type: `StyleProp<ViewStyle>`\
Default: {}

```
...SwitchProps
```
