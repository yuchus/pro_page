<template>
  <div class="header">
    <!-- logo -->
    <div class="logoArea">
      <img src="@/assets/logo.png" alt="" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
      <h1>导航</h1>
    </div>
    <!-- 搜索框 -->
    <div class="searchArea">
      <form action="###" class="searchForm">
        <input type="text" v-model="keyword" />
<<<<<<< HEAD
=======
      <h1>项目&工具导航</h1>
    </div>
    <!-- 搜索框 -->
    <!-- <div class="searchArea">
      <form action="###" class="searchForm">
        <input type="text" v-model="keyword" @keyup.enter="goSearch" />
>>>>>>> 3144e51 (2022-11-14)
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
        <el-button
          class="btn"
          type="primary"
          icon="el-icon-search"
          @click="goSearch"
          >搜索</el-button
        >
      </form>
<<<<<<< HEAD
<<<<<<< HEAD
    </div>
=======
    </div> -->
>>>>>>> 3144e51 (2022-11-14)
=======
    </div>
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
  </div>
</template>
<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    //把搜索的keyword传给兄弟组件card
<<<<<<< HEAD
<<<<<<< HEAD
    goSearch() {
      this.$bus.$emit("keyword", this.keyword);
    },
=======
    // goSearch() {
    //   this.$bus.$emit("keyword", this.keyword);
    //   //清空input框
    //   this.keyword = "";
    // },
>>>>>>> 3144e51 (2022-11-14)
=======
    goSearch() {
      this.$bus.$emit("keyword", this.keyword);
    },
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
  },
};
</script>
<style lang="less" scoped>
.header {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  position: fixed;
  top: 0;
  z-index: 99999;
>>>>>>> 3144e51 (2022-11-14)
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-bottom: 2px solid #f0f1f0;
  .logoArea {
    float: left;
    margin: 15px 45px;
    img {
      width: 80px;
      vertical-align: bottom;
    }
    h1 {
      display: inline-block;
      color: #2f2f2f;
      margin-left: 10px;
      font-size: 30px;
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
  .searchArea {
    float: right;
    margin: 35px 110px 0 0;
    .searchForm {
      overflow: hidden;

      input {
        box-sizing: border-box;
        width: 400px;
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
<<<<<<< HEAD
=======
>>>>>>> 3144e51 (2022-11-14)
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
}
</style>