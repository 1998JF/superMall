<template>
  <div class="userInfo">
      <img src="~assets/img/profile/avatar.svg" alt="">
      <div class="userContent">
          <div class="login">登录/注册</div>
          <div class="phone">
              <img src="~assets/img/profile/phone.svg" alt="">
              <span>暂无绑定手机号</span>
          </div>
      </div>
      <div class="arrow"><img src="~assets/img/common/arrow-left.svg" alt=""></div>
  </div>
</template>

<script>
export default {
name:"UserInfo",
}
</script>

<style scoped>
.userInfo{
    width: 100%;
    height: 85px;
    padding: 6px 15px;
    color: #fff;
    background-color: var(--color-tint);
    display: flex;
    align-items: center;
}
.userInfo img{
    width: 70px;
    height: 70px;
}
.userContent{
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 5px;
}
.login{
    height: 18px;
    font-size: 16px;
    padding-left: 5px;
}
.phone{
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 13px;
}
.phone img{
    width: 20px;
    height: 30px;
}
.arrow{
    width: 20px;
    height: 73px;
    line-height: 73px;
}
.arrow img{
    width: 20px;
    height: 20px;
}
</style>