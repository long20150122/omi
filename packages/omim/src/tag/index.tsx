import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import '../icon'

//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
  type: string,
  active: boolean,
  size: string,
  icon: object
}

interface Data {

}

@tag('m-tag')
export default class Tag extends WeElement<Props, Data>{
  static css = theme() + css

  static propTypes = {
    type: String,
    active: Boolean,
    size: String,
    icon: Object
  }

  render(props) {
    return (
      <div {...extractClass(props,
        'mdc-tag',
        props.type ? 'mdc-tag--'+`${props.type}` : '',
        props.size ? 'mdc-tag--' + `${props.size}` : ''
      )}>
        <span><slot></slot></span>
        {(props.icon) && <m-icon class='m-icon' {...props.icon}></m-icon>}
      </div>
    )
  }
}
