<template>
  <div class="cForm">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "cForm",
  props: {
    //表单数据
    model: {
      type: Object,
      required: true,
      default: () => ({})
    },
    // 标签宽度
    labelWidth: {
      type: Number,
      default: 80
    },
    // 标签的水平对齐方式
    labelPosition: {
      type: String,
      default: "right",
      validator(value) {
        let position = ["left", "right"];
        return position.includes(value);
      }
    }
  },
  provide() {
    return {
      form: this
    };
  }
};
</script>
