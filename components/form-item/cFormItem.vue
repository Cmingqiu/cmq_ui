<template>
  <div class="c-form-item">
    <label class="c-form-item-label" :style="labelStyle">{{ label }}</label>
    <div class="c-form-item-content" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "cFormItem",
  props: {
    // 标签
    label: {
      type: String,
      default: ""
    },
    // 标签宽度
    labelWidth: {
      type: Number,
      default: 80
    }
  },
  inject: ["form"],
  computed: {
    labelStyle() {
      return {
        width:
          (this.labelWidth ? this.labelWidth : this.form.labelWidth) + "px",
        textAlign: this.form.labelPosition
      };
    },
    contentStyle() {
      return {
        marginLeft:
          (this.labelWidth ? this.labelWidth : this.form.labelWidth) + "px"
      };
    }
  },
  data() {
    return {};
  }
};
</script>
