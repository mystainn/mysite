<script setup>
import Aboutme from "./about.vue";
import Project from "./project.vue";

import { ref } from "vue";

const activeName = "first";
</script>

<template>
  <div class="head">
    <img
      class="myIMG"
      src="../assets/me.png"
      alt="林子雄"
      width="80px"
      height="80px"
    />
  </div>

  <div class="content">
    <el-tabs v-model="activeName">
      <el-tab-pane label="关于我" name="first">
        <Aboutme msg="Vite + Vue" />
      </el-tab-pane>
      <el-tab-pane label="项目" name="second">
        <Project msg="Vite + Vue" />
      </el-tab-pane>
    </el-tabs>
  </div>

  <div class="end">
    <p>Copyright © 2020-2021 Lin Zixiong. All rights reserved.</p>
    <a href="">友情链接</a>
  </div>
</template>

<style scoped>
.head {
  background-color: #f1f1f1;
  text-align: center;
  padding: 40px;
}
.end {
  background-color: #f1f1f1;
  text-align: center;
  padding: 40px;
  font-size: 12px;
}
.content {
  max-width: 1400px;
  margin: 30px auto;
}
.myIMG {
  border-radius: 50%;
}
</style>
