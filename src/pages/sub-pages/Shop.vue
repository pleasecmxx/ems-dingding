<template>
  <div class="content">
    <div class="operating">
      <el-button type="primary" @click="centerDialogVisible = true">
        <i class="el-icon-plus img-add"></i>
        <span class="operating_add_span">添加</span>
      </el-button>
    </div>

    <div>
      <el-table :data="info" tooltip-effect="dark" style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column fixed prop="id" label="ID" width="80"></el-table-column>
        <el-table-column prop="name" label="店铺名称" width="150"></el-table-column>
        <el-table-column label="商品主图" width="150">
          <template slot-scope="scope">
            <img style="height: 60px; width: auto" :src="scope.row.logo" />
          </template>
        </el-table-column>
        <el-table-column label="店铺简介">
          <template slot-scope="scope">
            <p class="el-table-column-introduction">{{ scope.row.introduction }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="phone" label="联系电话" width="150"></el-table-column>
        <el-table-column label="状态" width="200">
          <template slot-scope="scope">
            <span v-if="scope.row.status" style="color: #666">正常</span>
            <span v-else style="color: #999">整改</span>
          </template>
        </el-table-column>
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
        <span class="dialog_item_span">店铺名称:</span>
        <el-input class="dialog_item_input" v-model="input" placeholder="请输入店铺名称"></el-input>
      </div>
      <div class="dialog_item">
        <span class="dialog_item_span">店铺头像:</span>
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
        <span class="dialog_item_span">店铺简介:</span>
        <el-input class="dialog_item_input" v-model="input" placeholder="请输入店铺简介"></el-input>
      </div>
      <div class="dialog_item">
        <span class="dialog_item_span">联系电话:</span>
        <el-input class="dialog_item_input" v-model="input" placeholder="请输入联系电话"></el-input>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <div class="bottom">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-count="page"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop",

  data() {
    return {
      centerDialogVisible: false,
      activeName: "first",
      input: "",
      num: 1,
      radio: "1",
      page: "",
      value: "",
      info: [],
      shopInfo: [
        {
          page: 1,
          info: [
            {
              id: 1,
              name: "汉堡炸鸡店",
              logo:
                "https://gd3.alicdn.com/imgextra/i2/2200631700081/O1CN01KNZoya1CT8bBFfhdd_!!2200631700081.jpg",
              introduction:
                "汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡",
              phone: "13345454545",
              status: true
            },
            {
              id: 1,
              name: "汉堡炸鸡店",
              logo:
                "https://gd3.alicdn.com/imgextra/i2/2200631700081/O1CN01KNZoya1CT8bBFfhdd_!!2200631700081.jpg",
              introduction:
                "汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡",
              phone: "13345454545",
              status: false
            },
            {
              id: 1,
              name: "汉堡炸鸡店",
              logo:
                "https://gd3.alicdn.com/imgextra/i2/2200631700081/O1CN01KNZoya1CT8bBFfhdd_!!2200631700081.jpg",
              introduction:
                "汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡",
              phone: "13345454545",
              status: false
            },
            {
              id: 1,
              name: "汉堡炸鸡店",
              logo:
                "https://gd3.alicdn.com/imgextra/i2/2200631700081/O1CN01KNZoya1CT8bBFfhdd_!!2200631700081.jpg",
              introduction:
                "汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡",
              phone: "13345454545",
              status: true
            },
            {
              id: 1,
              name: "汉堡炸鸡店",
              logo:
                "https://gd3.alicdn.com/imgextra/i2/2200631700081/O1CN01KNZoya1CT8bBFfhdd_!!2200631700081.jpg",
              introduction:
                "汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡",
              phone: "13345454545",
              status: true
            }
          ]
        },
        {
          page: 2,
          info: [
            {
              id: 1,
              name: "汉堡炸鸡店",
              logo:
                "https://gd3.alicdn.com/imgextra/i2/2200631700081/O1CN01KNZoya1CT8bBFfhdd_!!2200631700081.jpg",
              introduction:
                "汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡",
              phone: "13345454545",
              status: true
            },
            {
              id: 1,
              name: "汉堡炸鸡店",
              logo:
                "https://gd3.alicdn.com/imgextra/i2/2200631700081/O1CN01KNZoya1CT8bBFfhdd_!!2200631700081.jpg",
              introduction:
                "汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡",
              phone: "13345454545",
              status: true
            },
            {
              id: 1,
              name: "汉堡炸鸡店",
              logo:
                "https://gd3.alicdn.com/imgextra/i2/2200631700081/O1CN01KNZoya1CT8bBFfhdd_!!2200631700081.jpg",
              introduction:
                "汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡",
              phone: "13345454545",
              status: true
            },
            {
              id: 1,
              name: "汉堡炸鸡店",
              logo:
                "https://gd3.alicdn.com/imgextra/i2/2200631700081/O1CN01KNZoya1CT8bBFfhdd_!!2200631700081.jpg",
              introduction:
                "汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡汉堡",
              phone: "13345454545",
              status: true
            }
          ]
        }
      ]
    };
  },

  created() {
    this.page = this.shopInfo.length;
    this.info = this.shopInfo[0].info;
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

    handleCurrentChange(val) {
      console.log(val);
      this.info = this.shopInfo[val - 1].info;
    }
  }
};
</script>

<style scoped>
.content {
  padding: 12px;
}

.img-add {
  color: #fff;
  font-size: 12px;
  font-weight: bold;
}

/* .el-table-column-introduction {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
} */
</style>