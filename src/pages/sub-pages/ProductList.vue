<template>
  <div class="content">
    <div class="operating">
      <div class="operating_add" @click="centerDialogVisible = true">
        <i class="el-icon-plus img-add"></i>
        <span class="operating_add_span">添加</span>
      </div>
    </div>

    <el-dialog title="添加" :visible.sync="centerDialogVisible" width="50%" center>
      <el-tabs class="dialog_tabs" v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="first">
          <div class="dialog_item">
            <span class="dialog_item_span">商品分类:</span>
            <el-select class="dialog_item_select" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select class="dialog_item_select" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>

          <div class="dialog_item">
            <span class="dialog_item_span">商品标题:</span>
            <el-input class="dialog_item_input" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="dialog_item">
            <span class="dialog_item_span">商品主图:</span>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              list-type="picture"
              :limit="1"
            >
              <el-button class="upload-demo-button" size="small" type="primary">点击上传</el-button>
            </el-upload>
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
          <div class="dialog_item">
            <span class="dialog_item_span">商品原价:</span>
            <el-input-number v-model="num" :min="0.01" @change="handleChange" label="描述文字"></el-input-number>
          </div>
          <div class="dialog_item">
            <span class="dialog_item_span">状态:</span>
            <div class="dialog_item_right">
              <el-radio v-model="radio" label="1">下架</el-radio>
              <el-radio v-model="radio" label="2">上架</el-radio>
            </div>
          </div>
          <div class="dialog_item">
            <span class="dialog_item_span">优惠券:</span>
            <el-input-number v-model="num" :min="0.01" :step="1" @change="handleChange" label="描述文字"></el-input-number>
          </div>
        </el-tab-pane>
        <el-tab-pane label="商品详情" name="second">
          <div class="dialog_item">
            <span class="dialog_item_span">详情:</span>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              list-type="picture"
            >
              <el-button class="upload-demo-button" size="small" type="primary">点击上传</el-button>
            </el-upload>
          </div>
          
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "productList",

  data() {
    return {
      centerDialogVisible: false,
      activeName: "first",
      input: "",
      num: 1,
      radio: "1",
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
      value: ""
    };
  },

  methods: {
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleChange(value) {
        console.log(value);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
  }
};
</script>

<style>
.operating {
  display: flex;
  padding: 20px;
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

.dialog_tabs {
  height: 500px;
  overflow-y: auto;
}

.el-dialog__header {
  display: flex;
  align-items: center;
}

.el-dialog__title {
  font-size: 14px;
}

.dialog_item {
  /* height: 50px; */
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
}

.dialog_item_right {
  height: 40px;
  display: flex;
  align-items: center;
}

.dialog_item_span {
  width: 100px;
  height: 40px;
  margin-right: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.dialog_item_select {
  margin-right: 10px;
}

.dialog_item_input {
  width: 444px;
}

.upload-demo-button {
  height: 40px;
}

</style>
