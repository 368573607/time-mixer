<template>
  <div class="full">
    <mixer-clock></mixer-clock>
    <daily-progress></daily-progress>
    <todos-list class="todos-list"></todos-list>
  </div>
</template>

<script>
import MixerClock from "./components/MixerClock.vue";
import DailyProgress from "./components/DailyProgress.vue";
import TodosList from "./components/TodosList.vue";

export default {
  components: {
    MixerClock,
    DailyProgress,
    TodosList,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

.full {
  position: fixed;
  // top: 0;
  // left: 0;
  background: rgb(39, 39, 39);
  height: 100%;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1.5fr 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

.todos-list {
  grid-column: 1/3;
}
</style>
