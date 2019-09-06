<template>
  <div class="content">
    <div class="header">
      <p class="header_p">丁丁汽车管理平台</p>
      <div class="header_right">
        <div class="header_right_setting">
          <i class="el-icon-setting" title="设置"></i>
        </div>
      </div>
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
                <i class="el-icon-menu"></i>
                <span>产品管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <router-link tag="div" to="/ProductList">产品列表</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <router-link tag="div" to="/ProductList">评论管理</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>分类管理</span>
              </template>
              <el-menu-item index="2-1">
                <router-link tag="div" to="/Categories">商品分类管理</router-link>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>店铺管理</span>
              </template>
              <el-menu-item index="3-1">
                <router-link tag="div" to="/Shop">店铺列表</router-link>
              </el-menu-item>
            </el-submenu>
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
export default {
  name: "Root",
  created() {
    // this.axios.get('http://jsonplaceholder.typicode.com/comments')
    // .then(res => {
    //   console.log(res)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
    let params = {
      mobile: "15774186212",
      password: "test"
    };
    params = JSON.stringify(params);
    console.log(params);
    this.axios.post("/Apilogin/login", params).then(res => {
      // console.log(res);
    });
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 52px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 2px #e7e7e7;
}

.header_p {
  width: 200px;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-color: #222d32;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header_right {
  height: 52px;
  display: flex;
  align-items: center;
}

.header_right_setting {
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.header_right_setting:hover > i {
  color: #409eff;
}

.el-icon-setting {
  transition: all ease 0.25s;
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