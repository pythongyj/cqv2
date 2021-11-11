<template>
  <van-index-bar
    class="page_padding h-80vh overflow-scroll"
    :index-list="indexList"
  >
    <div v-for="e in initListData" :key="e.id">
      <van-index-anchor v-if="e.index != '*'" :index="e.index" />
      <van-cell
        class="flex-center-center"
        v-for="(el, i) in e.list"
        :key="i"
        :title="el.userNick"
      >
        <template #icon>
          <van-image
            v-if="e.index != '*'"
            width="40"
            height="40"
            class="border-radius--08 overflow-hidden m-right--10"
            :src="el.userIcon"
          />
        </template>
      </van-cell>
    </div>
  </van-index-bar>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  data() {
    return {
      indexList: [],
      initListData: [
        {
          index: "*",
          list: [
            {
              id: nanoid(5),
              userIcon:
                "http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",
              userNick: "添加好友",
            },
          ],
        },
        {
          index: "A",
          list: [
            {
              id: nanoid(5),
              userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/xiari.jpeg",
              userNick: "A-刘美丽",
            },
          ],
        },
        {
          index: "B",
          list: [
            {
              id: nanoid(5),
              userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/richang.jpeg",
              userNick: "A-刘美丽",
            },
            {
              id: nanoid(5),
              userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/3.jpeg",
              userNick: "A-刘美丽",
            },
            {
              id: nanoid(5),
              userIcon:
                "http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",
              userNick: "A-刘美丽",
            },
            {
              id: nanoid(5),
              userIcon:
                "http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",
              userNick: "A-刘美丽",
            },
            {
              id: nanoid(5),
              userIcon:
                "http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",
              userNick: "A-刘美丽",
            },
            {
              id: nanoid(5),
              userIcon:
                "http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",
              userNick: "A-刘美丽",
            },
            {
              id: nanoid(5),
              userIcon:
                "http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",
              userNick: "A-刘美丽",
            },
            {
              id: nanoid(5),
              userIcon:
                "http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",
              userNick: "A-刘美丽",
            },
            {
              id: nanoid(5),
              userIcon:
                "http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",
              userNick: "A-刘美丽",
            },
          ],
        },
        {
          index: "C",
          list: [
            {
              id: nanoid(5),
              userIcon:
                "http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",
              userNick: "A-刘美丽",
            },
          ],
        },
        {
          index: "D",
          list: [
            {
              id: nanoid(5),
              userIcon:
                "http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",
              userNick: "A-刘美丽",
            },
          ],
        },
        {
          index: "E",
          list: [
            {
              id: nanoid(5),
              userIcon:
                "http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",
              userNick: "A-刘美丽",
            },
          ],
        },
      ],
    };
  },
  created() {
    this.getIndexList();
  },
  methods: {
    getIndexList() {
      this.initListData.forEach((e) => {
        e.index != "*" && this.indexList.push(e.index);
      });
    },
  },
};
</script>

<style></style>
