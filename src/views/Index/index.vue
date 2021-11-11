<template>
  <div class="cq-index flex flex-column h-100vh">
    <keep-alive>
      <router-view class="flex-1" />
    </keep-alive>
    <van-tabbar
      :fixed="false"
      route
      v-model="activeTabbarIndex"
      @change="onChange"
    >
      <van-tabbar-item
        v-for="e in tabbarData"
        :key="e.id"
        class="cqicon"
        :class="e.id == activeTabbarIndex ? 'color-theme' : ''"
        icon-prefix="cq"
        :to="e.to"
        :icon="e.id == activeTabbarIndex ? e.activeIcon : e.icon"
        >{{ e.name }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTabbarIndex: 1,
      tabbarData: [
        {
          id: 0,
          icon: "home",
          activeIcon: "home-fill",
          name: "首页",
          to: "/",
        },
        {
          id: 1,
          icon: "found",
          activeIcon: "faxian2",
          name: "发现",
          to: "/discover",
        },
        {
          id: 2,
          icon: "message",
          activeIcon: "message-fill-1",
          name: "消息",
          to: "/message",
        },
        {
          id: 3,
          icon: "me-1",
          activeIcon: "me-fill-1",
          name: "我的",
          to: "/account",
        },
      ],
    };
  },

  created() {
    this.initData();
  },
  methods: {
    onChange(e) {
      this.activeTabbarIndex = e;
    },
    initData() {
      const url = window.location.pathname;
      this.tabbarData.forEach((e, i) => {
        if (url.includes(e.to)) {
          this.activeTabbarIndex = i;
        }
      });
    },
  },
};
</script>

<style></style>
