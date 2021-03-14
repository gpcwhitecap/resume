<template>
  <div class="experience-item">
    <div class="col-md-4">
      <h4>{{ data.title }}</h4>
      <p class="experience-period">{{ data.time }}</p>
    </div>
    <div class="experience-info">
      <div>
        <strong> {{ data.subtitle }} </strong>
        <p class="hidden-phone">
          {{ data.description }}
        </p>
        <div class="experience-details">
          <div class="location" v-if="data.location">
            <span class="icon iconfont icon-dizhi"></span>
            {{ data.location }}
          </div>
          <div class="link" v-if="data.link">
            <span class="icon iconfont icon-lianjie"></span>
            <a :href="data.link" target="_blank">{{ data.link }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
  components: {},
  props: {
    data: Object,
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
@import "./experience.less";
</style>