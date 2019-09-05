<template>
  <div class="content">
    <div class="operating">
      <el-button type="primary" @click="centerDialogVisible = true">
        <i class="el-icon-plus img-add"></i>
        <span class="operating_add_span">添加</span>
      </el-button>
    </div>

    <div>
      <el-table :data="tableData" tooltip-effect="dark" style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column fixed prop="id" label="ID" width="80"></el-table-column>
        <el-table-column prop="name" label="分类名字"></el-table-column>
        <el-table-column prop="sequence" label="排序" width="150"></el-table-column>
        <el-table-column prop="time" label="添加时间" width="400"></el-table-column>
        <el-table-column prop="status" label="状态" width="200"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="添加分类" :visible.sync="centerDialogVisible" width="800px" center>
      <div class="dialog_item">
        <span class="dialog_item_span">上级分类:</span>
        <el-select class="dialog_item_select" v-model="value" placeholder="请选择商品大类">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="dialog_item">
        <span class="dialog_item_span">分类名字:</span>
        <el-input class="dialog_item_input" v-model="input" placeholder="请输入商品标题"></el-input>
      </div>
      <div class="dialog_item">
        <span class="dialog_item_span">状态:</span>
        <div class="dialog_item_right">
          <el-radio v-model="radio" label="1">开启</el-radio>
          <el-radio v-model="radio" label="2">关闭</el-radio>
        </div>
      </div>
      <div class="dialog_item">
        <span class="dialog_item_span">排序:</span>
        <el-input-number v-model="num" :min="1" :step="1" @change="handleChange" label="描述文字"></el-input-number>
      </div>
      <div class="dialog_item">
        <span class="dialog_item_span">商品小图列表:</span>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          list-type="picture"
          :limit="3"
        >
          <el-button class="upload-demo-button" size="small" type="primary">点击上传</el-button>
        </el-upload>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <!-- <div class="bottom">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-count="page"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Categories",

  data() {
    return {
      centerDialogVisible: false,
      activeName: "first",
      input: "",
      num: 1,
      radio: "1",
    //   page: "",
      value: '',
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      tableData: [
        {
          id: 1,
          name: "食品",
          sequence: 0,
          time: "2019-08-12 19:24:36",
          status: "已启用"
        },
        {
          id: 1,
          name: "食品",
          sequence: 0,
          time: "2019-08-12 19:24:36",
          status: "已启用"
        },
        {
          id: 1,
          name: "食品",
          sequence: 0,
          time: "2019-08-12 19:24:36",
          status: "已启用"
        }
      ]
    };
  },

  created() {
    //   this.page = this.tableData.length
  },

  methods: {
      handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePreview(file) {
      // console.log(file);
    },
    handleChange(value) {
      // console.log(value);
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  }
};
</script>

<style scoped>
.operating {
  display: flex;
  padding-bottom: 12px;
}

.operating_add {
  width: 65px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #18bc9c;
  border-radius: 2px;
  transition: all ease 0.25s;
  cursor: pointer;
}

.operating_add:hover {
  background-color: #128f76;
}

.img-add {
  color: #fff;
  font-size: 12px;
  font-weight: bold;
}

.operating_add_span {
  color: #fff;
  margin-left: 2px;
  font-size: 12px;
}

.dialog_item_select {
    width: 444px;
}
</style>