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
            <div class="r_pic">
              <img :src="code_gif" />
            </div>
          </div>
        </div>
      </div>
      <div class="haochu">
        <img :src="follow_pic" />
      </div>
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
      follow_pic: require("@/assets/image/haochu.png")
    };
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
</style>
