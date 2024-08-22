<script setup></script>

<template>
  <div class="flex-container">
    <div class="flex-item">
      <el-link
        type="primary"
        href="../projects/projectOne/FlexSystem.vue"
        :underline="false"
        target="_blank"
        >ProjectOne：HTML+CSS flex布局系统</el-link
      >
    </div>
    <div class="flex-item">flex item 2</div>
    <div class="flex-item">flex item 3</div>
    <div class="flex-item">flex item 3</div>
    <div class="flex-item">flex item 3</div>
    <div class="flex-item">flex item 3</div>
    <div class="flex-item">flex item 3</div>
    <div class="flex-item">flex item 3</div>
    <div class="flex-item">flex item 3</div>
    <div class="flex-item">flex item 3</div>
  </div>
</template>

<style scoped>
.flex-container {
  margin: 30px auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1400px;
}
.flex-container::after {
  content: "";
  height: 0;
  /* 和内容项的宽度保持一致 */
  width: 300px;
}
.flex-item {
  margin: 30px;
  width: 290px;
  height: 200px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}
</style>
