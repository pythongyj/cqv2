<template>
  <div class="page_padding h-80vh overflow-scroll">
    <div>
      <span class="size_12 color-gray-1"
        >标记其他用户后，他们的动态会在此显示</span
      >
    </div>

    <van-swipe
      class="my-swipe"
      :loop="false"
      width="240"
      :show-indicators="false"
    >
      <van-swipe-item
        style="box-sizing: border-box"
        v-for="e in friendList"
        :key="e.id"
        class=""
      >
        <div
          class="
            box-shadow-eee
            border-radius--12
            p-10
            flex-center-center-column
            relative
          "
        >
          <van-icon
            @click="onCloseUserItem(e)"
            class-prefix="cq"
            class="cqicon"
            name="close absolute t-06 r-06 color-fff bg-aaa p-03 border-radius--20 size_10"
          />

          <van-image
            width="60"
            height="60"
            round
            fit="cover"
            class="relative overflow-inherit"
            :src="e.userIcon"
            @click="onLockUserInfo(e)"
          >
            <template #default>
              <van-icon
                class-prefix="cq"
                class="cqicon"
                name="yanbu absolute b-0 r-0 border-fff-3 border-radius--50pr"
              />
            </template>
          </van-image>
          <span class="size_14 p-y--06">{{ e.userNick }}</span>
          <span class="size_10 color-gray-1">{{ e.desc }}</span>
          <div class="flex border-radius--08 overflow-hidden m-t--06">
            <van-image
              v-for="(x, inx) in e.images"
              :key="inx"
              width="60"
              height="60"
              fit="cover"
              :class="x != e.length - 1 ? 'm-r--06' : ''"
              :src="x"
            />
          </div>
          <van-button
            @click="onIsLike(e)"
            round
            :color="e.isLike ? '#aaaaaa' : '#27F4E8'"
            class="p-y--06 p-x--20 h-auto m-top--20"
          >
            <template #default>
              <span
                :class="e.isLike ? 'color-theme' : 'color-fff'"
                class="size_12"
                >{{ e.isLike ? "已标记" : "标记" }}</span
              >
            </template>
          </van-button>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  data() {
    return {
      friendList: [
        {
          id: nanoid(5),
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/1.jpeg",
          userNick: "皮卡丘",
          desc: "看我的十万伏特",
          images: [
            "http://www.oss.qcwy.org.cn/cq/image/home/xiari.jpeg",
            "http://www.oss.qcwy.org.cn/cq/image/home/3.jpeg",
            "http://www.oss.qcwy.org.cn/cq/image/home/richang.jpeg",
          ],
          isLike: true,
        },
        {
          id: nanoid(5),
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg",
          userNick: "可爱糖",
          desc: "每天都给自己寻找开心和快乐",
          images: [
            "http://www.oss.qcwy.org.cn/cq/image/home/xiari.jpeg",
            "http://www.oss.qcwy.org.cn/cq/image/home/3.jpeg",
            "http://www.oss.qcwy.org.cn/cq/image/home/richang.jpeg",
          ],
          isLike: false,
        },
        {
          id: nanoid(5),
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/3.jpeg",
          userNick: "我叫啥",
          desc: "我也不知叫啥好了",
          images: [
            "http://www.oss.qcwy.org.cn/cq/image/home/xiari.jpeg",
            "http://www.oss.qcwy.org.cn/cq/image/home/3.jpeg",
            "http://www.oss.qcwy.org.cn/cq/image/home/richang.jpeg",
          ],
          isLike: false,
        },
        {
          id: nanoid(5),
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/richang.jpeg",
          userNick: "我是谁",
          desc: "我真不知道叫啥好",
          images: [
            "http://www.oss.qcwy.org.cn/cq/image/home/xiari.jpeg",
            "http://www.oss.qcwy.org.cn/cq/image/home/3.jpeg",
            "http://www.oss.qcwy.org.cn/cq/image/home/richang.jpeg",
          ],
          isLike: false,
        },
      ],
    };
  },

  methods: {
    onIsLike(item) {
      item.isLike = !item.isLike;
    },
    onCloseUserItem(item) {
      this.friendList = this.friendList.filter((e) => e.id != item.id);
    },
    onLockUserInfo(item) {
      this.$router.push({ name: "OtherAccount", params: { userInfo: item } });
    },
  },
};
</script>

<style lang="less" scoped></style>
