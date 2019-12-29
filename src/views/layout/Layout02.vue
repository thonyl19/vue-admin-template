<template>
  <dl class="layout02 flex f-row ">
    <dt class="left">
      <dl class="sidebar flex f-col">
        <dt class="fixed-sec"  >
          固定高度
        </dt>
        <dd class="sty-scroll" >
          <div class="float-sec">
              浮動高度且自產生 scroll
          </div>

        </dd>
      </dl>
    </dt>
    <dd>
      <dl class="flex f-col" style="height:100%;">
        <dt class="fixed-sec"  >
          固定高度
        </dt>
        <dd class="sty-scroll">
          <div class="float-sec">
             浮動高度且自產生 scroll
          </div>
        </dd>
        <dt class="fixed-sec"  >
          固定高度
        </dt>
      </dl>
    </dd>
  </dl>
</template>

<script>
export default {
  data() {
    return {
      flex_row: true,
      flex_g1: true,
      flex_center: true,
      items: {
        A00: {
          name: "資料統計",
          unit: ""
        }
      }
    };
  }
};
</script>
<style scoped>
.fixed-sec{
  background-color: cyan;
  min-height: 100px;
}

.float-sec{
  border: red ridge 1px;
  padding: 5px;
  height: 100em;
}


.layout02 {
  background-color: darkturquoise;
  /* 這裡的配置 是為了配合 當前頁面的橫幅, 應視實蜓使用環境做調整 ,不然 scroll bar 不會正確作用 */
  height: calc(100vh - 50px);
}
.left{
  border-right: gray groove 1px;
}
  
.sidebar {
  width: 15em;
  /* 因為 具體限制高度,不然 scroll bar 不會正確作用  */
  height: 100%;
}

 


.flex,
.flex dt,
.flex dd {
  display: block;
  padding: 0px;
  margin: 0px;
}


dl.flex {
  display: flex;
}

.flex.f-col {
  flex-flow: column;
}
.flex.f-row {
  flex-flow: row;
}

.flex dt {
  flex: 0;
}

.flex dd {
  flex: 1;
}


.sty-scroll {
  margin-bottom: 0.35em;
  /* overflow-y: hidden; */
  overflow-y: scroll;
}
.sty-scroll:hover {
  overflow-y: scroll;
}

.sty-scroll::-webkit-scrollbar-track {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid #62c905;
}

.sty-scroll::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

.sty-scroll::-webkit-scrollbar-thumb:hover {
  background: #fff;
}

.sty-scroll::-webkit-scrollbar-thumb:active {
  background: linear-gradient(left, #22add4, #1e98ba);
}

.sty-scroll::-webkit-scrollbar {
  width: 10px;
  background-color: #62c905;
}
</style>
