# react-native-form-fields

Form Fields for React Native

## Installation

Install package using

`npm install m-react-native-form-fields` or `yarn add m-react-native-form-fields`

## Components

- [Text Input](#text-input)
- [Button](#button)
- [Radio Button](#radio-button)
- [Switch](#switch)

More components coming soon

## Usage

## Text Input

```
import {TextInput} from 'm-react-native-form-fields'
```

### Props

<b>`label`</b>\
The label to display.\
Type: `string`\
Default: 'label'

<b>`withLabel`</b>\
Hide/show the label\
Type: `boolean`\
Default: true

<b>`variant`</b> \
The variant to use.\
Type: `"standard" | "outlined"`\
Default: "outlined"

<b>`leading`</b>\
Element placed before the text input.\
Type: React.ReactNode | function\
Optional: Yes\
Example: `leading = {<Icon name="check" color={'red'} size={18} />}` or `leading={props => {return <Icon name="eye" {...props} />}}`

<b>`trailing`</b>\
Element placed before the text input.\
Type: React.ReactNode | function\
Optional: Yes\
Example: `trailing = {<Icon name="check" color={'red'} size={18} />}` or `trailing={props => {return <Icon name="eye" {...props} />}}`

<b>`labelStyles`</b>\
Style to give the label.\
Type: `StyleProp<TextStyles>`\
optional: Yes\
default = {}\

<b>`containerStyles`</b>\
Style to give the container of the input.\
Type: `StyleProp<ViewStyles>`\
optional: Yes\
default = {}\

<b>`textStyles`</b>\
Style to give the text of the input.\
Type: `StyleProp<TextStyles>`\
optional: Yes\
default = {}\

<b>`errorState`</b>\
Flag in case of error input.\
Type: `boolean`\
optional: Yes\
default = {false}\

<b>`errorText`</b>\
Text to show in case of error.\
Type: `string`\
optional: Yes\
default = 'error'\

```
...TextInputProps
```

## Button

```
import {Button} from 'm-react-native-form-fields'
```

### Props

<b>`label`</b>\
The label on the button.\
Type: `string`\
Default: Button

<b>`variant`</b>\
The variant to use.\
Type: `"outlined" | "filled"`\
default: "filled"

<b>`size`</b>\
The size to use.\
Type: `"small" | "full"`\
default: "full"

<b>`withLoader`</b>\
has loader or not.\
Type: `boolean`\
Default: false

<b>`isLoading`</b>\
Show/Hide loading icon.\
Type:`boolean`\
Default: false

<b>`loaderSize`</b>\
The position of the loader, `leading=before label`, `trailing=after label`.\
Type: "leading" | "trailing"\
Default: "leading"

<b>`loaderPosition`</b>\
The size of the loader.\
Type: "small" | "large"\
Default: "small"

<b>`loaderColor`</b>\
The color of the loader.\
Type: "String"\
Default: "white" for filled variant | "black" for outlined variant\

<b>`leading`</b>\
Element placed before the text input.\
Type: React.ReactNode | function\
Optional: Yes\
Example: `leading = {<Icon name="check" color={'red'} size={18} />}` or `leading={props => {return <Icon name="eye" {...props} />}}`

<b>`trailing`</b>\
Element placed before the text input.\
Type: React.ReactNode | function\
Optional: Yes\
Example: `trailing = {<Icon name="check" color={'red'} size={18} />}` or `trailing={props => {return <Icon name="eye" {...props} />}}`

<b>`buttonStyle`</b>\
Style to give conatiner of button.\
Type: `StyleProp<ViewStyle>`\
optional: Yes\
Default: {}

<b>`textStyles`</b>\
Style to give the label of the button.\
Type: `StyleProp<TextStyles>`\
optional: Yes\
Default: {}

<b>`isLabelUppercase`</b>\
To convert label to uppercase.\
Type: `boolean`\
Default: false

<b>`theme`</b>\
Changes the background color and color of the label.\
Type: 'dark-red' | 'light-red' | 'black-white'
Default: 'dark-red'\
In case you want to give custom colors, edit buttonStyle and textStyles.

```
...TouchableOpacityProps
```

## Radio Button

```
import {Radio} from 'm-react-native-form-fields'
```

### Props

<b>`label`</b>\
The label of the radio button.\
Type: `string`\
Default: Label

<b>`labelPosition`</b>\
The positon of the label.\
Type: 'top' | 'right' | 'bottom' | 'left'\
default: "left"

<b>`isChecked`</b>\
Value of the radio button.\
Type: `boolean`\
Default: false

<b>`checkedColor`</b>\
The color of the checked radio button.\
Type: `string`\
default: '#56AFF0'

<b>`uncheckedColor`</b>\
The color of the unchecked radio button.\
Type: `string`\
default: '#E9E9E9'

<b>`radioButtonShape`</b>\
The shape of the radio button.\
Type: 'circle' | 'square'\
default: 'square'

<b>`radioButtonType`</b>\
The type of radio button.\
`icon = shows check icon when isChecked={true}`\
`color = shows filled color when isChecked={true}`\
Type: 'icon' | 'color'\
Default: 'color'

<b>`containerStyles`</b>\
The styles of the radio button container.\
Type: `StyleProp<ViewStyle>`\
Default: {}

## Switch

```
import {Switch} from 'm-react-native-form-fields'
```

<b>`label`</b>\
The label of the radio button.\
Type: `string`\
Default: Switch

<b>`labelPosition`</b>\
The positon of the label.\
Type: 'leading' | 'trailing'\
default: "leading"

<b>`containerStyles`</b>\
The styles of the switch container.\
Type: `StyleProp<ViewStyle>`\
Default: {}

```
...SwitchProps
```
