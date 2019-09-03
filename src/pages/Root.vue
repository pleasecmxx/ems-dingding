<template>
  <div class="content">
    <div class="header">
      <p class="header_p">丁丁汽车</p>
    </div>
    <div class="left">
      <el-row class="tac">
        <el-col :span="12" class="left_col">
          <el-menu
            default-active="1"
            class="left_col_menu"
            @open="handleOpen"
            @close="handleClose"
            background-color="#222d32"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>产品管理</span>
              </template>
              <el-menu-item-group>
                
                <el-menu-item index="1-1">
                  <router-link tag="div" to="/ProductList">产品列表</router-link>
                </el-menu-item>

                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>

    <div class="page-content">
      <!-- asdasd -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 52px;
  background-color: #18bc9c;
}

.header_p {
  width: 200px;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-color: #15a589;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left {
  position: fixed;
  top: 52px;
  left: 0;
  bottom: 0;
  background-color: #222d32;
  width: 200px;
}

.tac {
  width: 200px;
}

.left_col {
  width: 100%;
}

.left_col_menu {
  width: 100%;
}

.page-content {
  padding: 52px 0 0 200px;
}
</style>