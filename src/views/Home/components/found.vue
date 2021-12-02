<template>
  <div class="">
    <van-swipe
      class="my-swipe"
      style="height: 60vh"
      indicator-color="white"
      :loop="false"
      :show-indicators="false"
      @change="onChange"
    >
      <van-swipe-item
        class="position-relative"
        v-for="e in initData"
        :key="e.id"
        ><van-image
          class="filter-09-img"
          fit="cover"
          radius=".5rem"
          style="height: 100%"
          width="100%"
          :src="e.images[0]"
        />

        <div
          class="
            position-absolute
            b-06
            r-06
            l-06
            flex
            space-between
            justify-center
          "
        >
          <div class="p-y--10 p-x--20 color-fff flex flex-column align-start">
            <span class="size_16">{{ e.name }}</span>
            <div class="p-y--06">
              <span class="size_12">{{ e.distance }}</span> ·
              <span class="size_12">{{ e.industry }}</span> ·
              <span class="size_12">{{ e.constellation }}</span>
            </div>
            <div class="size_12">
              <span class="size_12">语音：</span
              ><span class="size_12">{{ e.voice }}s</span>
            </div>
          </div>
          <div class="p-y--10 p-x--20 flex-center-center">
            <van-icon
              @click="onLove(e)"
              class-prefix="cq"
              class="cqicon p-06 bg-fff border-radius--50pr"
              color="#FE4D47"
              size="26"
              :name="e.isLove ? 'like-fill' : 'like'"
            />
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>

    <home-footer class="page_padding"></home-footer>
  </div>
</template>

<script>
import HomeFooter from "../components/footer";
import { homeApi } from "../../../api/home/index.api";
export default {
  data() {
    return {
      pageNumber: 1,
      pageSize: 3,

      initData: [],
    };
  },
  components: {
    HomeFooter,
  },
  created() {
    this.initDataList();
  },

  methods: {
    async initDataList() {
      const { data } = await homeApi({
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
      });
      this.initData.push(...data.data.list);
    },
    onChange(index) {
      if (this.initData.length - index < 5) {
        this.initDataList();
      }
    },
    onLove(item) {
      item.isLove = !item.isLove;

      if (item.isLove) {
        this.$toast("非常喜欢，快去联系吧");
      } else {
        this.$toast("取消喜欢，要遗憾，去不了你的世界了");
      }
    },
  },
};
</script>

<style>
.my-swipe .van-swipe-item {
  font-size: 20px;
  padding: 0 0.4rem;
  box-sizing: border-box;
  text-align: center;
}
</style>
