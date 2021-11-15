<template>
  <div class="flex flex-column">
    <!-- 时间 -->
    <div class="flex space-between align-center">
      <span class="account-cart-item relative p-l--10 p-y--10"
        ><span class="size_14">{{ initData.time.day }}</span
        >&nbsp;<span class="size_12 color-gray-1"
          >{{ initData.time.month }}月</span
        ></span
      >
      <van-icon class-prefix="cq" class="cqicon color-gray-1" name="gengduo" />
    </div>
    <!-- tags -->
    <ul class="flex flex-wrap p-y--10">
      <li
        class="
          flex-center-center
          m-right--10
          bg-gray--400
          p-x--10
          p-y--06
          border-radius--12
        "
        v-for="(e, i) in initData.tags"
        :key="i"
      >
        <span
          class="
            border-radius--50pr
            color-fff
            bg-black
            w-16
            h-16
            size_10
            flex-center-center
            m-r--06
          "
          >#</span
        >
        <span class="size_12">{{ e }}</span>
      </li>
    </ul>
    <!-- 描述 -->
    <div class="size_12">
      {{ initData.desc }}
    </div>
    <image-card
      :imageList="initData.images"
      :borderRadius="true"
      class="m-y--10"
    ></image-card>
  </div>
</template>

<script>
import ImageCard from "./image-card.vue";
export default {
  props: {
    initData: {
      type: [Object],
      required: true,
    },
  },
  components: {
    ImageCard,
  },
};
</script>

<style>
.account-cart-item::after {
  content: "";
  width: 4px;
  height: 4px;
  position: absolute;
  border-radius: 50%;
  border: 1px solid black;
  left: -6px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
