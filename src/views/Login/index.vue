<template>
  <div class="cq-login root_widht flex-center-center-column">
    <span class="cq-skip" @click="onSkip">跳过</span>
    <h2>欢迎加入长情</h2>
    <div class="cq-input flex align-center">
      <label for="login-input">+86</label>
      <input
        type="number"
        name=""
        v-model="phone"
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
export default {
  data() {
    return {
      phone: null,
    };
  },
  methods: {
    // 跳过
    onSkip() {
      this.$router.replace({ name: "LeadOne" });
    },
    // 登陆
    onLogin() {
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
.cq-input {
  margin: 1rem 0;
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
