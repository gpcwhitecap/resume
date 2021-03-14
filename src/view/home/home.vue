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
        <h2>Experiences</h2>
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
              href="https://github.com/gepengcheng/resume"
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
        <ProjectTable></ProjectTable>
      </div>
    </div>
    <div class="background-gray">
      <div id="contact" class="container">
        <h2>联系方式</h2>
        <p class="lead">
          <font style="vertical-align: inherit"
            ><font style="vertical-align: inherit">
              “如果我问人们他们想要什么，他们会说更快的马。</font
            ><font style="vertical-align: inherit">” </font></font
          ><br /><font style="vertical-align: inherit"
            ><font style="vertical-align: inherit"
              >-亨利·福特（Henry Ford）
            </font></font
          >
        </p>

        <hr />

        <div class="row">
          <div class="col-md-6">
            <ul class="no-bullets">
              <li>
                <a href="http://twitter.com/pascalvgemert" target="_blank">
                  <span class="icon icon-twitter"></span
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">
                      http://twitter.com/pascalvgemert
                    </font></font
                  ></a
                >
              </li>
              <li>
                <a href="http://linkedin.nl/in/pascalvgemert/" target="_blank">
                  <span class="icon icon-linkedin"></span
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">
                      http://linkedin.nl/in/pascalvgemert/
                    </font></font
                  ></a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="no-bullets">
              <!--<li>
				<a href="javascript:void(0);">
					<span class="icon icon-skype"></span>
					pascalvgemert				</a>
			</li>-->
              <li>
                <a href="mailto:ln.tremegnavlacsap@lacsap">
                  <span class="icon icon-email"></span>
                  <span style="unicode-bidi: bidi-override; direction: rtl"
                    ><font style="vertical-align: inherit"
                      ><font style="vertical-align: inherit">
                        ln.tremegnavlacsap@lacsap
                      </font></font
                    ></span
                  >
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div class="text-center">
          <iframe
            id="twitter-widget-1"
            scrolling="no"
            frameborder="0"
            allowtransparency="true"
            class="twitter-share-button twitter-share-button-rendered twitter-tweet-button"
            title="Twitter推特按钮"
            src="http://platform.twitter.com/widgets/tweet_button.c633b87376883931e7436b93bb46a699.en.html#_=1452458429192&amp;dnt=false&amp;id=twitter-widget-1&amp;lang=en&amp;original_referer=http%3A%2F%2Fwebcache.googleusercontent.com%2Fsearch%3Fq%3Dcache%3AcRExpd3vwGsJ%3Awww.pascalvangemert.nl%2F%2B%26cd%3D1%26hl%3Den%26ct%3Dclnk%26gl%3Dnl%26lr%3Dlang_nl%257Clang_en&amp;size=m&amp;text=Pascal%20van%20Gemert%20-%20Web%20Developer%20-%20Interactive%20Resume&amp;type=share&amp;url=http%3A%2F%2Fpascalvangemert.nl%2F%3Fref%3Dtwitter&amp;via=pascalvgemert"
            style="
              position: static;
              visibility: visible;
              width: 62px;
              height: 20px;
            "
            data-url="http://pascalvangemert.nl/?ref=twitter"
          ></iframe>

          <iframe
            src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fpascalvangemert.nl%3Fref%3Dfacebook&amp;width=120&amp;height=21&amp;colorscheme=dark&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;send=false&amp;appId=143175172374579"
            scrolling="no"
            frameborder="0"
            style="border: none; overflow: hidden; width: 120px; height: 21px"
            allowtransparency="true"
          ></iframe>
        </div>
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