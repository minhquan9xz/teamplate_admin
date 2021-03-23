<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Create Product
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="input-group input-group-lg">
              <span class="input-group-text" id="inputGroup-sizing-lg"
                >Tên sản phẩm</span
              >
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                v-model="tensanpham"
              />
            </div>
            <div class="input-group input-group-lg">
              <span class="input-group-text" id="inputGroup-sizing-lg"
                >Mô tả</span
              >
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                v-model="mota"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="add_product">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Tên sản phẩm</th>
          <th scope="col">Mô tả</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in info" v-bind:key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.detail }}</td>
          <button type="button" class="btn btn-danger" @Click="delete_product">
            Delete
          </button>
          <button
            type="button"
            class="btn btn-danger"
            style="margin-left: 10px"
          >
            Update
          </button>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: [],
      tensanpham: "",
      mota: "",
    };
  },
  mounted() {
    this.$axios
      .get("http://127.0.0.1:8000/api/auth/createproduct")
      .then((res) => {
        console.log(res.data);
        this.info = res.data.data;
      });
  },
  methods: {
    reload() {
      this.$axios
        .get("http://127.0.0.1:8000/api/auth/showproduct")
        .then((res) => {
          console.log(res.data);
          this.info = res.data.data;
        });
    },
    add_product() {
      if (!this.tensanpham || !this.mota == null) {
        confirm("Vui lòng nhập đẩy đủ thông tin");
      }
      let data = {
        tensanpham: this.tensanpham,
        mota: this.mota,
      };
      this.$axios
        .post("http://127.0.0.1:8000/api/auth/createproduct", data)
        .then(() => {
          // (this.tensanpham = res.data.data), (this.mota = res.data.data);
          this.reload();
        });
    },
  },
};
</script>








