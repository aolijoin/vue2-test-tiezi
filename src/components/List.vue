<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "List",
  data() {
    const item = {
      createTime: '2016-05-02 13:30:22',
      name: '王小虎',
      addr: '上海市普陀区金沙江路 1518 弄',
      status: '公开',
      neiro: '大数据驾到, 低调低调, 不要掌声,只要尖叫 ',
      image: ['/xxx.jpg', '/favicon.ico'],types:'鬼畜搞笑,知识分享,今日心情'
    };
    return {
      tableData: Array(5).fill(item)
      , form: {},

    }
  },methods:{
    handleCurrentChange(){

    },handleSizeChange(){

    }
  }
})
</script>

<template>
  <div id="list">

    <el-input placeholder="搜索用户和帖子内容" prefix-icon="el-icon-search" v-model="name"
              style="width: 200px"></el-input>
    所属频道
    <el-select v-model="form.status" placeholder="请选择" clearable>
      <el-option value="鬼畜搞笑"></el-option>
      <el-option value="知识分享"></el-option>
      <el-option value="今日心情"></el-option>
      <el-option value="游戏娱乐"></el-option>
    </el-select>

    发布地点
    <el-select v-model="form.status" placeholder="请选择" clearable>
      <el-option value="北京市海定区"></el-option>
      <el-option value="郑州市航空港区"></el-option>
      <el-option value="山西省大同市"></el-option>
    </el-select>
    帖子状态
    <el-select v-model="form.status" placeholder="请选择" clearable>
      <el-option value="公开-所有人可见"></el-option>
      <el-option value="朋友-朋友可见"></el-option>
      <el-option value="私密-自己可见"></el-option>
    </el-select>
    <el-button type="primary">搜索</el-button>
    <el-button type="primary">导出</el-button>
    <el-table :data="tableData">
      <el-table-column prop="name" label="用户名"></el-table-column>
      <el-table-column prop="neiro" label="帖子内容"></el-table-column>
      <el-table-column prop="image" label="帖子图片">
        <template slot-scope="scope">
          <el-image v-for="image in scope.row.image"
                    style="width: 25px; height: 25px; vertical-align:middle; margin-right: 20px;"
                    :src="image" fit="cover"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="types" label="所属频道"></el-table-column>
      <el-table-column prop="addr" label="发布地点"></el-table-column>
      <el-table-column prop="status" label="帖子状态"></el-table-column>
      <el-table-column prop="createTime" label="发布日期"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          隐藏
          删除
        </template>
      </el-table-column>
    </el-table>
    <el-pagination style=" position: fixed; right: 30%;top: 90%"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length">
    </el-pagination>
  </div>
</template>

<style scoped>

</style>