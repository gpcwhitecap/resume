<template>
  <div class="cms-floor projectTable">
    <div class="table-container">
      <div class="table-search">
        <i @click="onSubmit"></i>
        <input
          type="text"
          v-model="inputData"
          autocomplete="off"
          placeholder="请输入您想要了解对应使用技术项目"
          class="table-search-input"
          @keyup.enter="onSubmit"
        />
      </div>
      <div class="table-content">
        <template v-for="(item, index) in table_data">
          <div class="table-dt" v-if="item.show" v-bind:key="index">
            <div class="table-dd">
              <div class="table-dd-city">
                {{ item.cityName }}
                <span>({{ item.abilities.slice(0, 3).join("、") }})</span>
              </div>
              <div class="table-dd-name">
                <p>
                  {{ item.time }}
                </p>
              </div>
              <div class="table-dd-icons">
                <div
                  class="table-dd-icons-unfold"
                  :class="{ active: item.unfold }"
                  @click="item.unfold = !item.unfold"
                ></div>
              </div>
            </div>
            <div class="table-dd-unfold" v-if="item.unfold">
              <div class="cms-container">
                <div class="table-unfold-title">
                  <h3>{{ item.cityName }}</h3>
                </div>

                <div class="table-cards">
                  <div class="table-cards-title"></div>
                  <div class="table-cards-content">
                    <div class="table-cards-horizontal">
                      <div class="content-shadow">
                        <a class="content-img" v-if="item.img">
                          <img :src="item.img" alt="Picture Two" />
                        </a>
                        <div class="content-container">
                          <div>
                            <h6>项目概要：</h6>
                            <div
                              class="table-unfold-description h8"
                              v-html="item.description"
                            ></div>
                          </div>
                          <h6>主要技术栈：</h6>
                          <p class="item-description text-regular">
                            {{ item.abilities.join("、") }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
let url = "http://10.138.178.65:8080";
export default {
  name: "projectTable",
  props: {
    data: {
      type: Array,
      default: [...Array(10).keys()].map((item, index) => {
        return {
          cityName: "北京站" + index,
          name: "算法精英大赛",
          description:
            "北京HDG成立于2019年10月，已有10名组织者，来自后场理工学院、亿视酷电。188名成员已加入HDG北京站。",
          isNew: true,
        };
      }),
    },
  },
  data() {
    return {
      inputData: "",
      table_data: this.data.map((item, index) => {
        let ret = Object.assign({}, item);
        // 是否展开
        ret.show = true;
        ret.unfold = false;
        return ret;
      }),
    };
  },
  created() {
    // console.log(this.table_data);
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {
    onSubmit() {
      if (this.inputData == "") {
        for (let index = 0; index < this.table_data.length; index++) {
          let element = this.table_data[index];
          element.show = true;
        }
        return;
      }
      for (let index = 0; index < this.table_data.length; index++) {
        let element = this.table_data[index];
        if (element.cityName.indexOf(this.inputData) >= 0) {
          element.show = true;
        } else {
          element.show = false;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "./projectTable.less";
</style>
