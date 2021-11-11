<template>
  <div class="cq-message-page">
    <div class="flex space-between align-center page_padding">
      <span></span>
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
      <van-icon class-prefix="cq" class="cqicon" size="26" name="add" />
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActiveTab: 0,
      tabData: [
        {
          id: 0,
          name: "聊天",
          isActive: true,
          toName: "MessageChat",
        },
        {
          id: 1,
          name: "列表",
          isActive: false,
          toName: "MessageList",
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
