<template>
  <i
    v-if="name"
    :class="['iconfont', `icon-${name}`, fontClass]"
    :style="iconStyle"
    @click="$emit('ico-click',$event)"
  ></i>
</template>

<script>
export default {
  name: "cIcon",
  props: {
    name: String,
    color: String,
    size: [String, Number],
    fontClass: String
  },
  computed: {
    iconStyle() {
      let pxReg = /px/i;
      let size = this.size;
      if (!pxReg.test(this.size)) {
        size += "px";
      }
      return {
        color: this.color,
        fontSize: size
      };
    }
  }
};
</script>
