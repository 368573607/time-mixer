<template>
  <base-box>
    <template v-slot:title>待办列表</template>
    <template v-slot:content>敬请期待~</template>
  </base-box>
</template>

<script>
import BaseBox from "./BaseBox.vue";

export default {
  components: {
    BaseBox,
  },
};
</script>
