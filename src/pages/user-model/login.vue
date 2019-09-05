<template>
  <div class="content">
    <div class="top_area"></div>
    <div class="login_content">
      <span class="login_content_span">丁丁汽车后台管理系统</span>
      <div class="login_content_desc">
        <el-input
          class="login_content_desc_input"
          placeholder="请输入内容"
          prefix-icon="el-icon-user"
          v-model="username"
          clearable
        ></el-input>
        <el-input
          class="login_content_desc_input"
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          v-model="password"
          show-password
        ></el-input>
        <span class="login_content_desc_span" @click="clickLogin">登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },

  created() {},

  methods: {
    clickLogin() {
      let params = {
        mobile: "15774186212",
        password: "test"
      };
      params = JSON.stringify(params);
      console.log(params);
      this.axios.post("/Apilogin/login", params).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
}

.top_area {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 47%;
  background-color: rgb(55, 61, 65);
}

.login_content {
  position: absolute;
  top: 28%;
  right: 28%;
  width: 400px;
  height: 408px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 36px 0;
  margin-top: -12px;
}

.login_content_span {
  font-size: 28px;
  font-weight: 700;
  color: #d71a1a;
}

.login_content_desc {
  width: 300px;
}

.login_content_desc_input {
  width: 300px;
  margin-bottom: 20px;
}

.login_content_desc_span {
  width: 300px;
  height: 40px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d71a1a;
  color: #fff;
  border-radius: 4px;
  transition: all ease 0.35s;
  cursor: pointer;
}

.login_content_desc_span:hover {
  opacity: 0.8;
}
</style>