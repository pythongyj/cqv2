<template>
  <div
    class="flex flex-column h-100vh safe-area-inset-top safe-area-inset-bottom"
  >
    <van-nav-bar
      :title="initUserData.userNick"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-popover
          v-model="showPopover"
          trigger="click"
          :actions="popoverData"
          @select="onSelect"
          placement="bottom-end"
        >
          <template #reference>
            <van-icon
              name="gengduo"
              class-prefix="cq"
              class="cqicon"
              size="18"
            />
          </template>
        </van-popover> </template
    ></van-nav-bar>
    <!-- 中间的消息内容 -->
    <div
      ref="mmessageRef"
      class="
        flex-1 flex flex-column
        page_padding
        h-80vh
        overflow-scroll
        bg-gray--400
      "
    >
      <div
        v-for="e in msgList"
        :key="e.time"
        class="flex p-y--10"
        :class="{ 'row-reverse': e.isMe }"
      >
        <van-image width="40" height="40" round :src="e.userIcon" />
        <div
          class="flex flex-column"
          :class="{ 'm-left--10': !e.isMe, 'm-right--10': e.isMe }"
        >
          <span class="size_14" :class="{ 'text-end': e.isMe }">{{
            e.userNick
          }}</span>
          <span
            :class="{ 'bg-fff': !e.isMe, 'bg-theme color-fff': e.isMe }"
            class="size_14 m-t--06 border-radius--08 p-10"
            >{{ e.centent }}</span
          >
        </div>
      </div>
    </div>
    <div class="flex p-y--10 border-eee-1--top">
      <van-icon size="40" class-prefix="cq" class="cqicon" name="yuyin" />
      <van-field
        class="flex-1 border-radius--08 border-ddd-1 p-06"
        v-model="inputValue"
      />
      <van-icon size="40" class-prefix="cq" class="cqicon" name="xiaolian" />
      <van-icon
        v-show="!inputValue"
        size="40"
        class-prefix="cq"
        class="cqicon"
        name="jiahao"
      />
      <span class="border-ddd-1 p-10" v-show="inputValue" @click="onSendMsg"
        >发送</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name:'ChatPublic',
  data() {
    return {
      initUserData: {},
      showPopover: false,
      inputValue: "",
      popoverData: [
        {
          text: "我不知道",
          disabled: false,
        },
        {
          text: "暂时功能",
          disabled: false,
        },
        {
          text: "以后再修改",
          disabled: false,
        },
      ],
      msgList: [
        {
          time: 212,
          centent: "你好漂亮啊",
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg",
          userNick: "A-刘美丽",
          isMe: false,
          isRemove: false,
        },
        {
          time: 213,
          centent: "你好漂亮啊",
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg",
          userNick: "长情",
          isMe: true,
          isRemove: true,
        },
        {
          time: 214,
          centent: "你好漂亮啊",
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg",
          userNick: "A-刘美丽",
          isMe: false,
          isRemove: false,
        },
        {
          time: 215,
          centent: "你好漂亮啊",
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg",
          userNick: "A-刘美丽",
          isMe: false,
          isRemove: false,
        },
        {
          time: 216,
          centent: "你好漂亮啊",
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg",
          userNick: "长情",
          isMe: true,
          isRemove: false,
        },
        {
          time: 217,
          centent: "那必须的呀！",
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg",
          userNick: "A-刘美丽",
          isMe: false,
          isRemove: false,
        },
      ],
    };
  },
  created() {
    this.getUserData();
  },
  methods: {
    getUserData() {
      const userData = this.$route.params.userData;
      this.initUserData = userData;
      this.msgList.map((e) => {
        if (e.isMe) {
          e.userIcon = "http://www.oss.qcwy.org.cn/logo66.png";
          e.userNick = "长情";
        } else {
          e.userIcon = userData.userIcon;
          e.userNick = userData.userNick;
        }
      });
      console.log("userData", userData);
    },
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
      this.$toast("更多信息");
      this.showPopover = true;
    },
    onSelect(e) {
      this.$toast(e);
    },
    onSendMsg() {
      this.msgList.push({
        time: new Date().getTime(),
        centent: this.inputValue,
        userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg",
        userNick: "长情",
        isMe: true,
        isRemove: false,
      });
      this.inputValue = "";
      this.$nextTick(() => {
        const ele = this.$refs.mmessageRef;
        ele.scrollTop = ele.scrollHeight;
      });
    },
  },
};
</script>

<style></style>
