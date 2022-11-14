<template>
  <div class="container">
    <!-- tab栏 -->
    <div class="tab">
<<<<<<< HEAD
<<<<<<< HEAD
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
=======
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
        <el-tab-pane label="项目进度" name="progress">
          <ProgressPage></ProgressPage>
        </el-tab-pane>
        <!-- 项目导航 -->
>>>>>>> 3144e51 (2022-11-14)
=======
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
        <el-tab-pane label="项目导航" name="first">
          <!-- tabName传给子组件 -->
          <ItemCard :tabName="tabName"></ItemCard>
        </el-tab-pane>
<<<<<<< HEAD
<<<<<<< HEAD
        <el-tab-pane label="工具导航" name="second">
          <ItemCard :tabName="tabName"></ItemCard>
=======
        <!-- 工具导航 -->
        <el-tab-pane label="工具导航" name="second">
          <UtilityCard :tabName="tabName"></UtilityCard>
>>>>>>> 3144e51 (2022-11-14)
=======
        <el-tab-pane label="工具导航" name="second">
          <ItemCard :tabName="tabName"></ItemCard>
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import ItemCard from "@/components/ItemCard";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import UtilityCard from "@/components/UtilityCard";
import ProgressPage from "@/components/Progress";
>>>>>>> 3144e51 (2022-11-14)
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
export default {
  name: "ProjectNav",
  components: {
    ItemCard,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    UtilityCard,
    ProgressPage,
>>>>>>> 3144e51 (2022-11-14)
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
  },
  data() {
    return {
      //控制tab栏切换
<<<<<<< HEAD
<<<<<<< HEAD
      activeName: "first",
=======
      activeName: "progress",
>>>>>>> 3144e51 (2022-11-14)
=======
      activeName: "first",
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
      //记录tab栏的具体状态
      tabName: "tab-first",
    };
  },
  methods: {
    handleClick(tab, e) {
      this.tabName = e.target.id;
    },
  },
};
</script>

<style lang="less" scoped>
.container {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
  width: 1300px;
  margin: 0 auto;
  border-right: 2px solid #f1f1f1;
  border-left: 2px solid #f1f1f1;
<<<<<<< HEAD
=======
  width: 100%;
  height: calc(100vh);
  margin-top: 130px;
  .tab {
    margin: 20px;
  }
>>>>>>> 3144e51 (2022-11-14)
=======
>>>>>>> 17c25eb89bb5efdaeb09ffa147728cf4d9e4e3cb
}
</style>