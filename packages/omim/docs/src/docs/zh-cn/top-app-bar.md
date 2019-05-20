## Top App Bar

Top App Bar充当应用程序标题，导航图标和操作项等项目的容器。

## 使用

```html
<m-top-app-bar
  title='Omim'
  short
  onNavigation
  navigation-icon="{
    view: 24,
    path: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z'
  }"
  onAction0
  action-items="[
    {
      view: 48,
      path: 'M34.02 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-12.99-13-12.99S9.03 12 9.02 19H4l7.68 8L20 19h-6.98c.01-5 4.03-8.99 9-8.99s9 4.03 9 9-4.03 9-9 9c-1.29 0-2.52-.28-3.63-.77l-2.96 2.96c1.93 1.14 4.18 1.81 6.59 1.81 3.23 0 6.17-1.18 8.44-3.13l.54.54V31l10.01 9.98L43.99 38l-9.97-10z'
    }
  ]"
></m-top-app-bar>
```

## Omi 中使用

JSX:

```jsx
<m-top-app-bar
  adjust
  heading='Click to show menus'
  onNavigation={this.onDemoStart}
  navigation-icon={{
    view: 24,
    path: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z'
  }}
  onAction0={this.onDemoStart}
  action-items={[
    {
      view: 24,
      path: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z'
    }
  ]}
/>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| heading | string | -- | 标题内容 |
| short | boolean | -- | 带有缩短动动画 |
| shortCollapsed | boolean | -- | 固定为缩短状态 |
| prominent | boolean | -- | 突出显示标题 |
| dense | boolean | -- | 更紧凑的顶部应用栏 |
| fixed | boolean | -- | 固定顶部应用栏 |
| adjust | boolean | -- | 自动填充顶部应用栏高度 |
| navigationIcon | object | -- | 左侧按钮 |
| actionItems | object | -- | 右侧按钮 |
| scrollTarget | EventTarget | -- | 设置目标滚动条(JSX 中使用) |
| scrollTargetDrawer | boolean | -- | 设置目标滚动条(m-drawer 组件使用 frame 属性且特定条件下使用) |
| onNav | function | -- | 单击左侧导航栏触发 |
| onNavigation | function | -- | 单击左侧导航栏触发 |
| onAction(0-N) | function | -- | 单击右侧按钮触发，尾加编号对应右侧按钮数量 |
