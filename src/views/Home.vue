<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Home",
  data() {
    return {
      name: "Admin",
    }
  }
})
</script>

<template>
  <el-container style="height: 57vw; border: 1px solid #eee;overflow: hidden">
    <el-aside width="240px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '2']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <router-link to="/list">
            <el-menu-item index="1-1">帖子管理
            </el-menu-item>
          </router-link>
          <router-link to="/ping">
            <el-menu-item index="1-2">论坛</el-menu-item>
          </router-link>
          <router-link to="/ok">
            <el-menu-item index="1-4">统计</el-menu-item>
          </router-link>
          <router-link to="/ok">
            <el-menu-item index="1-3">
              选项2
            </el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4">选项4-1</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>导航三</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4">选项4-1</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 30px">

        <span>{{ name }}</span>
      </el-header>

      <el-main>

        <router-view/>
      </el-main>
    </el-container>
  </el-container>

</template>


<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

* {
  text-decoration: none;
}

.el-aside {
  color: #333;
}
</style>