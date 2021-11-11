<template>
  <div class="cq-lead-one page_padding">
    <div class="flex justify-end size_16 font-bold">1/2</div>
    <div class="flex-center-center-column">
      <span class="size_20 font-bold">请设置你的信息</span>
      <span class="color-gray--400 size_12 m-top--20">性别选择后无法更改</span>
      <van-image
        width="3rem"
        height="3rem"
        fit="contain"
        class="m-top--20"
        src="http://www.oss.qcwy.org.cn/cq/image/head.png"
      />
    </div>
    <!-- 昵称 -->
    <div class="p-y--10">
      <label for="user-nick" class="title"> 昵称 </label>
      <input
        class="
          m-top--20
          bg-gray--400
          border-none
          size_16
          border-radius--20
          p-y--10
          p-x--40
          w-pre-100
          border-box
        "
        id="user-nick"
        type="text"
        placeholder="咋么称呼您"
      />
    </div>
    <!-- 生日 -->
    <div class="p-y--10">
      <label for="user-birthday" class="title"> 生日 </label>
      <input
        class="
          m-top--20
          bg-gray--400
          border-none
          size_16
          border-radius--20
          p-y--10
          p-x--40
          w-pre-100
          border-box
        "
        id="user-birthday"
        type="text"
        placeholder="设置你的生日"
        v-model="user.birthday"
        readonly
        @click="isShowBirthdayPop = true"
      />
    </div>

    <!-- 性别 -->
    <div class="p-y--10">
      <span class="title"> 性别 </span>
      <div class="flex m-top--20">
        <van-button
          round
          block
          class="m-right--10"
          @click="onSelectSex(1)"
          :type="this.user.sex == 1 ? 'info' : 'default'"
          >男</van-button
        >
        <van-button
          round
          block
          class="m-left--10"
          @click="onSelectSex(0)"
          :type="this.user.sex == 0 ? 'info' : 'default'"
          >女</van-button
        >
      </div>
    </div>

    <van-popup
      v-model="isShowBirthdayPop"
      is-link
      @closed="isShowBirthdayPop = false"
      position="bottom"
    >
      <van-datetime-picker
        v-model="datatime.currentDate"
        type="date"
        title="选择年月日"
        :min-date="datatime.minDate"
        :max-date="datatime.maxDate"
        @confirm="onConfirmTime"
        :formatter="formatter"
        @cancel="isShowBirthdayPop = false"
      />
    </van-popup>

    <van-button
      round
      block
      class="m-top--20"
      @click="$router.replace({ name: 'LeadTwo' })"
      type="primary"
      >下一步</van-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        birthday: "",
        sex: 0,
        name: "",
        img: "",
      },
      isShowBirthdayPop: false,
      datatime: {
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        currentDate: new Date(2021, 0, 17),
      },
    };
  },
  computed: {},
  methods: {
    onSelectSex(num) {
      this.user.sex = num;
    },
    onConfirmTime(v) {
      this.currentDate = this.user.birthday = v;
      this.isShowBirthdayPop = false;
      console.log(v);
    },
    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      }
      return val;
    },
    onClickBirthday() {
      this.isShowBirthdayPop = true;
    },
  },
};
</script>

<style>
.cq-lead-one {
}
</style>
