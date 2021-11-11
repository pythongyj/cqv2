<template>
  <div class="flex flex-column">
    <!-- 个人信息部分 -->
    <div class="flex space-between align-center p-y--10">
      <div class="flex">
        <van-image
          round
          fit="cover"
          width="40px"
          height="40px"
          :src="itemData.userIcon"
        />
        <div class="flex flex-column space-between m-left--10">
          <span class="size_16">{{ itemData.name }}</span>
          <span class="size_12 color-gray-1">{{ itemData.huoyuedu }}</span>
        </div>
      </div>
      <van-icon
        class-prefix="cq"
        class="cqicon size_20 color-gray-1"
        name="gengduo"
      />
    </div>
    <!-- 描述 -->
    <div class="size_12">
      {{ itemData.desc }}
    </div>
    <!-- 图片 -->
    <van-image
      fit="cover"
      class="border-radius--12 overflow-hidden m-y--10"
      :src="itemData.userIcon"
    />
    <!-- tags -->
    <div class="flex">
      <span
        v-for="(x, inx) in itemData.targs"
        :key="inx"
        class="flex-center-center m-r--20"
      >
        <span
          class="
            border-radius--50pr
            bg-theme
            color-fff
            w-16
            h-16
            flex-center-center
            m-r--10
          "
          >#</span
        >
        <span class="size_12">{{ x }}</span>
      </span>
    </div>
    <!-- 分享点赞部分 -->

    <div class="flex space-between align-center p-y--10">
      <div class="flex-center-center">
        <van-icon
          class-prefix="cq"
          class="cqicon size_20 color-gray-1"
          name="praise"
        />

        <ul class="user-live-icon">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <span class="size_12">{{ itemData.live }}个人表达了态度</span>
      </div>
      <div class="flex">
        <!-- 评论 -->
        <span class="m-r--40 flex-center-center">
          <van-icon
            class-prefix="cq"
            class="cqicon size_20 color-gray-1 m-right--10"
            name="pinglun"
          />

          <span>{{ itemData.comments }}</span>
        </span>
        <!-- 分享 -->
        <span class="flex-center-center">
          <van-icon
            class-prefix="cq"
            class="cqicon size_20 color-gray-1 m-right--10"
            name="fenxiang"
          />

          <span>{{ itemData.share }}</span>
        </span>
      </div>
    </div>

    <!-- 评论部分呢 -->
    <van-field
      v-model="itemData.message.contnet"
      center
      clearable
      :placeholder="itemData.message.pl"
      class="bg-gray--400 m-y--10 border-radius--20"
    >
      <template #button>
        <van-image
          fit="cover"
          width="20px"
          height="20px"
          class="border-radius--12 overflow-hidden"
          src="http://www.oss.qcwy.org.cn/cq/image/home/comments.png"
        />
        <!--  -->
      </template>
    </van-field>
  </div>
</template>

<script>
export default {
  props: {
    itemData: {
      type: [Object],
      required: true,
    },
  },
};
</script>

<style></style>
