<template lang="">
    <div class="project" :style="{'max-height': this.timeLineHeight + 'px' }"
    style="overflow-y:auto;">
        <el-card v-for="item in searchItem" :key="item.id" class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <!-- 名称 -->
            <h2 class="title">{{item.name}}</h2>
            <!-- <a style="float: right; padding: 3px 0;font-size:14px;color:#409EFF;" type="text" :href="item.url"
              >点击跳转</a
            >  -->
          </div>
          <!-- 详情 -->
          <div class="text item">
            <!-- tabName：决定内容展示是工具 -->
  <ul class="info">
    <li>
      <el-image
        style="width: 100px"
        :src="item.imgUrl"
        :preview-src-list="item.srcList"
        class="image"
      >
      </el-image>
    </li>
    <li>工具地址：<br><a style="color:#409EFF" :href="item.url">{{item.url}}</a></li>
    <li>
      工具介绍：<br><span>{{ item.description }}</span>
    </li>
  </ul>
          </div>
        </el-card>
      </div>
</template>
<script>
//引入json数据
import utilityData from "../../../public/utilityData.json";
export default {
  name: "UtilityCard",
  data() {
    return {
      // //接收兄弟header传来的keyword
      // keyword: "",
      //数据
      item: utilityData,
      searchItem: utilityData,
      //记录滚动条高度
      timeLineHeight: "",
    };
  },
  props: ["tabName"],
  mounted() {
    this.getData();
    //设置滚动条
    this.timeLineHeight = document.documentElement.clientHeight - 190;
    window.onresize = () => {
      this.timeLineHeight = document.documentElement.clientHeight - 190;
    };
  },
  methods: {
    // //接收header搜索框的keyword || 渲染全部列表
    // getData() {
    //   this.$bus.$on("keyword", (keyword) => {
    //     this.keyword = keyword;
    //     console.log("keyword=", this.keyword);
    //     this.showSearch(this.keyword);
    //   });
    // },
    // //展示搜索页
    // showSearch(keyword) {
    //   if (!keyword) {
    //     this.searchItem = utilityData;
    //   } else {
    //     let reg = new RegExp(keyword);
    //     this.searchItem = this.item.filter((item) => {
    //       return reg.test(item.name);
    //     });
    //     console.log("new:", this.searchItem);
    //   }
    // },
  },
};
</script>
<style lang="less" scoped>
.project {
  width: 100%;
  height: calc(100vh);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  color: #fff;
  background-color: #fcfdff;
  &:after {
    content: "";
    width: 21%;
    display: block;
    height: 0;
  }
  .text {
    font-size: 14px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 21%;
    margin: 20px 0;
    h2 {
      display: inline-block;
    }
  }
  .info {
    margin-left: 20px;
    .image {
      vertical-align: middle;
    }
    li {
      padding: 5px 0;
      margin-left: -17px;
      font-weight: 600;
      span {
        font-weight: 400;
      }
    }
  }
}
</style>