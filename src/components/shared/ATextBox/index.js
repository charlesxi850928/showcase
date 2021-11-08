import {forwardRef, useState} from 'react'
import {OutlinedInput, InputAdornment, Button, InputLabel, Box, Select, Stack, Typography} from '@mui/material'
import {Check, ErrorOutline, Visibility, VisibilityOff} from '@mui/icons-material'
import PropTypes from 'prop-types'
import {visuallyHidden} from '@mui/utils'

const iconList = {
  success: <Check sx={{mr: 1}} />,
  error: <ErrorOutline sx={{mr: 1}} />
}

const getAdornment = (type, showPassword, passwordVisibilityLabel, setShowPassword, severity, helperText, select) => {
  if (type === 'password') {
    return (
      <InputAdornment position='end'>
        <Button
          aria-label={passwordVisibilityLabel}
          onClick={() => setShowPassword((preState) => !preState)}
          disableElevation
          variant='contained'
          sx={{
            py: 1,
            borderRadius: '0 4px 4px 0px'
          }}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </Button>
      </InputAdornment>
    )
  }
  if (select) {
    return null
  }
  if (helperText && severity) {
    return (
      <InputAdornment position='end' sx={{color: `${severity}.main`}}>
        {iconList[severity]}
      </InputAdornment>
    )
  }

  return null
}

/**
 * @typedef {import('@mui/material').TextFieldProps} TextFieldProps
 *
 * @typedef {object} LabelProps
 * @prop {string} [label]
 * @prop {'large' | 'small' } [labelSize] -label font size, large -16px, small -14px
 * @prop {bool} [required] is required
 * @prop {'row'|'column'} [direction] direction
 *
 * @typedef {object} InnerProps
 * @prop {LabelProps} labelProps -label props
 * @prop {'error' | 'success' } [severity] - The type of help text. It should be 'error', 'success'
 * @prop {bool} [positiveInteger] is positive integer. It is used when type=number
 *
 * @typedef {InnerProps & TextFieldProps} TextBoxBase
 */

/**
 * ATextBoxBase Component
 *
 * @type {React.FC<TextBoxBase>}
 */

const ATextBoxBase = forwardRef((props, ref) => {
  const {
    id,
    placeholder,
    onChange,
    onBlur,
    onFocus,
    autoComplete,
    helperText = '',
    value,
    type = 'text',
    positiveInteger = false,
    fullWidth = true,
    select = false,
    labelProps = {},
    disabled,
    severity,
    children,
    SelectProps,
    InputProps,
    inputProps,
    ...other
  } = props
  const {label, labelSize = 'large', required = false, direction = 'column'} = labelProps
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined
  const inputLabelId = label && id ? `${id}-label` : undefined
  const requiredText = 'required'
  const passwordVisibilityLabel = 'toggle password visibility'
  const [showPassword, setShowPassword] = useState(false)
  const labelAlignItems = direction === 'column' ? '' : 'center'
  const labelSpacing = direction === 'column' ? 0 : 2
  let newType = type
  if (type === 'password') {
    newType = !showPassword ? 'password' : 'text'
  }

  const InputElement = (
    <OutlinedInput
      error={severity === 'error' && helperText !== ''}
      data-ref={id}
      id={id}
      disabled={disabled}
      aria-describedby={helperTextId}
      placeholder={placeholder}
      type={newType}
      fullWidth={fullWidth}
      size='small'
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={(ev) => {
        if (type === 'number' && positiveInteger) {
          if (['e', '+', '-', '.'].includes(ev.key)) {
            ev.preventDefault()
          }
        }
      }}
      sx={{pr: 0, my: 0.5}}
      endAdornment={getAdornment(
        type,
        showPassword,
        passwordVisibilityLabel,
        setShowPassword,
        severity,
        helperText,
        select
      )}
      inputProps={inputProps}
      {...InputProps}
    />
  )

  return (
    <Box ref={ref} {...other}>
      <Stack direction={direction} alignItems={labelAlignItems} spacing={labelSpacing}>
        {label && (
          <InputLabel id={inputLabelId} data-ref={inputLabelId} htmlFor={id}>
            <Stack direction='row'>
              <Typography color='textPrimary' variant={labelSize === 'large' ? 'body1' : 'body2'}>
                {label}
              </Typography>
              {required && (
                <>
                  <Typography color='error' aria-hidden sx={{display: 'inline'}}>
                    *
                  </Typography>
                  <Typography sx={visuallyHidden}>{requiredText}</Typography>
                </>
              )}
            </Stack>
          </InputLabel>
        )}
        {select ? (
          <Select
            aria-describedby={helperTextId}
            id={id}
            labelId={inputLabelId}
            value={value}
            input={InputElement}
            {...SelectProps}
          >
            {children}
          </Select>
        ) : (
          InputElement
        )}
      </Stack>
      {helperText && (
        <Typography color={severity && `${severity}.main`} variant='body2' id={helperTextId} data-ref={helperTextId}>
          {helperText}
        </Typography>
      )}
    </Box>
  )
})

ATextBoxBase.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  labelProps: PropTypes.object,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  select: PropTypes.bool,
  value: PropTypes.string,
  positiveInteger: PropTypes.bool,
  helperText: PropTypes.string,
  autoComplete: PropTypes.string,
  severity: PropTypes.oneOf(['error', 'success']),
  InputProps: PropTypes.object,
  inputProps: PropTypes.object,
  SelectProps: PropTypes.object,
  children: PropTypes.node,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func
}

export default ATextBoxBase
