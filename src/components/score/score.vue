<template>
  <div class="score-container">
    <div class="score-title">{{ title }}</div>
    <div class="score-star">
      <template v-for="(number, index) in numbers" :key="index">
        <span
          class="icon iconfont icon-star_full"
          :class="{ active: number <= score }"
        ></span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: { title: String, score: Number },
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
@import "./score.less";
</style>