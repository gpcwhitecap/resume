<template>
  <div class="resume">
    <div
      class="jumbotron"
      data-src="/view/images/taxi_drive_by_animation.gif"
      data-position="center center"
    >
      <div class="container">
        <h1>{{ profile.title }}</h1>
        <p class="lead">{{ profile.description }}</p>
      </div>

      <div class="overlay"></div>

      <div href="#profile" class="scroll-down">
        <span class="icon iconfont icon-xiangxia"></span>
      </div>
    </div>
    <nav class="navbar navbar-default">
      <div class="navbar-header">
        <div class="navbar-toggle" @click="navOption.hide = !navOption.hide">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </div>
      </div>
      <div
        class="collapse navbar-collapse navbar-ex1-collapse"
        :class="{ 'nav-hide': navOption.hide }"
      >
        <ul class="nav navbar-nav">
          <li
            :class="{ active: navOption.index == index }"
            v-for="(item, index) in nav"
            :key="index"
            @click="onNavClick(index)"
          >
            <span :title="item">{{ item }}</span>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </nav>
    <div class="background-white">
      <div id="profile" class="container">
        <h2>{{ profile.title }}</h2>
        <p class="lead">{{ profile.description }}</p>

        <hr />

        <div class="profile-container">
          <div class="col-md-4">
            <h3>关于我</h3>
            <p>
              我是一个全方位的Web开发人员。我是一位对前端技术有丰富知识的高级程序员。我爱结构和秩序，我也代表质量。我喜欢花时间修复小细节和优化Web应用程序。我也喜欢在团队中工作，您会学得更快，更多。俗话说：“两个脑袋总比一个脑袋好”。
            </p>
          </div>
          <div class="col-md-4 text-center">
            <img
              src="/img/img_gpc.jpg"
              alt="Pascal van Gemert"
              class="my-img"
              width="246"
              height="246"
            />
          </div>
          <div class="col-md-4">
            <h3>Details</h3>
            <p>
              <strong>Name:</strong><br />
              葛朋程<br />
              <strong>Age:</strong><br />
              28<br />
              <strong>Location:</strong><br />
              江苏南京
            </p>

            <a
              href="https://twitter.com/pascalvgemert"
              class="twitter-follow-button"
              data-show-count="false"
              data-size="large"
              data-show-screen-name="false"
              >Follow @pascalvgemert</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="experiences">
      <div class="container">
        <h2>个人经历</h2>
        <p class="lead">
          “Protons give an atom its identity, electrons its personality.”<br />-
          Bill Bryson, A short history of nearly everything
        </p>

        <div v-for="(item, index) in experiences" :key="index">
          <hr />
          <h3>{{ item.title }}</h3>
          <div class="experiences-items">
            <template
              v-for="(itemData, listIndex) in item.list"
              :key="listIndex"
            >
              <Experience :data="itemData"></Experience>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="background-white">
      <div class="container">
        <h2>技术栈</h2>
        <p class="lead">
          Life without knowledge is death in disguise.<br />- Talib Kweli
        </p>
        <div v-for="(item, index) in abilities" :key="index">
          <hr />
          <h3>{{ item.title }}</h3>
          <div class="abilities-items">
            <template
              v-for="(itemData, listIndex) in item.list"
              :key="listIndex"
            >
              <Score v-bind="itemData"></Score>
            </template>
          </div>
          <div class="text-center project-referal" v-if="index === 0">
            <p>该简历项目采用VUE.js编写</p>
            <a
              href="https://github.com/gpcwhitecap/resume"
              class="btn btn-primary"
            >
              在Github上查看项目
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="projects">
      <div class="container">
        <h2>项目案例</h2>
        <p class="lead">
          “You can do anything you set your mind to.”<br />- Benjamin Franklin
        </p>
        <ProjectTable :data="projects"></ProjectTable>
      </div>
    </div>
    <div class="background-gray">
      <div class="container contact">
        <h2>联系方式</h2>
        <p class="lead">“如果我问人们他们想要什么，他们会说更快的马。"</p>

        <hr />

        <div>
          <ul class="contact-list">
            <li>
              <a href="https://github.com/gpcwhitecap">
                <span class="icon iconfont icon-github"></span>
                <span style=""> https://github.com/gpcwhitecap </span>
              </a>
            </li>
            <li>
              <a href="mailto:gpcwhitecap@vip.qq.com">
                <span class="icon iconfont icon-youxiang"></span>
                <span style=""> gpcwhitecap@vip.qq.com </span>
              </a>
            </li>
            <li>
              <a href="http://blog.ifpyun.com/">
                <span class="icon iconfont icon-smile"></span>
                <span style=""> http://blog.ifpyun.com/</span>
              </a>
            </li>
          </ul>
        </div>

        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import Experience from "../../components/experience/experience.vue";
import Score from "../../components/score/score.vue";
import ProjectTable from "../../components/projectTable/projectTable.vue";
import Header from "../../components/Header/Header.vue";
import Footer from "../../components/footer/footer.vue";
import SmallGoods from "../../components/smallGoods/smallGoods.vue";

export default {
  name: "Home",
  components: {
    Experience,
    Score,
    ProjectTable,
    Header,
    Footer,
    SmallGoods,
  },
  props: {},
  data() {
    return {
      navOption: {
        index: 0,
        hide: false,
      },
      profile: {
        title: "基础信息",
        description: "一名不断学习的全栈开发攻城狮",
      },
      nav: ["基础信息", "个人经历", "技术栈", "项目案例", "联系方式"],
      cf_data: [
        {
          img: "http://placehold.it/210x210/",
          title: "XXXXXXXXXXXXXXXXXXX",
          vouchers: "200",
          retMoney: "0.99",
          money: "500.99",
          realMoney: "30",
          sales: "9985",
        },
      ],
      experiences: [
        {
          title: "学历",
          list: [
            {
              title: "南京大学",
              time: "2017.09 - 2020.07",
              subtitle: "数字媒体技术",
              description:
                "主干课程：3DMAX 基础应用、PHOTOSHOP图像处理、视音频处理技术、网页设计与制作、程序设计基础、数据库原理、计算机组成原理、flash动画技术、Asp.net程序设计、软件工程等",
              location: "江苏省南京市",
              link: "https://www.nju.edu.cn",
            },
            {
              title: "连云港职业技术学院",
              time: "2012.09 - 2014.07",
              subtitle: "计算机应用",
              description:
                "主干课程：电子技术基础、程序设计基础、DreamWeaver网站设计、网络操作系统、EDA技术、计算机组装维护与维修、单片机原理与应用、单片机系统应用开发、网络工程与综合布线、ASP.NET动态网站设计、Winform技术应用、阿里大数据应用与开发、专业综合技能实训等。",
              location: "江苏省连云港市",
              link: "http://www.lygtc.cn",
            },
          ],
        },
        {
          title: "工作经历",
          list: [
            {
              title: "软通动力信息技术(集团)有限公司",
              time: "2016.11 - 至今",
              subtitle: "前端开发工程师",
              description:
                "在此期间主要负责华为高保真页面的输出，其中涉及到angularjs、vue、uee的知识;gadget框架;ucd smartue组件的二次开发以及大量的图表绘制。高效的完成前端项目工作。",
              location: "江苏省南京市",
              link: "https://developer.huawei.com/consumer/cn/",
            },
            {
              title: "紫光(北京)智控科技有限公司",
              time: "2016.01 - 2016.11",
              subtitle: "开发工程师",
              description:
                "SIS(火电厂厂级监控信息系统)系统的前端H5工作，已经后台的数据处理工作",
              location: "江苏省南京市",
              link: "http://www.unicst.com",
            },
            {
              title: "南京元山网络科技有限公司",
              time: "2013.12 - 2016.01",
              subtitle: "程序组长",
              description:
                "毕业后，一直就业与当前医疗行业公司，从刚开始的软件开发到网站营运到程序组长。精通前端、服务器管理、部门协调、产品规划。已掌握处理及管理美工，文案，程序，前端。多家医院的企划与网站的运维，以及网站前端、后台的管理 ",
              location: "江苏省南京市",
              // link: "http://www.unicst.com",
            },
          ],
        },
      ],
      abilities: [
        {
          title: "技术专长",
          list: [
            {
              title: "CSS(3)",
              score: 5,
            },
            {
              title: "HTML(5)",
              score: 5,
            },
            {
              title: "MVC Pattern",
              score: 5,
            },
            {
              title: "MVVM Pattern",
              score: 5,
            },
            {
              title: "Object Orientated Programming",
              score: 5,
            },
            {
              title: "VUE.JS",
              score: 4,
            },
            {
              title: "React.js",
              score: 4,
            },
            {
              title: "AngularJs",
              score: 2,
            },
            {
              title: "NodeJs",
              score: 4,
            },
            {
              title: "webpack",
              score: 4,
            },
            {
              title: "JSON",
              score: 5,
            },
            {
              title: "SASS/LESS",
              score: 5,
            },
            {
              title: "Javascript / ES6",
              score: 4,
            },
            {
              title: "TypeScript",
              score: 3,
            },
            {
              title: "JQuery",
              score: 4,
            },
            {
              title: "echart",
              score: 4,
            },

            {
              title: "CMS",
              score: 3,
            },
            {
              title: "AJAX",
              score: 4,
            },
            {
              title: "MySql",
              score: 3,
            },
            {
              title: "eggjs",
              score: 3,
            },
            {
              title: "Flutter",
              score: 3,
            },
            {
              title: "SEO",
              score: 2,
            },
            {
              title: "Three.js",
              score: 2,
            },
          ],
        },
        {
          title: "语言能力",
          list: [
            {
              title: "汉语(母语)",
              score: 5,
            },
            {
              title: "英语",
              score: 2,
            },
          ],
        },
        {
          title: "工具",
          list: [
            {
              title: "VS Code",
              score: 5,
            },
            {
              title: "Chrome",
              score: 5,
            },
            {
              title: "SVN",
              score: 4,
            },
            {
              title: "Git / Git Flow",
              score: 4,
            },
            {
              title: "Sublime Text",
              score: 4,
            },
            {
              title: "Xftp",
              score: 3,
            },
            {
              title: "Xshell",
              score: 3,
            },
            {
              title: "Adobe Photoshop",
              score: 3,
            },
            {
              title: "Sketch",
              score: 2,
            },
          ],
        },
      ],
      projects: [
        {
          cityName: "华为驻场前端开发 ",
          company: "软通动力信息技术(集团)有限公司",
          time: "2016.11 - 至今",
          abilities: [
            "React",
            "TypeScript",
            "webpack",
            "less",
            "VUEJS",
            "AngularJs",
            "JavaScript/es6",
          ],
          job: "前端开发工程师",
          description:
            "长时间接触三大运行商、以及华为的网站开发项目。移动端，PC站均有不少项目开发参与。项目中掌握华为所使用的框架系统，高效的完成全站的开发功能。 前端功能开发，以及框架组建的代码编写 ",
          skillSummary: "skillSummary",
          img: "/img/project_02.png",
          isNew: false,
        },
        {
          cityName: "UI Components前端组件",
          company: "软通动力信息技术(集团)有限公司",
          time: "2017.09 - 2018.12",
          abilities: [
            "React",
            "TypeScript",
            "webpack",
            "less",
            "html",
            "css",
            "JavaScript/es6",
            "jQuery",
            "echart",
            "git",
          ],
          job: "前端开发工程师",
          description:
            "致力于构建前端渠道 基础框架以及基础业务能力，通过构筑组件资 产库（基础组件/Gadget/服务编排组件等）， 支撑DSV快速定制。其中Gadget包括跨渠道 通用组件、电信领域人工渠道组件、电信领域 自助渠道组件。根据不同的业务场景，可实现 业务的快速定制。   项目职责负责提供组件前端以及样式的维护、负责组件前端部分的框架搭建、负责各个项目使用组件时遇到的问题的维护以及自定义组件的提供。 ",
          isNew: false,
        },
        {
          cityName: "香港HKT数字化转型战略项目",
          company: "软通动力信息技术(集团)有限公司",
          time: "2017.02-2017.12",
          abilities: [
            "C#",
            "html",
            "css",
            "JavaScript",
            "jQuery",
            "echart",
            "git",
          ],
          job: "前端开发工程师",
          description:
            "香港电讯有限公司（HKT）为把握数字时代的发展机遇，积极推动业务转型。HKT的数字化转型计划旨在建立全新的云基础设施及平台，以加强香港电讯的数字化运营能力，并优化其向客户提供的服务。华为在香港电讯的转型过程中，一直提供尖端的技术及解决方案。  项目职责整个项目前端的负责人，参与开发所有的前端页面输出、项目前端框架搭建。同时为开发提供合理的技术方案建议、持续优化前端界面和脚本、保证兼容性和高性能、处理低至IE8的业务兼容性。明确理解产品的需求和定位，根据产品设计和规范开发基于Web的数据可视化应用。 ",
          isNew: false,
        },
        {
          cityName: "广州移动CRM",
          company: "软通动力信息技术(集团)有限公司",
          time: "2017.04-2017.12",
          abilities: [
            "C#",
            "html",
            "css",
            "JavaScript",
            "jQuery",
            "echart",
            "git",
          ],
          job: "前端开发工程师",
          description:
            "广东移动营业前台老系统在2016年至今针对T欧赔3业务体验优化专项。整个项目过程采用用户参与式设计方式，用户深度参与设计，通过与用户共同设计的方法，产品成功上线，目前稳健运营中。 项目职责整个项目前端的负责人，参与开发所有的前端页面输出、项目前端框架搭建。同时为开发提供合理的技术方案建议、持续优化前端界面和脚本、保证兼容性和高性能。 ",
          isNew: false,
        },
        {
          cityName: "中国移动第三代CRM",
          company: "软通动力信息技术(集团)有限公司",
          time: "2017.02-2017.12",
          abilities: [
            "C#",
            "html",
            "css",
            "JavaScript",
            "jQuery",
            "echart",
            "git",
          ],
          job: "前端开发工程师",
          description:
            "传统的业务经营体系已成为制约中国移动战略实现的瓶颈，业务支撑能力要匹配战略目标，第三代BSS即将成为中国移动转型的重要载体。打造新一代的运营支撑系统，实现运营商数字化运营转型。 整个项目前端的负责人，参与开发所有的前端页面输出、项目前端框架搭建。同时为开发提供合理的技术方案建议、持续优化前端界面和脚本、保证兼容性和高性能、处理低至IE8的业务兼容性。明确理解产品的需求和定位，根据产品设计和规范开发基于Web的数据可视化应用。 ",
          isNew: false,
        },
        {
          cityName: "火电厂厂级监控信息系统",
          company: "紫光(北京)智控科技有限公司",
          time: "2016.01-2016.11",
          abilities: [
            "C#",
            "html",
            "css",
            "IE8",
            "JavaScript",
            "jQuery",
            "echart",
            "SVN",
          ],
          job: "开发工程师",
          description:
            "基于H5开发一套实时厂级监控信息系统。实时监测、优化控制及生产过程管理为一体的厂级自动化信息系统，是处于火电厂集散控制系统以及相关辅助程控系统 ",
          isNew: false,
        },
        {
          cityName: "多家医院优化站建设",
          company: "南京元山网络科技有限公司",
          time: "2015.03-2016.01",
          abilities: [
            "php",
            "cms",
            "html",
            "css",
            "JavaScript",
            "jQuery",
            "echart",
            "SVN",
          ],
          job: "企划组长",
          description:
            "负责的10多家医院的PC站与移动站，部分站点用到bootstrap技术。日常管理着40多个优化站点的PC站与wap站。",
          isNew: false,
        },
        {
          cityName: "整形医院网站建设",
          company: "南京元山网络科技有限公司",
          time: "2015.04-2015.08",
          abilities: [
            "php",
            "cms",
            "html",
            "css",
            "JavaScript",
            "jQuery",
            "echart",
            "SVN",
          ],
          job: "网站开发工程师",
          description: "时尚理念的整形医院优化站的PC站与wap站建设 ",
          isNew: false,
        },
        {
          cityName: "商务通开发",
          company: "南京元山网络科技有限公司",
          time: "2014.12 - 2015.03",
          abilities: ["C#", ".net", "SQL Server", "SVN", "MVC"],
          job: "程序开发",
          description:
            "一款windows窗口化在线客服系统，可以像雷达一样对网站进行实时的监控，助您把握访客的来源地址、搜索关键词、正在访问的页面等。",
          isNew: false,
        },
      ],
    };
  },
  created() {},
  methods: {
    onNavClick(index) {
      this.navOption.index = index;
    },
  },
};
</script>
<style lang="less">
@import "./home.less";
</style>