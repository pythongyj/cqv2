<template>
  <div>
    <ul>
      <li v-for="(e, i) in a" :key="i">{{ e.b }}</li>
    </ul>
    <div @click="onClick">改变</div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      a: [{ b: 1 }],
    };
  },
  created() {
    console.log("created");
    this.$set(this.a, "b", 12);

    // this.a.b = 1;
  },
  mounted() {
    this.a.b = 12;
    console.log("mounted");
  },
  methods: {
    onClick() {
      this.a.push({b:this.a.length});
    },
  },
};
</script>

<style></style>
