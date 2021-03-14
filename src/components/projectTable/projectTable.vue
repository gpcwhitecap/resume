<template>
  <div class="cms-floor projectTable">
    <div class="table-container">
      <div class="table-search container">
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
            <div class="table-dd cms-container">
              <div class="table-dd-city">
                {{ item.cityName }}
              </div>
              <div class="table-dd-name">
                <p>
                  {{ item.name }}
                  <span class="table-tag-new" v-if="item.isNew">New</span>
                </p>
              </div>
              <div class="table-dd-organizer">
                <p>名组织者</p>
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
                  <h3>HDG {{ item.name }}</h3>
                </div>
                <div class="table-unfold-description h8">
                  {{ item.description }}
                </div>

                <div class="table-cards">
                  <div class="table-cards-title">
                    <h5>近期活动</h5>
                  </div>
                  <div class="table-cards-content">
                    <div class="table-cards-horizontal">
                      <div class="content-shadow">
                        <a class="content-img"><img alt="Picture Two" /> </a>
                        <div class="content-container">
                          <div class="table-cards-title">
                            <a class="h6">3333</a>
                            <div class="table-cards-tags">
                              <span class="table-cards-tag">123</span>
                            </div>
                          </div>

                          <p class="item-description text-regular">
                            description
                          </p>
                          <a href="#" class="cms-btn btn-dark-line"> more </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table-organizers">
                  <div class="table-organizers-title">
                    <h5>组织者</h5>
                  </div>
                  <div class="table-organizers-content"></div>
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
