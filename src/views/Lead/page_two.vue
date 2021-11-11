<template>
  <div class="cq-lead-two page_padding">
    <div class="flex justify-end size_16 font-bold">1/2</div>
    <div class="flex-center-center-column">
      <span class="size_20 font-bold">请选择你的标签</span>
      <span class="color-gray--400 size_12 m-top--20"
        >可为你匹配共同标签的好友</span
      >
    </div>

    <div class="cq-lead-two-list" :key="e.title" v-for="e in tagList">
      <span class="color-gray-1 m-y--10 block">{{ e.title }}</span>
      <div class="flex flex-wrap">
        <van-button
          v-for="el in e.list"
          :key="el.id"
          round
          class="w-p-30 m-05 color-theme"
          :type="!el.isSelect ? 'warning' : 'info'"
          @click="el.isSelect = !el.isSelect"
          >{{ el.name }}</van-button
        >
      </div>
    </div>

    <van-button
      round
      block
      class="m-top--20"
      @click="$router.replace({ name: 'Index' })"
      type="primary"
      >确认</van-button
    >
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  data() {
    return {
      tagList: [
        {
          title: "情感",
          list: [
            {
              id: nanoid(5),
              name: "感性",
              isSelect: false,
            },
            {
              id: nanoid(5),
              name: "心理",
              isSelect: false,
            },
            {
              id: nanoid(5),
              name: "倾诉",
              isSelect: false,
            },
          ],
        },
        {
          title: "兴趣爱好",
          list: [
            {
              id: nanoid(5),
              name: "电影",
              isSelect: false,
            },
            {
              id: nanoid(5),
              name: "旅行",
              isSelect: false,
            },
            {
              id: nanoid(5),
              name: "唱歌",
              isSelect: false,
            },
            {
              id: nanoid(5),
              name: "动漫",
              isSelect: false,
            },
            {
              id: nanoid(5),
              name: "读书",
              isSelect: false,
            },
            {
              id: nanoid(5),
              name: "健身",
              isSelect: false,
            },

            {
              id: nanoid(5),
              name: "摄影",
              isSelect: false,
            },
            {
              id: nanoid(5),
              name: "绘画",
              isSelect: false,
            },
            {
              id: nanoid(5),
              name: "烘培",
              isSelect: false,
            },
            {
              id: nanoid(5),
              name: "写作",
              isSelect: false,
            },
            {
              id: nanoid(5),
              name: "美食",
              isSelect: false,
            },
          ],
        },
        {
          title: "音乐",
          list: [
            {
              id: nanoid(5),
              name: "乐器",
              isSelect: false,
            },
            {
              id: nanoid(5),
              name: "吉他",
              isSelect: false,
            },
            {
              id: nanoid(5),
              name: "钢琴",
              isSelect: false,
            },
            {
              id: nanoid(5),
              name: "唱歌",
              isSelect: false,
            },
            {
              id: nanoid(5),
              name: "说唱",
              isSelect: false,
            },
            {
              id: nanoid(5),
              name: "摇滚",
              isSelect: false,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.cq-lead-two-list /deep/.van-button,
.cq-lead-two-list /deep/.van-button--normal {
  padding: 0px 10px;
  width: 30%;
}
</style>
