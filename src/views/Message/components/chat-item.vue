<template>
  <div class="flex p-y--10" @click="$router.push({name:'ChatPublic',params:{userData:itemData}})">
    <van-image
      width="50"
      height="50"
      class="border-radius--50pr overflow-hidden"
      :src="itemData.userIcon"
    />
    <div class="flex flex-column space-between p-y--06 m-left--10 flex-1">
      <span class="size_14">{{ itemData.userNick }}</span>
      <span class="size_12 color-gray-1 overflow-text__1">{{
        itemData.newText
      }}</span>
    </div>
    <div class="flex flex-column space-between p-y--06 m-left--10 align-end">
      <span class="size_14 color-gray-1">{{ itemData.time }}</span>
      <span
        class="size_12 p-y--03 p-x--06 border-radius--08 bg-FE4D47 color-fff"
        >{{ itemData.number > 99 ? "99+" : itemData.number }}</span
      >
    </div>
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
