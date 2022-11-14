<template>
  <!-- 滚动条 -->
  <div
    class="m-box"
    :style="{ 'max-height': this.timeLineHeight + 'px' }"
    style="overflow-y: scroll"
  >
    <DIV class="container" align="center"
      ><IFRAME
        src="https://docs.qq.com/sheet/DSHFTb2dab1d3WVBR?tab=BB08J2"
        frameBorder="0"
        marginwidth="0"
        marginheight="0"
        scrolling="no"
        style="width: 100%; height: 700px"
        ALLOWTRANSPARENCY="true"
      ></IFRAME
    ></DIV>
  </div>
</template>
    <script>
//src是嵌入的网页地址
export default {
  name: "ProgressPage",
  data() {
    return {
      //记录滚动条高度
      timeLineHeight: "",
    };
  },
  mounted() {
    //设置滚动条
    this.timeLineHeight = document.documentElement.clientHeight - 180;
    window.onresize = () => {
      this.timeLineHeight = document.documentElement.clientHeight - 180;
    };
  },
};
</script>
    <style lang="less" scoped>
.m-box {
  width: 100%;
  height: 50%;
  .container {
    width: 100%;
    height: calc(100vh);
  }
}
</style>