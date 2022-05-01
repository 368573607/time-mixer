<template>
  <base-box>
    <template v-slot:title>每日进度</template>
    <template v-slot:content>
      <div class="daily-progress-content">
        <vep :progress="todayProgressPercent()">
          {{ progress }} /
          <input
            type="number"
            v-model="mTarget"
            class="number"
            @change="targetChanged"
            min="1"
          />
        </vep>
      </div>
    </template>
  </base-box>
</template>

<script>
import { secondToMinute } from "@/lib/time";
import { mapGetters, mapMutations, mapState } from "vuex";
import BaseBox from "./BaseBox.vue";

export default {
  data() {
    return {
      ...mapState(["todayProgress", "target"]),
      ...mapMutations([
        "incrementTodayProgress",
        "setTodayProgress",
        "setTarget",
      ]),
      ...mapGetters(["todayProgressPercent"]),
      mTarget: secondToMinute(this.$store.state.target),
    };
  },
  components: {
    BaseBox,
  },
  methods: {
    targetChanged() {
      this.setTarget(this.mTarget * 60);
    },
  },
  computed: {
    progress() {
      return secondToMinute(this.todayProgress());
    },
  },
};
</script>

<style lang="scss">
// .daily-progress-content {
//   display: grid;
//   grid-template-rows: 1fr 4fr 1fr;
//   grid-template-columns: 3fr 1fr;
// }
</style>
