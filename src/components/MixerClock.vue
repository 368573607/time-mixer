<template>
  <base-box>
    <template v-slot:title> 开始时段 </template>
    <template v-slot:content>
      <div class="mixer-time-content">
        <vep :progress="nowProgressPercent()">
          {{ progress }} /
          <input
            type="number"
            v-model="target"
            class="number"
            @change="targetChanged"
            min="1"
          />
        </vep>
        <button class="mixer-clock-start-button" @click="buttonClicked">
          {{ buttonMessage }}
        </button>
      </div>
    </template>
  </base-box>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import BaseBox from "./BaseBox.vue";
import { secondToMinute } from "@/lib/time";

export default {
  data() {
    return {
      ...mapState(["nowProgress", "nowTarget"]),
      ...mapGetters(["nowProgressPercent"]),
      ...mapMutations([
        "resetNowProgress",
        "downIncrementNowProgress",
        "setNowTarget",
        "changeTodayProgress",
      ]),
      isMixing: false,
      target: secondToMinute(this.$store.state.nowTarget),
    };
  },
  components: {
    BaseBox,
  },
  methods: {
    buttonClicked() {
      this.isMixing = !this.isMixing;
      if (this.isMixing) {
        this.interval = setInterval(() => {
          if (this.isMixing) {
            this.downIncrementNowProgress();
          }
        }, 1000);
      } else {
        this.whenStop();
      }
    },
    targetChanged() {
      this.isMixing = false;
      this.setNowTarget(this.target * 60);
      this.resetNowProgress();
    },
    whenStop() {
      this.isMixing = false;
      clearInterval(this.interval);
      this.changeTodayProgress(this.nowTarget() - this.nowProgress());
      this.resetNowProgress();
    },
  },
  created() {
    this.resetNowProgress();
    setInterval(() => {
      if (this.nowProgress() <= 0) {
        this.whenStop();
      }
    });
  },
  computed: {
    progress() {
      return secondToMinute(this.nowProgress());
    },
    buttonMessage() {
      return this.isMixing ? "停止专注时段" : "启动专注时段";
    },
  },
};
</script>

<style lang="scss">
.mixer-time-content {
  display: grid;
  grid-template-rows: 7fr 1fr;
  grid-gap: 10px;
}
</style>
