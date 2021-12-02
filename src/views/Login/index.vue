<template>
  <div class="cq-login root_widht flex-center-center-column">
    <span class="cq-skip" @click="onSkip">跳过</span>
    <h2>欢迎加入长情</h2>
    <div class="cq-input flex align-center">
      <label for="login-username">名称</label>
      <input
        type="text"
        name=""
        v-model="username"
        id="login-username"
        placeholder="请输入用户名"
      />
    </div>
    <div class="cq-input mb_1 flex align-center">
      <label for="login-input">+86</label>
      <input
        type="number"
        name=""
        v-model="password"
        id="login-input"
        placeholder="请输入手机号"
      />
    </div>

    <van-icon
      class-prefix="cq"
      name="login_btn"
      class="cqicon"
      size="1rem"
      @click="onLogin"
    />
  </div>
</template>

<script>
import { userLogin } from "../../api/login/index.api";
export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    // 跳过
    onSkip() {
      this.$router.replace({ name: "LeadOne" });
    },
    // 登陆
    async onLogin() {
      if (!this.username || !this.password) {
        this.$toast("请输入正确的账号密码");
        return false;
      }
      const { data } = await userLogin({
        username: this.username,
        password: this.password,
      });
      console.log("res", data);
      if (data.code != "1") {
        console.log("res", data.msg);
        this.$toast(data.msg);
        return false;
      }
      console.log("res", data);
      this.$router.replace({ name: "LeadOne" });
    },
  },
};
</script>

<style lang="less">
.cq-login {
  height: 100vh;
  position: relative;
}
.cq-login::after {
  content: "";
  background: url("http://www.oss.qcwy.org.cn/cq/image/cq_login_bg.jpeg");
  filter: opacity(0.3);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.cq-skip {
  position: absolute;
  right: 0.4rem;
  top: 1rem;
}
.mb_1 {
  margin-bottom: 1rem;
}
.cq-input {
  margin-top: 1rem;
  background-color: rgb(231, 219, 219);
  border-radius: 1rem;
  overflow: hidden;
  font-size: 0.5rem;

  & label {
    padding: 0.2rem 0.4rem;
  }
  & input {
    border: none;
    padding: 0.2rem 0.4rem;
  }
}
</style>
