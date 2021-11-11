<template>
  <div class="cq-home-page root_widht flex flex-column space-between">
    <div class="flex space-between align-center page_padding">
      <div
        class="
          flex-center-center
          bg-gray--400
          p-y--10
          p-x--20
          size_12
          border-radius--20
        "
      >
        <van-icon
          class-prefix="cq"
          class="cqicon color-999"
          size="18"
          name="address"
        />
        <span class="size_12 color-999"> 西安市</span>
      </div>
      <div class="flex-center-center select-tab-item">
        <span
          v-for="e in tabData"
          :key="e.id"
          :class="{ active: e.isActive }"
          class="m-r--40"
          @click="onSelectTab(e)"
          >{{ e.name }}</span
        >
      </div>
      <van-icon class-prefix="cq" class="cqicon" size="26" name="shaixuan" />
    </div>
    <found class="page_padding flex-1" v-if="isActiveTab === 0" />
    <near class="page_padding flex-1" v-if="isActiveTab === 1" />
  </div>
</template>

<script>
import Near from "./components/near";
import Found from "./components/found";
export default {
  data() {
    return {
      isActiveTab: 0,
      tabData: [
        {
          id: 0,
          name: "发现",
          isActive: true,
        },
        {
          id: 1,
          name: "附近",
          isActive: false,
        },
      ],
    };
  },
  components: {
    Found,
    Near,
  },
  methods: {
    onSelectTab(e) {
      console.log(e);
      this.tabData.map((el) => (el.isActive = false));
      e.isActive = !e.isActive;
      this.isActiveTab = e.id;
    },
  },
};
</script>
