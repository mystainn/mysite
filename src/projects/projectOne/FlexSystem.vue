<script setup></script>

<template>
  <div class="flex">
    <div style="width: 200px; z-index: 2" class="baise ceBianLan">
      <!-- 头像栏 -->
      <div
        style="
          padding: 10px;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        "
        class="flex"
      >
        <img
          src="../../assets/me.png"
          alt=""
          width="40px;"
          height="40px"
          style="border-radius: 50%"
        />
        <div style="margin-left: 10px">林子雄</div>
      </div>

      <!-- 导航栏 -->
      <div class="daoHang">导航栏</div>
      <div class="daoHang">导航栏</div>
      <div class="daoHang">导航栏</div>
      <div class="daoHang">导航栏</div>
      <div class="daoHang">导航栏</div>
      <div class="daoHang">导航栏</div>
    </div>
    <!--主区域-->
    <div class="flex1 flex column">
      <!-- 头部栏 -->
      <div style="height: 60px; z-index: 1" class="baise"></div>
      <!-- 内容区 -->
      <div style="overflow: auto" class="flex1 flex neiRongLan">
        <!-- 左区 -->
        <div style="flex: 3" class="flex column mg8">
          <!-- 数据区 -->
          <div class="flex shuJuLan">
            <!-- 数据块 -->
            <div style="height: 100px" class="shuJu flex1 baise mgr8"></div>
            <div style="height: 100px" class="shuJu flex1 baise mgr8"></div>
            <div style="height: 100px" class="shuJu flex1 baise mgr8"></div>
            <div style="height: 100px" class="shuJu flex1 baise"></div>
          </div>
          <!-- 列表区 -->
          <div class="flex column">
            <!-- 列表块 -->
            <div style="height: 160px" class="baise mgt8"></div>
            <div style="height: 160px" class="baise mgt8"></div>
            <div style="height: 160px" class="baise mgt8"></div>
            <div style="height: 160px" class="baise mgt8"></div>
            <div style="height: 160px" class="baise mgt8"></div>
            <div style="height: 160px" class="baise mgt8"></div>
          </div>
        </div>
        <!-- 右区 -->
        <div style="flex: 1" class="youQu flex column mgt8 mgr8">
          <!-- 提示区 -->
          <div style="height: 150px" class="baise"></div>
          <!-- 消息区 -->
          <div style="height: 300px" class="baise mgt8"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}
.baise {
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}
.flex1 {
  flex: 1;
}
.column {
  flex-direction: column;
}
.mg8 {
  margin: 8px;
}
.mgr8 {
  margin-right: 8px;
}
.mgt8 {
  margin-top: 8px;
}
.daoHang {
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
@media (max-width: 768px) {
  .ceBianLan {
    display: none;
  }
  .neiRongLan {
    flex-direction: column;
  }
  .shuJuLan {
    flex-direction: column;
  }
  .youQu {
    margin-left: 8px;
  }
  .shuJu {
    margin: 0 0 8px;
    flex: auto;
  }
}
.neiRongLan::-webkit-scrollbar {
  display: none;
}
</style>
