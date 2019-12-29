<template>
  <div class="main">
    <input type="checkbox" v-model="flex_row">flex-row
    <input type="checkbox" v-model="flex_g1">flex-grow 1
    <input type="checkbox" v-model="flex_center">flex align-self: center
    <div class="layout01" :class="[flex_row ?'flex-row':'']">
      <h5>{{items.A00.name}}</h5>
      <div  :class="{'flex-g1':flex_g1 ,'flex-center':flex_center}"    >
          <div >A</div>
          <div>B</div>
      </div>
      <el-button type="primary" >送出</el-button>
    </div>
  </div>
  
</template>

<script>
export default {
  data(){
    return {
      flex_row:true,
      flex_g1:true,
      flex_center:true,
      items:{
        A00:{
            name :'資料統計',
            unit :''
        }
      }
    }
  }
}
</script>
<style  scoped>
.main{
  margin: 1em;
}
.layout01{
  border-radius: 10px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(121, 121, 121, 1);
  background: -webkit-linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(0, 255, 153, 1) 100%, rgba(0, 255, 153, 1) 100%);
  background: -moz-linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(0, 255, 153, 1) 100%, rgba(0, 255, 153, 1) 100%);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(0, 255, 153, 1) 100%, rgba(0, 255, 153, 1) 100%);
}

.flex-row {
	display: flex;
	flex-direction: row;
}
.flex-g1{
  flex-grow:1;
}
.flex-center{
  align-self: center;
}

.layout01 .el-button {
  margin: .5em;
}
 
</style>