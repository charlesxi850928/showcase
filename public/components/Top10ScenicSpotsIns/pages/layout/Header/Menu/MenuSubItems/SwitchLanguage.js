import {MenuItem} from '@mui/material'
import {useDispatch} from 'react-redux'
import {actions as i18nActions} from 'redux/reducers/i18nSlice'
import {supportedLanguages, switchCurrentLocale} from 'i18n'

export default function SwitchLanguage() {
  const dispatch = useDispatch()

  function switchLanguage(lang) {
    dispatch(i18nActions.setLang(lang))
    switchCurrentLocale(lang)
  }

  if (process.env.NEXT_PUBLIC_I18N === 'true') {
    return supportedLanguages.map((lang) => (
      <MenuItem
        key={lang}
        onClick={() => {
          switchLanguage(lang)
        }}
      >
        {lang}
      </MenuItem>
    ))
  }

  return []
}
