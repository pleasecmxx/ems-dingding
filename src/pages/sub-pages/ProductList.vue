<template>
  <div class="content">
    <div class="operating">
      <div class="operating_add" @click="centerDialogVisible = true">
        <i class="el-icon-plus"></i>
        <span class="operating_add_span">添加</span>
      </div>
    </div>

    <el-dialog title="添加" :visible.sync="centerDialogVisible" width="50%" center>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
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
            <el-select class="dialog_item_select" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">商品详情</el-tab-pane>
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
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      value: ''
    };
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

.el-icon-plus {
  color: #fff;
  font-size: 12px;
  font-weight: bold;
}

.operating_add_span {
  color: #fff;
  margin-left: 2px;
  font-size: 12px;
}

.el-dialog__header {
  display: flex;
  align-items: center;
}

.el-dialog__title {
  font-size: 14px;
}

.dialog_item {
  height: 50px;
  display: flex;
  align-items: center;
}

.dialog_item_span {
  margin-right: 30px;
}

.dialog_item_select {
  margin-right: 10px;
}


</style>
