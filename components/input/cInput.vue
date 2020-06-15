<template>
  <div :class="wrapClasses">
    <template v-if="type!=='textarea'">
      <input
        :class="inputClasses"
        :type="type"
        :value="currentValue"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
        @keydown="handleKeyDown"
        @keyup="handleKeyUp"
      />
    </template>

    <textarea v-else></textarea>
  </div>
</template>

<script>
const prefixCls = "c-input";

export default {
  name: "cInput",
  props: {
    // 类型
    type: {
      type: String,
      default: "text",
      validator(type) {
        let types = ["text", "password", "textarea"];
        return types.includes(type);
      }
    },
    // 绑定的value
    value: {
      type: [Number, String],
      default: ""
    },
    // 占位符
    placeholder: {
      type: String,
      default: "请输入..."
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 外层div的class
    wrapClasses() {
      return [`${prefixCls}-wrapper`, {}];
    },
    inputClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disabled`]: this.disabled
        }
      ];
    }
  },
  data() {
    return {
      currentValue: this.value,
      prefixCls
    };
  },
  methods: {
    handleInput(e) {
      let value = e.target.value;
      this.$emit("input", value);
      this.$emit("on-change", e);
      this.currentValue = value;
    },
    handleBlur(e) {
      let value = e.target.value;
      this.$emit("on-blur");
    },
    handleFocus(e) {
      let value = e.target.value;
      this.$emit("on-focus");
    },
    handleKeyDown(e) {
      this.$emit("on-keydown", e);
    },
    handleKeyUp(e) {
      this.$emit("on-keyup", e);
    }
  }
};
</script> 