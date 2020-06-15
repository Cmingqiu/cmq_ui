<template>
  <button
    :class="[
      'c-btn',
      type ? `c-btn-${type}` : '',
      `${disabled ? 'c-btn-disabled' : ''}`
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <c-icon :name="icon" @ico-click="handleIconClick"></c-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "cButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator(type) {
        let types = [
          "default",
          "primary",
          "success",
          "info",
          "warning",
          "error"
        ];
        return types.includes(type);
      }
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 字体图标的name值
    icon: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
    handleIconClick(e) {
      this.$emit("ico-click", e);
    }
  }
};
</script>

<style lang="scss"></style>
