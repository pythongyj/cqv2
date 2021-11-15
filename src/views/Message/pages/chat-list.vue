<template>
  <div class="page_padding h-80vh overflow-scroll">
    <chat-item v-for="e in initDataList" :key="e.id" :itemData="e"></chat-item>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import ChatItem from "../components/chat-item.vue";
export default {
  data() {
    return {
      initDataList: [
        {
          id: nanoid(5),
          userNick: "刘美丽",
          time: "20:10",
          number: 12,
          newText: "离别使爱情热烈，相逢则使它牢固",
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",
        },
        {
          id: nanoid(5),
          userNick: "小喵咪",
          time: "20:10",
          number: 1000,
          newText: "春天没有花，人生没有爱，那还成个什么世界",
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/xiari.jpeg",
        },
        {
          id: nanoid(5),
          userNick: "小可爱",
          time: "20:10",
          number: 99,
          newText: "求学的三个条件是：多观察、多吃苦、多研究",
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/richang.jpeg",
        },
        {
          id: nanoid(5),
          userNick: "唐嫣",
          time: "22:10",
          number: 8,
          newText: "游手好闲的学习并不比学习游手好闲好",
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/3.jpeg",
        },
      ],
    };
  },
  components: {
    ChatItem,
  },
};
</script>

<style></style>
