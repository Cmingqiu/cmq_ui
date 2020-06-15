//导入样式(不引入无法打包scss文件)
import './styles/index.scss';

//导入组件
// import cButton from "./components/button";
// let components = {
//   cButton
// };

function install(Vue) {
  if (install.installed) return;
  install.installed = true;

  let requireComps = require.context('./components', true, /\.js$/);
  requireComps.keys().map((key) => {
    let component = requireComps(key).default;
    Vue.component(component.name, component);
    // Vue.component(key, components[key]);
    // Vue.component(components[key].name, components[key]);
  });
}

//便于script标签引入的时候注册
if (typeof window !== undefined && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  // 按需引入  需要loader 解析
  // ...components
};
