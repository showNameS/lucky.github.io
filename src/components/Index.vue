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
      logo: "",
      // 微信扫码免费领精准计划图片
      title_pic: "",
      // 微信二维码
      code: "",
      // 添加为微信好友gif图
      code_gif: "",
      // 关注699计划图
      follow_pic: "",
      // 左右滑动的轮播图数据
      swipeArr: [],
      // 699计划团队给玩家的一段话
      c_title: "",
      // 699计划团队给玩家的一段话内容
      cMain: [],
      // 计划师实时排名
      c_title_two: "",
      // 计划师实时排名背景图片
      cMainTwoPic: "",
      // 计划师实时排名内容
      cMainTwo: [],
      // 金牌导师计划
      c_title_three: "",
      // 金牌导师背景图片
      cMainThreePic: "",
      // 金牌导师内容
      cMainThree: [],
      // 全天人工计划
      c_title_four: "",
      // 全天人工计划背景图片
      cMainFourPic: "",
      // 全天人工计划内容
      cMainFour: [],
      // 微信名
      code_name: "",
      // 查看盈利排名
      gif_name: "",
      // 累计计划量
      planNum: "",
      // 在线计划师
      onlineNum: "",
      // QQ号
      qq: ""
    };
  },
  created() {
    this.axios.get("https://easy-mock.com/mock/5d3fb0107d8eb213715bb105/example/mock").then(res => {
      if (res.status == 200) {
        let obj = res.data.data;
        this.logo = obj.logo;
        this.title_pic = obj.title_pic;
        this.code = obj.code;
        this.code_gif = obj.code_gif;
        this.follow_pic = obj.follow_pic;
        this.swipeArr = obj.swipeArr;
        this.c_title = obj.c_title;
        this.cMain = obj.cMain;
        this.c_title_two = obj.c_title_two;
        this.cMainTwoPic = obj.cMainTwoPic;
        this.cMainTwo = obj.cMainTwo;
        this.c_title_three = obj.c_title_three;
        this.cMainThreePic = obj.cMainThreePic;
        this.cMainThree = obj.cMainThree;
        this.c_title_four = obj.c_title_four;
        this.cMainFourPic = obj.cMainFourPic;
        this.cMainFour = obj.cMainFour;
        this.code_name = obj.code_name;
        this.gif_name = obj.gif_name;
        this.planNum = obj.planNum;
        this.onlineNum = obj.onlineNum;
        this.qq = obj.qq;
      }
    })
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
