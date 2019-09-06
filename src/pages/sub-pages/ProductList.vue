<template>
  <div class="content">
    <div class="operating">
      <el-button type="primary" @click="centerDialogVisible = true">
        <i class="el-icon-plus img-add"></i>
        <span class="operating_add_span">添加</span>
      </el-button>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      max-height="50%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="id" width="80">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column prop="title" label="商品标题" width=""></el-table-column>
      <el-table-column prop="sort" label="所属分类" width="150"></el-table-column>
      <el-table-column prop="img" label="商品主图" width="160">
        <template slot-scope="scope">
          <img style="height: 60px; width: auto" :src="scope.row.img" />
        </template>
      </el-table-column>
      <el-table-column prop="price" label="商品原价" width="150">
        <template slot-scope="scope">
          <p style="color: #F56C6C">{{ scope.row.price.toFixed(2) }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="discount" label="优惠价格" width="150">
        <template slot-scope="scope">
          <p>{{ scope.row.discount.toFixed(2) }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="volume" label="销量" width="150"></el-table-column>
      <el-table-column prop="state" label="状态" width="120">
        <template slot-scope="scope">
          <span v-if="scope.row.state" style="color: #666">在售</span>
          <span v-else style="color: #999">已下架</span>
        </template>
      </el-table-column>
      <el-table-column prop="option" label="操作" width="120" fixed="right">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- dialog satrt -->
    <el-dialog title="添加商品" :visible.sync="centerDialogVisible" width="800px" center>
      <el-tabs class="dialog_tabs" v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="first">
          <div class="dialog_item">
            <span class="dialog_item_span">商品分类:</span>
            <el-select class="dialog_item_select" v-model="value" placeholder="请选择商品大类">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select class="dialog_item_select" v-model="value" placeholder="请选择商品小类">
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
            <el-input class="dialog_item_input" v-model="input" placeholder="请输入商品标题"></el-input>
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
            <el-input-number
              v-model="num"
              :min="0.01"
              :step="1"
              @change="handleChange"
              label="描述文字"
            ></el-input-number>
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
    <!-- dialog end -->

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
  name: "productList",

  data() {
    return {
      centerDialogVisible: false,
      activeName: "first",
      input: "",
      num: 1,
      radio: "1",
      page: "",
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
      value: "",
      tableData: [],
      test: [
        {
          page: 1,
          commodity: [
            {
              id: 1,
              title: "北京烤鸭",
              sort: "食品",
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2672209328,2990950354&fm=26&gp=0.jpg",
              price: 12.0,
              volume: 0,
              discount: 0.99,
              state: true
            },
            {
              id: 2,
              title: "北京烤鸭",
              sort: "食品",
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2672209328,2990950354&fm=26&gp=0.jpg",
              price: 12.0,
              volume: 0,
              discount: 0.99,
              state: false
            },
            {
              id: 3,
              title: "北京烤鸭",
              sort: "食品",
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2672209328,2990950354&fm=26&gp=0.jpg",
              price: 12.0,
              volume: 0,
              discount: 0.99,
              state: false
            },
            {
              id: 3,
              title: "北京烤鸭",
              sort: "食品",
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2672209328,2990950354&fm=26&gp=0.jpg",
              price: 12.0,
              volume: 0,
              discount: 0.99,
              state: false
            },
            {
              id: 3,
              title: "北京烤鸭",
              sort: "食品",
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2672209328,2990950354&fm=26&gp=0.jpg",
              price: 12.0,
              volume: 0,
              discount: 0.99,
              state: false
            },
            {
              id: 3,
              title: "北京烤鸭",
              sort: "食品",
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2672209328,2990950354&fm=26&gp=0.jpg",
              price: 12.0,
              volume: 0,
              discount: 0.99,
              state: false
            },
            {
              id: 3,
              title: "北京烤鸭",
              sort: "食品",
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2672209328,2990950354&fm=26&gp=0.jpg",
              price: 12.0,
              volume: 0,
              discount: 0.99,
              state: false
            },
            {
              id: 3,
              title: "北京烤鸭",
              sort: "食品",
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2672209328,2990950354&fm=26&gp=0.jpg",
              price: 12.0,
              volume: 0,
              discount: 0.99,
              state: false
            },
            {
              id: 3,
              title: "北京烤鸭",
              sort: "食品",
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2672209328,2990950354&fm=26&gp=0.jpg",
              price: 12.0,
              volume: 0,
              discount: 0.99,
              state: false
            },
            {
              id: 3,
              title: "北京烤鸭",
              sort: "食品",
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2672209328,2990950354&fm=26&gp=0.jpg",
              price: 12.0,
              volume: 0,
              discount: 0.99,
              state: false
            }
          ]
        },
        {
          page: 2,
          commodity: [
            {
              id: 1,
              title: "北京烤鸭",
              sort: "食品",
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2672209328,2990950354&fm=26&gp=0.jpg",
              price: 12.0,
              volume: 0,
              discount: 0.99,
              state: true
            },
            {
              id: 2,
              title: "北京烤鸭",
              sort: "食品",
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2672209328,2990950354&fm=26&gp=0.jpg",
              price: 12.0,
              volume: 0,
              discount: 0.99,
              state: false
            },
            {
              id: 3,
              title: "北京烤鸭",
              sort: "食品",
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2672209328,2990950354&fm=26&gp=0.jpg",
              price: 12.0,
              volume: 0,
              discount: 0.99,
              state: false
            },
            {
              id: 3,
              title: "北京烤鸭",
              sort: "食品",
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2672209328,2990950354&fm=26&gp=0.jpg",
              price: 12.0,
              volume: 0,
              discount: 0.99,
              state: false
            }
          ]
        }
      ]
    };
  },

  created() {
    // let params = {};
    // params = JSON.stringify(params);
    // console.log(params);
    // this.axios.post("/Apigoods/goodsClass", params).then(res => {
    //   console.log(res);
    // });
    this.page = this.test.length;
    console.log(this.page);
    this.tableData = this.test[0].commodity;
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
      this.tableData = this.test[val-1].commodity;
    }
  }
};
</script>

<style scoped>
.content {
  padding: 12px;
}

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

.bottom {
  margin-top: 20px;
}

/* .el-table__body-wrapper.is-scrolling-none {
  padding: 0 12px;
} */

/* .el-table {
  padding: 0 12px;
  box-sizing: border-box;
  margin-right: 12px;
} */
</style>
