<template>
  <section class="wrap">
    <div class="header">
      <div class="logo">
        <img :src="logo" />
      </div>
      <div class="top_pic">
        <img :src="title_pic" />
      </div>
      <div class="code_wrap">
        <div class="left">
          <img :src="code" />
        </div>
        <div class="right">
          <div class="r_box">
            <p class="r_top">每天早<span>十二小时</span>10:00-22:00</p>
            <p class="r_top">高手精准彩票计划</p>
            <p class="r_center">加微信好友送999现金红包</p>
            <div class="r_pic" @click="clickButtonFn">
              <img :src="code_gif" />
            </div>
          </div>
        </div>
      </div>
      <div class="haochu">
        <img :src="follow_pic" />
      </div>
      <div class="swipe">
        <van-swipe indicator-color="#fffb13" :autoplay="2500">
          <van-swipe-item v-for="(item, index) in swipeArr" :key="index">
            <div class="swipeItem">
              <img :src="item.img" />
              <p class="s_title">{{ item.title }}</p>
              <p class="s_mian">{{ item.main }}</p>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="center_wrap">
      <p class="c_title">
        <span>{{ c_title }}</span>
      </p>
      <div class="c_main">
        <p v-for="(item, index) in cMain" :key="index">{{ item }}</p>
      </div>
      <div
        class="c_main_two"
        :style="{
          background: 'url(' + cMainTwoPic + ') no-repeat center center'
        }"
      >
        <p class="title">{{ c_title_two }}</p>
        <div>
          <van-swipe
            style="height: 250px;"
            vertical
            :show-indicators="false"
            :touchable="false"
            :autoplay="2300"
            :duration="2700"
          >
            <van-swipe-item v-for="(item, index) in cMainTwo" :key="index">
              <span v-for="(spanItem, spanIndex) in item" :key="spanIndex">{{
                spanItem
              }}</span>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div
        class="c_main_three"
        :style="{
          background: 'url(' + cMainThreePic + ') no-repeat center center'
        }"
      >
        <div class="box_wrap">
          <p v-for="(item, index) in cMainThree" :key="index">{{ item }}</p>
        </div>
        <div class="box_bg">
          <span>{{ c_title_three }}</span>
        </div>
      </div>
      <div
        class="c_main_three"
        :style="{
          background: 'url(' + cMainFourPic + ') no-repeat center center'
        }"
      >
        <div class="box_wrap">
          <p v-for="(item, index) in cMainFour" :key="index">{{ item }}</p>
        </div>
        <div class="box_bg">
          <span>{{ c_title_four }}</span>
        </div>
      </div>
      <div class="c_mian_bottom">
        <div class="about_title">
          <span> ◆温馨提示：不收费、纯属经验交流◆ </span>
        </div>
        <div class="about_main">
          <div class="weixin">
            <span class="title">关注微信：</span>
            <textarea
              readonly="readonly"
              v-model="code_name"
              ref="copy"
            ></textarea>
          </div>
          <div class="code_pic">
            <img :src="code" alt="" />
          </div>
          <p class="code_title">加微信好友免费看精准计划</p>
          <div class="gif_wrap">
            <img :src="gif_name" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="top_t">
        <span class="top_num">{{ planNum }}</span>
        <span class="top_title">累积计划量</span>
        <span class="top_num">{{ onlineNum }}</span>
        <span class="top_title">在线计划师</span>
      </div>
      <p class="ques">
        计划问题QQ咨询：<i>{{ qq }}</i>
      </p>
    </div>
    <div class="fixd" @click="clickButtonFn">
      <span>点击添加微信好友</span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // 独家精准计划图片
      logo: require("@/assets/image/login-header-logo.png"),
      // 微信扫码免费领精准计划图片
      title_pic: require("@/assets/image/m-login-header.png"),
      // 微信二维码
      code: require("@/assets/image/code.png"),
      // 添加为微信好友gif图
      code_gif: require("@/assets/image/code.gif"),
      // 关注699计划图
      follow_pic: require("@/assets/image/haochu.png"),
      // 左右滑动的轮播图数据
      swipeArr: [
        {
          img: require("@/assets/image/you01.jpg"),
          title: "各类计划即时大数据走势分析",
          main:
            "即时大数据走势分析，提供人工计划，计划师通过大数据分析帮你期分析数据，涉及多种方式，如定位、双面。"
        },
        {
          img: require("@/assets/image/you02.jpg"),
          title: "专业计划师1对1全面精心指导",
          main:
            "每位计划师都是通过平台精心筛选出来，计划师的计划准确率都是8-9成以上，他们的计划都是根据过往开奖走势，为你分析每一个走势和计划结果。"
        },
        {
          img: require("@/assets/image/you03.jpg"),
          title: "100多名精准计划师任你挑选",
          main:
            "有上百名计划师，并有计划实时排名，准确分析每位计划师长期的准确性统计及排名，通过全面的数据分析，帮你找到你想要的计划师。 "
        },
        {
          img: require("@/assets/image/you04.jpg"),
          title: "免费看类精准计划数据分析报表",
          main:
            "平台还提供广大玩家试玩，让计划运用到实际中上，这也是验证计划师们准确率最直接的方法，也能实现的报表数据。"
        },
        {
          img: require("@/assets/image/you05.jpg"),
          title: "稳定计划实时精准排名分析",
          main:
            "稳定的计划把控，分析每个计划的概率，每个计划师都会确保会员稳定，系统记录每个计划师的计划排名数据。"
        }
      ],
      // 699计划团队给玩家的一段话
      c_title: "699计划团队给玩家的一段话",
      // 699计划团队给玩家的一段话内容
      cMain: [
        "您好！我是曾老师，整个团队100多名计划师做计划已经有5年多的时间了，经也是负债几百万到现在生活无忧，很多人认为开奖是一种运气成份没有规律，但你们错了，同样也有一套相应规律与算法，当然我们699团队根本也没有百分百准确结果。",
        "我们通过大数据、历史多项数据、模拟试机、多态模型等一系列操作得出一套稳定赢利规律，还是有些人刚接触存在怀疑，其实这也是很正常，你加我的微信看我们团队发的每期计划用再去判断，我们计划绝对免费不收任何费用的，如果准确率高你才和我们一起合作，没有准备率你当观看一下免费计划。",
        "曾老师最后给你们的一句话：怀疑+拒绝=一无所有、怀疑+考察+验证=创造机会、机会是为有心人准备的，大家合作共赢！"
      ],
      // 计划师实时排名
      c_title_two: "计划师实时排名",
      // 计划师实时排名背景图片
      cMainTwoPic: require("@/assets/image/login-game-sort.jpg"),
      // 计划师实时排名内容
      cMainTwo: [
        [
          "【计划师】落枫村 准确率95.23%",
          "【计划师】陌上 准确率93.52%",
          "【计划师】土豆不抬头 准确率92.13%",
          "【计划师】水凝墨  准确率90.95%",
          "【计划师】冰蓝色的雪 准确率90.55%",
          "【计划师】毒师铭  准确率89.21%",
          "【计划师】琉璃紫月 准确率89.02%",
          "【计划师】缺點诗意 准确率88.99%"
        ],
        [
          "【计划师】月明追云影 准确率88.48%",
          "【计划师】眼泪不为伱留 准确率88.25%",
          "【计划师】狼行成双 准确率87.88%",
          "【计划师】沐予风吟 准确率87.52%",
          "【计划师】雾风寒狼 准确率87.50%",
          "【计划师】吴春生 准确率86.88%",
          "【计划师】博雅轩 准确率86.78%",
          "【计划师】閑人到人间 准确率86.57%"
        ]
      ],
      // 金牌导师计划
      c_title_three: "金牌导师计划",
      // 金牌导师背景图片
      cMainThreePic: require("@/assets/image/youting.jpg"),
      // 金牌导师内容
      cMainThree: [
        "45-46期1位1245678——期各100+297",
        "46-47期2位2347890——期各120+653",
        "47-48期3位2356790——期各140+958",
        "49-50期5位2386960——期各270+597",
        "50-51期7位3545678——期各800+997",
        "52-53期8位9645678——期各650+897",
        "53-54期9位7545678——期各560+337",
        "54-55期0位4545678——期各490+797"
      ],
      // 全天人工计划
      c_title_four: "全天人工计划",
      // 全天人工计划背景图片
      cMainFourPic: require("@/assets/image/feichuang.jpg"),
      // 全天人工计划内容
      cMainFour: [
        "05-06期 0名下 【35678】 中",
        "06-07期 5名下 【35678】 中",
        "07-08期 5名下 【35678】 中",
        "08-09期 1名下 【35678】 中",
        "09-10期 8名下 【35678】 中",
        "10-11期 8名下 【35678】 中",
        "12-13期 9名下 【23490】 中",
        "14-15期 1名下 【57890】 中"
      ],
      // 微信名
      code_name: "GD34684",
      // 查看盈利排名
      gif_name: require("@/assets/image/ylbtn.gif"),
      // 累计计划量
      planNum: "7777",
      // 在线计划师
      onlineNum: "186",
      // QQ号
      qq: "3005765800"
    };
  },
  methods: {
    // 跳转微信
    clickButtonFn() {
      window.location.href = "weixin://profile/gh_e011b00aab62";
    }
  }
};
</script>

<style>
.wrap {
  width: 100%;
  overflow: hidden;
  background-color: #c11e2f;
}
.header {
  width: 100%;
  padding: 0 0.426667rem;
  box-sizing: border-box;
}
.header .logo {
  width: 84%;
  margin: 0.853333rem auto 0;
  min-width: 14.506667rem;
}
.header .logo img {
  width: 100%;
}
.header .top_pic {
  width: 84%;
  margin: 0 auto;
  min-width: 14.506667rem;
}
.header .top_pic img {
  width: 100%;
}
.header .code_wrap {
  padding: 0.426667rem;
  box-sizing: border-box;
  display: flex;
  background-color: #fff;
}
.header .code_wrap .left {
  width: 5.546667rem;
  height: 5.546667rem;
  overflow: hidden;
}
.header .code_wrap .left img {
  width: 100%;
  height: 100%;
}
.header .code_wrap .right {
  flex: 1;
  position: relative;
}
.header .code_wrap .right .r_box {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 600;
  padding: 0.597333rem 0.213333rem 1.066667rem;
  box-sizing: border-box;
  text-align: center;
  font-size: 0.597333rem;
  border: 0.042667rem solid #c11e2f;
}
.header .code_wrap .right .r_box p.r_top {
  line-height: 0.682667rem;
}
.header .code_wrap .right .r_box p.r_top span {
  background-color: #c11e2f;
  color: #fff;
  padding: 0 0.042667rem;
  display: inline-block;
  box-sizing: border-box;
}
.header .code_wrap .right .r_box p.r_center {
  font-size: 0.64rem;
  font-weight: bold;
  color: #c11e2f;
  margin-top: 0.426667rem;
}
.header .code_wrap .right .r_box .r_pic {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%) translateY(50%);
}
.header .haochu {
  width: 100%;
  margin: 0.426667rem 0;
}
.header .haochu img {
  width: 100%;
}
.header .swipe {
  background-color: rgba(0, 0, 0, 0.4);
}
.header .swipe .swipeItem {
  width: 100%;
  padding: 1.28rem;
  box-sizing: border-box;
}
.header .swipe .swipeItem img {
  width: 100%;
}
.header .swipe .swipeItem .s_title {
  color: #fffb13;
  font-size: 0.853333rem;
  font-weight: 600;
  margin: 0.853333rem 0 0.426667rem;
}
.header .swipe .swipeItem .s_mian {
  color: #ddd;
  font-size: 0.64rem;
  line-height: 1.024rem;
}
.center_wrap .c_title {
  text-align: center;
  font-size: 0.938667rem;
  color: #fff;
  margin: 0.853333rem 0;
}
.center_wrap .c_main {
  background-color: #000;
  padding: 2.133333rem 0.768rem 6.4rem;
  box-sizing: border-box;
  text-align: justify;
}
.center_wrap .c_main p {
  font-size: 0.768rem;
  line-height: 1.365333rem;
  color: rgb(241, 237, 26);
  font-weight: 500;
}
.center_wrap .c_main_two {
  padding: 2.133333rem;
  box-sizing: border-box;
  height: 17.066667rem;
}
.center_wrap .c_main_two .title {
  font-size: 1.109333rem;
  color: #fba026;
  margin-bottom: 0.853333rem;
}
.center_wrap .c_main_two span {
  font-size: 0.597333rem;
  color: #ddd;
  display: inline-block;
  line-height: 1.28rem;
}
.center_wrap .c_main_three {
  height: 10.666667rem;
  overflow: hidden;
  position: relative;
}
.center_wrap .c_main_three .box_wrap {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: #fffb13;
  font-size: 0.597333rem;
  text-align: center;
  line-height: 1.066667rem;
}
.center_wrap .c_main_three .box_bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  text-align: center;
}
.center_wrap .c_main_three .box_bg span {
  color: #fff;
  font-size: 1.706667rem;
  display: inline-block;
  line-height: 10.666667rem;
}
.center_wrap .c_mian_bottom .about_title {
  text-align: center;
  padding: 1.066667rem 0;
}
.center_wrap .c_mian_bottom .about_title span {
  font-size: 0.853333rem;
  color: #fff;
  border-bottom: 0.085333rem solid #fba026;
}
.center_wrap .c_mian_bottom .about_main .weixin {
  /* margin: 0 auto; */
  text-align: center;
}
.center_wrap .c_mian_bottom .about_main span.title {
  margin-bottom: 0.426667rem;
  text-align: center;
  font-weight: 600;
  font-size: 0.938667rem;
  color: rgb(253, 241, 68);
}
.center_wrap .c_mian_bottom .about_main textarea {
  vertical-align: middle;
  font-style: italic;
  width: 4.266667rem;
  height: 1.066667rem;
  border: none;
  color: rgb(253, 241, 68);
  background-color: transparent;
}
.center_wrap .c_mian_bottom .about_main .code_pic {
  width: 9.386667rem;
  height: 9.386667rem;
  background: #fff;
  margin: 0.426667rem auto;
  padding: 0.426667rem;
  box-sizing: border-box;
}
.center_wrap .c_mian_bottom .about_main .code_pic img {
  width: 100%;
}
.center_wrap .c_mian_bottom .about_main .code_title {
  margin: 0.426667rem 0;
  text-align: center;
  font-weight: 600;
  font-size: 0.853333rem;
  color: #fff;
}
.center_wrap .c_mian_bottom .about_main .gif_wrap {
  text-align: center;
}
.footer {
  margin-top: 4.266667rem;
  background-color: #131414;
  color: #fff;
}
.footer .top_t {
  padding: 0.64rem 0;
  text-align: center;
  font-size: 0.938667rem;
  height: 1.493333rem;
  line-height: 1.493333rem;
  border-bottom: 1px dashed #333;
}
.footer .top_t .top_num {
  margin-left: 0.64rem;
}
.footer .top_t .top_title {
  color: #9b9b9b;
  font-size: 0.512rem;
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.341333rem;
  margin-right: 0.64rem;
}
.footer .ques {
  padding-top: 0.768rem;
  padding-bottom: 4.266667rem;
  text-align: center;
  font-size: 1.024rem;
  color: rgb(253, 241, 68);
}
.footer .ques i {
  font-style: italic;
}
.fixd {
  text-align: center;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  color: #fff;
  background-color: rgb(10, 155, 53);
}
.fixd span {
  display: inline-block;
  background: #fffd00;
  border-radius: 0.170667rem;
  font-size: 0.853333rem;
  color: #d32a63;
  font-weight: 700;
  padding: 0.213333rem 0.426667rem;
  margin: 0.426667rem 0 0.64rem;
  font-family: "Helvetica Neue";
}
</style>
