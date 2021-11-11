<template>
  <!-- 发现页面 -->
  <div class="cq-home-page root_widht flex flex-column space-between">
    <div class="flex space-between align-center page_padding">
      <van-icon class-prefix="cq" class="cqicon" size="18" name="search" />
      <div class="flex-center-center select-tab-item">
        <span
          v-for="e in tabData"
          :key="e.id"
          :class="{ active: e.isActive }"
          class="m-x--10"
          @click="onSelectTab(e)"
          >{{ e.name }}</span
        >
      </div>
      <van-icon class-prefix="cq" class="cqicon" size="26" name="camera-2" />
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActiveTab: 1,
      tabData: [
        {
          id: 0,
          name: "世界",
          isActive: false,
          toName: "World",
        },
        {
          id: 1,
          name: "偶遇",
          isActive: true,
          toName: "Encounter",
        },
        {
          id: 2,
          name: "好友",
          isActive: false,
          toName: "Chum",
        },
      ],
    };
  },
  methods: {
    onSelectTab(e) {
      this.tabData.map((el) => (el.isActive = false));
      e.isActive = !e.isActive;
      this.isActiveTab = e.id;
      this.$router.replace({ name: e.toName });
    },
  },
};
</script>

<style></style>
