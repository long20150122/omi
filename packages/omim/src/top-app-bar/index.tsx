import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import {MDCTopAppBar} from '@material/top-app-bar';
import '../icon'

//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
  heading?: string,
  short?: boolean,
  shortCollapsed?: boolean,
  prominent?: boolean,
  dense?: boolean,
  fixed?: boolean,
  adjust?: boolean,
  navigationIcon?: object,
  actionItems?: object,
  scrollTarget?: EventTarget,
  scrollTargetDrawer?: boolean
}

interface Data {

}

@tag('m-top-app-bar')
export default class topAppBar extends WeElement<Props, Data>{
  static css = theme() + css

  static propTypes = {
    heading: String,
    short: Boolean,
    shortCollapsed: Boolean,
    prominent: Boolean,
    dense: Boolean,
    fixed: Boolean,
    adjust: Boolean,
    navigationIcon: Object,
    actionItems: Object,
    scrollTarget: EventTarget,
    scrollTargetDrawer: Boolean
  }

  static defaultProps = {

  }

  topAppBar: MDCTopAppBar

  updated() {
    // Update after initializing the component
    // Get the target scrollbar of 'm-top-app-bar' and trigger the animation based on this scrollbar
    // 获取 'm-top-app-bar' 的目标滚动条，根据此滚动条触发动画
    if(this.props.scrollTargetDrawer) {  //script设置m-drawer组件的scrollTarget(m-drawer的frame属性为true时使用,临时解决方案)
      const target = document.querySelector('m-drawer').shadowRoot.querySelector('#m-drawer-content')
      target && this.topAppBar.setScrollTarget(target)
    } else {
      this.props.scrollTarget && this.topAppBar.setScrollTarget(this.props.scrollTarget)
    }
  }

  installed() {
    this.topAppBar = new MDCTopAppBar(this.shadowRoot.querySelector('.mdc-top-app-bar'))

    this.topAppBar.listen('MDCTopAppBar:nav', (evt: any) => {
      this.fire('nav')
    });

    //script设置m-drawer组件的scrollTarget(m-drawer的frame属性为true时使用)
    if(this.props.scrollTargetDrawer) {
      const target = document.querySelector('m-drawer').shadowRoot.querySelector('#m-drawer-content')
      target && this.topAppBar.setScrollTarget(target)
    }
  }

  onNavigation = (evt: Event) => {
    this.fire('navigation')
    evt && evt.stopPropagation()
  }

  onAction = (evt: any) => {
    if(evt) {
      this.fire('action' + evt.toElement.accessKey)
      evt.stopPropagation()
    }
  }

  render(props) {
    return (
      <div>
        <header {...extractClass(props, 'mdc-top-app-bar', {
          'mdc-top-app-bar--fixed': props.fixed,
          'mdc-top-app-bar--dense': props.dense,
          'mdc-top-app-bar--short': props.short || props.shortCollapsed,
          'mdc-top-app-bar--short-collapsed': props.shortCollapsed,
          'mdc-top-app-bar--prominent': props.prominent
        })}>
          <div class='mdc-top-app-bar__row'>
            {(props.navigationIcon || props.heading) &&
            <section class='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
              {props.navigationIcon &&
              <button class='mdc-top-app-bar__navigation-icon' onClick={this.onNavigation}>
                {(props.navigationIcon.path || props.navigationIcon.paths) ?
                <m-icon {...props.navigationIcon}></m-icon> : props.navigationIcon.text}
              </button>}
              {props.heading && <span class='mdc-top-app-bar__title'>{props.heading}</span>}
            </section>}
            {props.actionItems &&
            <section class='mdc-top-app-bar__section mdc-top-app-bar__section--align-end'>
              {props.actionItems.map((item, index) =>
                <button accessKey={index.toString()} class='mdc-top-app-bar__action-item' onClick={this.onAction}>
                  {(item.path || item.paths) ? <m-icon accessKey={index.toString()} {...item}></m-icon> : item.text}
                </button>
              )}
            </section>}
          </div>
        </header>
        {props.adjust &&
        <div {...extractClass(props,
          (props.short || props.shortCollapsed) ? 'mdc-top-app-bar--short-fixed-adjust' :
          (props.dense && props.prominent) ? 'mdc-top-app-bar--dense-prominent-fixed-adjust' :
          props.dense ? 'mdc-top-app-bar--dense-fixed-adjust' :
          props.prominent ? 'mdc-top-app-bar--prominent-fixed-adjust' : 'mdc-top-app-bar--fixed-adjust'
        )}></div>}
      </div>
    )
  }
}
