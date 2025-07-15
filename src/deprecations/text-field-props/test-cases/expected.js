import DsTextField from '@mui/material/TextField';
import { DsTextField as DsTextField } from '@mui/material';

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
