# cmq-ui

## 使用

```
npm install cmq_ui -S / yarn add cmq_ui
// 入口文件
import cmq_ui from 'cmq_ui'
import 'cmq_ui/cmq_ui.css'
Vue.use(cmq_ui)
```

## c-button

```
<c-button>按钮</c-button>
<c-button type="primary">按钮</c-button>
<c-button type="success">按钮</c-button>
<c-button type="error">按钮</c-button>
```

\*\* API  
porps  
 属性 | 说明|类型 | 默认值
| :---: | :---|:----: | :-----: |
type|按钮类型，可选值为 default、primary、 info、success、warning、error 或者不设置|string|default
disabled|是否禁用|boolean|false
icon|字体图标的 name 值|string|

events  
 属性 | 说明|类型 | 默认值
:---: | :---|:----: | :-----:
click|按钮的点击事件|function|
ico-click|图标的点击事件|function|

## c-icon

```
<c-icon name="earth"></c-icon>
```

\*\* API  
porps  
属性|说明|类型|默认值
:---:|:---|:---:|:---:|
| name | 字体图标 name | String |
| color | 颜色 | String |
| size | 大小 | String, Number |
| fontClass | 类名 | String |

events
属性|说明|类型|默认值
:---:|:---|:---:|:---:|
ico-click|图标的点击事件|function|

## c-form

```
<c-input
  v-model="username"
  @on-change="inputChange"
  @on-blur="inputBlur"
  @on-keydown="keydown"
></c-input>
```

\*\* API  
porps  
属性|说明|类型|默认值
:---:|:---|:---:|:---:|
| v-model | 双向绑定数据 | String,Number |
| type | 输入框类型 | String |text,password,textarea
| placeholder | 占位符 | String |
| disabled | 是否禁用 | Boolean | false

events
属性|说明|返回值
:---:|:---| :---:|
on-change|图标的点击事件| event
on-blur|失去焦点事件|无
on-focus|获得焦点事件|无
on-keydown|按下键位事件| event
on-keyup|按下键位事件| event

## c-form

```
 <c-form :model="model" :label-width="100" labelPosition="left">
    <c-form-item label="名称：">
      <c-input type="text" v-model="username" />
    </c-form-item>
    <c-form-item label="密码：" :label-width="120">
      <c-input type="password" v-model="psd" />
    </c-form-item>
  </c-form>
```

\*\* API  
porps  
c-form
|属性|说明|类型|默认值|
|:---:|:---|:---:|:---:|
| model | 表单数据 | Object |
| labelWidth | 标签宽度 | Number | 80
| labelPosition | 标签对齐方式 | String | right

c-form-item

|    属性    | 说明     |  类型  | 默认值 |
| :--------: | :------- | :----: | :----: |
|   label    | 标签名称 | String |
| labelWidth | 标签宽度 | Number |   80   |
