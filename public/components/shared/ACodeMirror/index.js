import PropTypes from 'prop-types'
import {UnControlled as CodeMirror} from 'react-codemirror2-react-17'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import './index.css'

const ACodeMirror = ({code}) => (
  <CodeMirror
    value={code}
    options={{
      mode: 'jsx',
      theme: 'material',
      lineNumbers: true
    }}
    // eslint-disable-next-line no-unused-vars
    onChange={(editor, data, value) => {}}
  />
)

ACodeMirror.propTypes = {
  code: PropTypes.string
}

export default ACodeMirror
