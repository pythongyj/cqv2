<template>
  <div id="app">
    <!-- <van-overlay
      :show="$store.getters['globals/getIsLoading']"
      @click="show = false"
      class-name="flex-center-center"
    >
      <van-loading vertical size="24px">加载中...</van-loading>
    </van-overlay> -->
    <router-view />
  </div>
</template>
<script>
export default {
  name: "RootPage",
  data() {
    return {
      loading: false,
    };
  },
};
</script>
