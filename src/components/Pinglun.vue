<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Pinglun",
  data() {
    return {
      lister: [{
        id: 1,
        name: '张三',
        neiro: "孙⼦⽈：兵者，国之⼤事，死⽣之地，存亡之道，不可不察也。故经之以五事，校之以计，⽽索其情：⼀⽈道，⼆⽈天，三⽈地，四⽈将，五⽈法。道者，令⺠与上同意也，故可以与之死，可以\n" +
            "",
        createTime: '2024-01-1 13:30:22',
        addr: '北京市海定区',
        imge: ['/xxx.jpg', '/favicon.ico'], types: '知识分享,今日心情'
      }, {
        id: 1, name: '李四', neiro: "好漂亮的小鸟", createTime: '2024-01-1 13:30:22', addr: '北京市海定区',
        imge: ['/xxx.jpg', '/xxx.jpg'], types: '今日心情'
      }, {
        id: 1, name: '王二', neiro: "吃饭吃饭吃饭", createTime: '2024-01-1 13:30:22', addr: '北京市海定区',
        imge: ['/xxx.jpg', '/xxx.jpg', '/xxx.jpg'], types: '鬼畜搞笑,知识分享,今日心情'
      }, {
        id: 1, name: '麻子', neiro: "吃饭吃饭吃饭", createTime: '2024-01-1 13:30:22', addr: '北京市海定区',
        imge: ['/xxx.jpg', '/xxx.jpg'], types: '鬼畜搞笑,知识分享,今日心情'
      }, {
        id: 1, name: '张三2', neiro: "吃饭吃饭吃饭", createTime: '2024-01-1 13:30:22', addr: '北京市海定区',
        imge: ['/xxx.jpg', '/xxx.jpg'], types: '鬼畜搞笑,知识分享,今日心情'
      }, {
        id: 1, name: '张三2', neiro: "吃饭吃饭吃饭", createTime: '2024-01-1 13:30:22', addr: '北京市海定区',
        imge: ['/xxx.jpg', '/xxx.jpg'], types: '鬼畜搞笑,知识分享,今日心情'
      },
      ], dialogFormVisible: false, form: {}, types: [],

      fileList: [{
        name: 'food.jpeg',
        url: '/favicon.ico'
      },]
    }
  }, methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }, created() {
  }
})
</script>

<template>
  <div id="ping">
    <div style="  position: fixed; right: 80px;top: 120px">

      <el-button type="primary" @click="dialogFormVisible=true">发布</el-button>
    </div>

    <el-container class="pa" v-for="pin in lister">
      <el-header style="text-align: left; height: 60px">
        <el-image style="width: 35px; height: 35px; vertical-align:middle;"
                  src="/favicon.ico" fit="cover"></el-image>
        <span>
        {{ pin.name }}
        </span>
      </el-header>
      <el-main style="text-align: left; line-height: 16px">
        <span style="margin-bottom: 20px">
        {{ pin.neiro }}
        </span><br>

        <el-image v-for="image in pin.imge"
                  style="width: 150px; height: 150px; vertical-align:middle; margin-right: 20px;margin-top: 20px"
                  :src="image" fit="cover"></el-image>
        <br><br>
        <span> 所属频道：{{ pin.types }}</span>
      </el-main>
      <el-footer>
        <span style="float: left">
        <!--       todo  -->
        点赞
        评论
        </span>
        <span style="float: right;text-align: right;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        发布日期: {{ pin.createTime }}
        </span>
        <span style="float: right;text-align: right;">
        发布地点: {{ pin.addr }}
        </span>
      </el-footer>
    </el-container>


    <el-dialog title="发布帖子" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="作者">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="帖子内容">
          <!--          <el-input v-model="form.name" autocomplete="off"></el-input>-->
          <el-input type="textarea" rows="4" v-model="form.neiro" autosize placeholder="说出你想说的话"></el-input>
        </el-form-item>
        <el-form-item label="分享图片">
          <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="帖子分区">
          <el-checkbox-group v-model="types">
            <el-checkbox>鬼畜搞笑</el-checkbox>
            <el-checkbox>知识分享</el-checkbox>
            <el-checkbox>今日心情</el-checkbox>
            <el-checkbox>游戏娱乐</el-checkbox>
            <el-checkbox>运动健身</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="发布地点">
          <el-select v-model="form.status" clearable placeholder="请选择">
            <el-option value="北京市海定区"></el-option>
            <el-option value="郑州市航空港区"></el-option>
            <el-option value="山西省大同市"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="form.status" clearable placeholder="请选择">
            <el-option value="公开-所有人可见"></el-option>
            <el-option value="朋友-朋友可见"></el-option>
            <el-option value="私密-自己可见"></el-option>
          </el-select>
        </el-form-item>


      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style scoped>
#ping {
//background-color: #000;
}

.pa {
  margin-bottom: 15px;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}


.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>