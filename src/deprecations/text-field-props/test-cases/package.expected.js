import DsTextField from '@org/ui/material/TextField';
import { DsTextField as MyTextField } from '@org/ui/material';

<DsTextField
  slotProps={{
    input: CustomInputProps,
    htmlInput: CustomHtmlInputProps,
    select: CustomSelectProps,
    inputLabel: CustomInputLabelProps,
    formHelperText: CustomFormHelperProps
  }} />;
<MyTextField
  slotProps={{
    input: CustomInputProps,
    htmlInput: CustomHtmlInputProps,
    select: CustomSelectProps,
    inputLabel: CustomInputLabelProps,
    formHelperText: CustomFormHelperProps
  }} />;
<NonMuiTextField
  InputProps={CustomInputProps}
  inputProps={CustomHtmlInputProps}
  SelectProps={CustomSelectProps}
  InputLabelProps={CustomInputLabelProps}
  FormHelperTextProps={CustomFormHelperProps}
/>;
