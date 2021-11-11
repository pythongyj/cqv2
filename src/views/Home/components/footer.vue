<template>
  <div class="flex-center-center">
    <div
      class="
        flex-1 flex-center-center
        bgc-F0FFFD
        border-radius--12
        m-right--10
        p-r--10
      "
    >
      <div class="flex flex-column p-l--20 p-y--20">
        <span class="size_16 mb--10">灵魂匹配</span>
        <span class="size_12">和懂你的人聊天</span>
      </div>
      <img src="http://www.oss.qcwy.org.cn/cq/image/home/linghun.png" alt="" />
    </div>
    <div
      class="
        flex-1 flex-center-center
        bgc-EFF7FF
        border-radius--12
        m-left--10
        p-r--10
      "
    >
      <div
        @click="$router.push({ name: 'LivePeople' })"
        class="flex flex-column p-l--20 p-y--20"
      >
        <span class="size_16 mb--10">有趣的人</span>
        <span class="size_12">发现有趣的灵魂</span>
      </div>
      <img src="http://www.oss.qcwy.org.cn/cq/image/home/youqu.png" alt="" />
    </div>
    <!-- footer -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.bgc-F0FFFD {
  background: #f0fffd;
}
.bgc-EFF7FF {
  background: #eff7ff;
}
</style>
