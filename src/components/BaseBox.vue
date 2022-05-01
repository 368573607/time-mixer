<template>
  <div class="box">
    <p class="title">
      <slot name="title">
        <span>Title</span>
      </slot>
    </p>
    <div class="content">
      <slot name="content">
        <span>Content</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.box {
  background: rgb(50, 50, 50);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 20px;
  padding-top: 5px;
  box-sizing: border-box;
  display: block;
}

.title {
  color: white;
  font-size: 1em;
  display: block;
  width: 100%;
  height: 10%;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
