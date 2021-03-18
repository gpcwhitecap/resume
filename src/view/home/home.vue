<template>
  <div class="resume">
    <div
      class="jumbotron"
      data-src="/view/images/taxi_drive_by_animation.gif"
      data-position="center center"
    >
      <div class="container">
        <h1>{{ profile.name }}</h1>
        <p class="lead">{{ profile.info }}</p>
      </div>

      <div class="overlay"></div>

      <div class="scroll-down" @click="onNavClick(0)">
        <span class="icon iconfont icon-xiangxia"></span>
      </div>
    </div>
    <nav class="navbar navbar-default" :class="{ fixed: navOption.fixed }">
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
              我是一个全方位的Web开发人员，有着坚实的计算机基础知识以及丰富的经验。<br />
              前端爱好者，多种框架皆有实战经验，精通React，Vue.js，熟练Angular，TypeScript，了解Flutter。<br />
              对后端也有一定的了解，熟练使用Nodejs、C#,了解express、egg,有Liunx项目部署经验。<br />
              热衷于创新，爱好于学习，既擅长团队合作，又有自己的见解能够独立完成任务。
            </p>
          </div>
          <div class="col-md-4 text-center">
            <img
              src="../../assets/img/img_gpc.jpg"
              alt="Pascal van Gemert"
              class="my-img"
              width="246"
              height="246"
            />
          </div>
          <div class="col-md-4 profile-info">
            <h3>基本信息</h3>
            <p>
              <strong>姓 名:</strong><br />
              葛朋程<br />
              <strong>年 龄:</strong><br />
              28<br />
              <strong>所在地点:</strong><br />
              江苏南京<br />
              <strong>婚姻状况:</strong><br />
              已婚
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="experiences">
      <div class="container">
        <h2>个人经历</h2>
        <p class="lead">
          “不要嘲笑那些比你们拼命努力的人，也不要理会那些嘲笑你拼命努力的人。”<br />
          ——松下幸之助
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
          “把最复杂的变成最简单的，才是最高明的。 “<br />——达·芬奇
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
          “有一天，当回顾自己走过的路时，你会发现这些奋斗不息的岁月，才是最美好的人生。“<br />——弗洛伊德
        </p>
        <ProjectTable :data="projects"></ProjectTable>
      </div>
    </div>
    <div class="background-gray">
      <div class="container contact">
        <h2>联系方式</h2>
        <p class="lead">
          “所有的不平淡，都是在忍耐了足够的平淡之后诞生的。"<br />——《白说》
        </p>

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

export default {
  name: "Home",
  components: {
    Experience,
    Score,
    ProjectTable,
  },
  props: {},
  data() {
    return {
      navOption: {
        index: 0,
        hide: true,
        fixed: false,
      },
      catalogCur: 0,
      fixedScrollTop: [],
      profile: {
        name: "葛朋程",
        info: "个人互动简历",
        title: "基础信息",
        description: "一名不断学习的全栈开发攻城狮",
      },
      nav: ["基础信息", "个人经历", "技术栈", "项目案例", "联系方式"],

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
                "负责华为前端页面输出，对接业务与技术，提供部分技术支持。<br>熟练使用各种JavaScript库,包括Ract、angularjs、vue等。开发大量组件、图表绘制、svg图形等多种功能<br>帮助团队搭建前端工程化项目，优化项目运行质量",
              location: "江苏省南京市",
              link: "https://developer.huawei.com/consumer/cn/",
            },
            {
              title: "紫光(北京)智控科技有限公司",
              time: "2016.01 - 2016.11",
              subtitle: "开发工程师",
              description:
                "负责系统前端用户UI开发，衔接产品和技术.<br>使用MVC架构，实现对数据的各种操作。",
              location: "江苏省南京市",
              link: "http://www.unicst.com",
            },
            {
              title: "南京元山网络科技有限公司",
              time: "2013.12 - 2016.01",
              subtitle: "程序组长",
              description:
                "作为程序组长负责服务器管理、部门协调、产品规划。三个月内实现多家医院网站的企划与网站的开发，以及网站前端、后台的管理<br>熟悉使用PHP框架的CMS开发逻辑、灵活使用包括Jquery、echart、.net等。<br>设计使用了一套全新的文章发布系统的UI，从而改善公司员工的工作效率，得到了极大好评。",
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
          cityName: "VOICEUI",
          company: "软通动力信息技术(集团)有限公司",
          time: "2017.09 - 2018.12",
          img: "/src/assets/img/project_03.png",
          abilities: [
            "React",
            "TypeScript",
            "webpack",
            "less",
            "html",
            "css",
            "JavaScript/es6",
            "jQuery",
            "SVG",
            "git",
          ],
          job: "前端开发工程师",
          description:
            "一套拖拽组合各式流程图，快捷生成华为手机小艺回复的答复逻辑所需JSON数据。<br>  运用了React框架开发流程图节点组件，实现动态数据的配置与交互。<br>大量编写原始JS代码、编写SVG图形代码完成多种连线与图形绘制",
          isNew: false,
        },
        {
          cityName: "UI Components前端组件",
          company: "软通动力信息技术(集团)有限公司",
          img: "/src/assets/img/project_04.png",
          time: "2017.09 - 2018.12",
          abilities: [
            "React",
            "Vue",
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
            "一套基于多种前端框架的组件库，根据不同的业务场景，可实现 业务的快速定制。<br>  运用了React、Vue框架实现了多种框架的组件开发，负责部分组件开发以及样式的维护以便于完成组件整体换肤功能。<br>实现响应式处理多设备组件兼容，大范围二次开发echart完成复杂图形绘制",
          isNew: false,
        },
        // {
        //   cityName: "香港HKT数字化转型战略项目",
        //   company: "软通动力信息技术(集团)有限公司",
        //   time: "2017.02-2017.12",
        //   abilities: [
        //     "C#",
        //     "html",
        //     "css",
        //     "JavaScript",
        //     "jQuery",
        //     "echart",
        //     "git",
        //   ],
        //   job: "前端开发工程师",
        //   description:
        //     "香港电讯有限公司（HKT）为把握数字时代的发展机遇，积极推动业务转型。HKT的数字化转型计划旨在建立全新的云基础设施及平台，以加强香港电讯的数字化运营能力，并优化其向客户提供的服务。华为在香港电讯的转型过程中，一直提供尖端的技术及解决方案。  项目职责整个项目前端的负责人，参与开发所有的前端页面输出、项目前端框架搭建。同时为开发提供合理的技术方案建议、持续优化前端界面和脚本、保证兼容性和高性能、处理低至IE8的业务兼容性。明确理解产品的需求和定位，根据产品设计和规范开发基于Web的数据可视化应用。 ",
        //   isNew: false,
        // },
        // {
        //   cityName: "广州移动CRM",
        //   company: "软通动力信息技术(集团)有限公司",
        //   time: "2017.04-2017.12",
        //   abilities: [
        //     "C#",
        //     "html",
        //     "css",
        //     "JavaScript",
        //     "jQuery",
        //     "echart",
        //     "git",
        //   ],
        //   job: "前端开发工程师",
        //   description:
        //     "广东移动营业前台老系统在2016年至今针对T欧赔3业务体验优化专项。整个项目过程采用用户参与式设计方式，用户深度参与设计，通过与用户共同设计的方法，产品成功上线，目前稳健运营中。 项目职责整个项目前端的负责人，参与开发所有的前端页面输出、项目前端框架搭建。同时为开发提供合理的技术方案建议、持续优化前端界面和脚本、保证兼容性和高性能。 ",
        //   isNew: false,
        // },
        {
          cityName: "中国移动第三代CRM",
          company: "软通动力信息技术(集团)有限公司",

          img: "/src/assets/img/project_05.png",
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
            "中国移动前台老系统升级，打造新一代的运营支撑系统，实现运营商数字化运营转型。<br>开发所有的前端页面输出、项目前端框架搭建。同时为开发提供合理的技术方案建议、持续优化前端界面和脚本。<br>保证兼容性和高性能、处理低至IE8的业务兼容性。明确理解产品的需求和定位，根据产品设计和规范开发基于Web的数据可视化应用。 ",
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
          img: "/src/assets/img/project_02.png",
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
            "基于CMS系统开发的多个有利于SEO网站，主要以主页、列表页、文章页、专题页为模版进行开发。<br>使用Bootstrap辅助响应式设计，区分PC与移动端入口。<br>通过修改后台php以及Mysql完成一些定制化需求",
          isNew: false,
        },
        // {
        //   cityName: "整形医院网站建设",
        //   company: "南京元山网络科技有限公司",
        //   time: "2015.04-2015.08",
        //   abilities: [
        //     "php",
        //     "cms",
        //     "html",
        //     "css",
        //     "JavaScript",
        //     "jQuery",
        //     "echart",
        //     "SVN",
        //   ],
        //   job: "网站开发工程师",
        //   description: "时尚理念的整形医院优化站的PC站与wap站建设 ",
        //   isNew: false,
        // },
        {
          cityName: "商务通开发",
          company: "南京元山网络科技有限公司",
          time: "2014.12 - 2015.03",
          img: "/src/assets/img/project_01.gif",
          abilities: [
            "C#",
            ".net",
            "JavaScript",
            "echart",
            "SQL Server",
            "SVN",
            "MVC",
          ],
          job: "程序开发",
          description:
            "一款windows窗口化在线客服系统，可以像雷达一样对网站进行实时的监控，把握访客的来源地址、搜索关键词、正在访问的页面等。<br>数据显示基于echart进行二次开发",
          isNew: false,
        },
      ],
    };
  },
  created() {},
  mounted() {
    let jump = document.querySelectorAll(".container");

    let arr = [];
    for (let index = 0; index < jump.length; index++) {
      const element = jump[index];
      arr.push(element.offsetTop);
    }
    this.fixedScrollTop = arr;
    // debugger
    window.addEventListener("scroll", this.scrollEvent, true);
  },
  methods: {
    scrollEvent(e) {
      this.catalogCur =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (this.catalogCur > this.fixedScrollTop[1]) {
        this.navOption.fixed = true;
      } else {
        this.navOption.fixed = false;
      }

      for (let index = 0; index < this.fixedScrollTop.length; index++) {
        const element = this.fixedScrollTop[index];
        if (this.catalogCur + 10 < element) {
          let num = index - 2;
          num = Math.min(4, num);
          num = Math.max(0, num);
          this.navOption.index = num;
          break;
        }
      }
    },
    onNavClick(index) {
      let jump = document.querySelectorAll(".container");
      jump[index + 1].scrollIntoView({ block: "start", behavior: "smooth" });
    },
  },
  destroyed() {
    // 离开该页面需要移除这个监听的事件，不然会报错
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="less">
@import "./home.less";
</style>