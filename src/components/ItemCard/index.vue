<template lang="">
<<<<<<< HEAD
<<<<<<< HEAD
=======
  <div class="box" :style="{'max-height': this.timeLineHeight + 'px' }"
  style="overflow-y:scroll;">
  <!-- 搜索框 -->
  <div class="searchArea">
    <form action="###" class="searchForm">
      <input type="text" v-model="keyword" @keyup.enter="goSearch" />
      <el-button
        class="btn"
        type="primary"
        icon="el-icon-search"
        @click="goSearch"
        >搜索</el-button
      >
    </form>
  </div>
    <!-- 添加滚动条 -->
>>>>>>> 3144e51 (2022-11-14)
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
    <div class="project">
        <el-card v-for="item in searchItem" :key="item.id" class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <!-- 名称 -->
            <h2 class="title">{{item.name}}</h2>
<<<<<<< HEAD
<<<<<<< HEAD
            <el-button style="float: right; padding: 3px 0" type="text"
              >点击跳转<i class=""></i></el-button
            >
=======
            <!-- <a style="float: right; padding: 3px 0;font-size:14px;color:#409EFF;" type="text" :href="item.url"
              >点击跳转</a
            > -->
>>>>>>> 3144e51 (2022-11-14)
=======
            <el-button style="float: right; padding: 3px 0" type="text"
              >点击跳转<i class=""></i></el-button
            >
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
          </div>
          <!-- 详情 -->
          <div class="text item">
            <!-- tabName：决定内容展示是工具/项目 -->
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
            <template v-if="tabName=='tab-first'">
            <ul class="info">
              <li>
                项目预览：<el-image
                  style="width: 100px"
                  :src="url"
                  :preview-src-list="srcList"
<<<<<<< HEAD
=======
            <!-- 如果是项目 -->
            <template v-if="tabName=='tab-first'">
            <ul class="info">
              <!-- 图片预览 -->
              <li>
                <el-image
                  style="width: 100px"
                  :src="item.imgUrl"
                  :preview-src-list="item.srcList"
>>>>>>> 3144e51 (2022-11-14)
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
                  class="image"
                >
                </el-image>
              </li>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
                <li>版本：<span>xxx.xx.x</span></li>
                <li>状态：<span>xx</span><i class="el-icon-success" style="color:green;padding-left:5px;"></i></li>
                <li>开发人员：<span>xxx</span></li>
            </ul>
          </template>
<<<<<<< HEAD
=======
              <li>项目地址：</br><a style="color:#409EFF" :href="item.url">{{item.url}}</a></li>
                <li>版本：<span>{{item.version}}</span></li>
                <li>状态：<span>{{item.status}}</span><i class="el-icon-s-platform" style="color:green;padding-left:5px;"></i></li>
                <li>开发人员：<span>{{item.dev}}</span></li>
            </ul>
          </template>
          <!-- 如果选择了工具 -->
>>>>>>> 3144e51 (2022-11-14)
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
          <template v-else>
  <ul class="info">
    <li>
      工具预览：<el-image
        style="width: 100px"
<<<<<<< HEAD
<<<<<<< HEAD
        :src="url"
        :preview-src-list="srcList"
=======
        :src="item.imgUrl"
        :preview-src-list="item.srcList"
>>>>>>> 3144e51 (2022-11-14)
=======
        :src="url"
        :preview-src-list="srcList"
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
        class="image"
      >
      </el-image>
    </li>
<<<<<<< HEAD
<<<<<<< HEAD
    <li>工具介绍：<span>xxxxxxx</span></li>
=======
    <li>
      工具介绍：<span>{{ item.description }}</span>
    </li>
>>>>>>> 3144e51 (2022-11-14)
=======
    <li>工具介绍：<span>xxxxxxx</span></li>
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
  </ul>
</template>
          </div>
        </el-card>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
</template>
<script>
=======
  </div>
</template>
<script>
//引入json数据
import projectData from "../../../public/projectData.json";
>>>>>>> 3144e51 (2022-11-14)
=======
</template>
<script>
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
export default {
  name: "ItemCard",
  data() {
    return {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
      //接收兄弟header传来的keyword
      keyword: "",

      //模拟的项目数据
      item: [
        { name: "基于数据挖掘故障检测系统", id: 0 },
        { name: "基于规则异常检测系统", id: 1 },
        { name: "航天器在轨数据评估与应用系统", id: 2 },
        { name: "基于数据挖掘故障检测系统", id: 3 },
        { name: "基于规则异常检测系统", id: 4 },
        { name: "航天器在轨数据评估与应用系统", id: 5 },
        { name: "基于数据挖掘故障检测系统", id: 6 },
        { name: "基于规则异常检测系统", id: 7 },
        { name: "航天器在轨数据评估与应用系统", id: 8 },
        { name: "基于数据挖掘故障检测系统", id: 9 },
        { name: "基于规则异常检测系统", id: 10 },
        { name: "航天器在轨数据评估与应用系统", id: 11 },
      ],
      //模拟搜索数据
      searchItem: [
        { name: "基于数据挖掘故障检测系统", id: 0 },
        { name: "基于规则异常检测系统", id: 1 },
        { name: "航天器在轨数据评估与应用系统", id: 2 },
        { name: "基于数据挖掘故障检测系统", id: 3 },
        { name: "基于规则异常检测系统", id: 4 },
        { name: "航天器在轨数据评估与应用系统", id: 5 },
        { name: "基于数据挖掘故障检测系统", id: 6 },
        { name: "基于规则异常检测系统", id: 7 },
        { name: "航天器在轨数据评估与应用系统", id: 8 },
        { name: "基于数据挖掘故障检测系统", id: 9 },
        { name: "基于规则异常检测系统", id: 10 },
        { name: "航天器在轨数据评估与应用系统", id: 11 },
      ],
      // 模拟的图片预览数据
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
      ],
<<<<<<< HEAD
=======
      //收集keyword
      keyword: "",
      //数据
      item: projectData,
      searchItem: projectData,
      //记录滚动条高度
      timeLineHeight: "",
>>>>>>> 3144e51 (2022-11-14)
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
    };
  },
  props: ["tabName"],
  mounted() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
    this.getKeyword();
  },
  methods: {
    //接收header搜索框的keyword
    getKeyword() {
      this.$bus.$on("keyword", (keyword) => {
        this.keyword = keyword;
        console.log("keyword=", this.keyword);
        this.showSearch(this.keyword);
      });
    },
    //展示搜索页
    showSearch(keyword) {
      if (!keyword) {
        this.searchItem = JSON.parse(JSON.stringify(this.item));
        console.log("old:", this.searchItem);
        return;
      }
      let reg = new RegExp(keyword);
      this.searchItem = this.item.filter((item) => {
        return reg.test(item.name);
      });
      console.log("new:", this.searchItem);
<<<<<<< HEAD
=======
    // this.getData();
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
    //     this.searchItem = projectData;
    //   } else {
    //     let reg = new RegExp(keyword);
    //     this.searchItem = this.item.filter((item) => {
    //       return reg.test(item.name);
    //     });
    //     // console.log("new:", this.searchItem);
    //   }
    // },

    //搜索功能
    goSearch() {
      if (!this.keyword) {
        this.searchItem = projectData;
      } else {
        let reg = new RegExp(this.keyword);
        this.searchItem = this.item.filter((item) => {
          return reg.test(item.name);
        });
        // console.log("new:", this.searchItem);
      }
      //清空input框
      this.keyword = "";
>>>>>>> 3144e51 (2022-11-14)
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
    },
  },
};
</script>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
<style lang="less">
.project {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  color: #fff;
  background-color: #fcfdff;
<<<<<<< HEAD
=======
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
>>>>>>> 3144e51 (2022-11-14)
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
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
<<<<<<< HEAD
<<<<<<< HEAD
    width: 380px;
    margin: 10px;
=======
    width: 21%;
    margin: 20px 0;
>>>>>>> 3144e51 (2022-11-14)
=======
    width: 380px;
    margin: 10px;
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
.searchArea {
  float: left;
  margin: 10px 110px 10px 0;
  .searchForm {
    overflow: hidden;

    input {
      box-sizing: border-box;
      width: 300px;
      height: 40px;
      padding: 0px 4px;
      border: 1px solid #409eff;
      border-right: 0 solid;
      border-radius: 4px;
      float: left;

      &:focus {
        outline: none;
      }
    }

    .btn {
      float: left;
      background-color: #409eff;
      margin-left: -5px;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }
  }
}
>>>>>>> 3144e51 (2022-11-14)
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
</style>