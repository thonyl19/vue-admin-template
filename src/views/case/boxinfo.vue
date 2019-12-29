<template>
  <div class="main"> 
  {{Lists_x}}
    <ul>
      <li>
        Cols<input v-model.number="Cols"  />
        <select  v-model.number="ColType"  > 
          <option v-for="(value,key) in displayType" :value=key>{{value}}</option>
        </select>
      </li>
      <li>
        Rows<input v-model.number="Rows"  />
        <select v-model.number="RowType">
          <option v-for="(value,key) in displayType" :value=key>{{value}}</option>
        </select>
      </li>
      <li>
        OrderType
        <select v-model.number="orderType">
          <option v-for="(value,key) in displayOrder" :value=key>{{value}}</option>
        </select>
      </li>
      <li>
        axisVisable<input type="checkbox" v-model="AxisVisable"/>
      </li>
      <li>
        <el-button type="primary" @click="Exec" >Create</el-button>
      </li>
      <li>
        <input v-on:keyup.enter="action($event)" />
      </li>
    </ul>
 
    <BoxinfoView
      ref="view"
      v-bind:Cols=Cols
      v-bind:ColType=ColType
      v-bind:Rows=Rows
      v-bind:RowType=RowType
      v-bind:AxisVisable=AxisVisable
      v-bind:OrderType=orderType
      
      v-bind:AutoGen=true
    ></BoxinfoView>
  </div>
  
</template>

<script>
import BoxinfoView from './boxinfo-view'
export default {
  components:{BoxinfoView},
  data(){
    return {
      Cols:5,
      ColType:0,
      Rows:5,
      RowType:0,
      orderType:0,
      AxisVisable:true,
      displayType:{
        0:'1~n',
        1:'A~Z',
        2:'a~z',
      },
      displayOrder: {
        0:'col-row',
        1:'row-col'
      },
      Lists:[],
      Lists_x:{},
      axis:{
        x:[],
        y:[]
      },  
      charArr : Array.from("ABCDEFGHIJKLMNOPQRESTUVWXYZ"),
      selected:{ }
    }
  },
  methods:{
    Exec(){
      this.$refs.view.Exec();
    },

    transAxis(idx,type){
      var result ;
      switch(type){
        case 1:
          result = this.charArr[idx];
          break;
        case 2:
          result = this.charArr[idx].toLowerCase();
          break;
        default:
          result = idx+1;
          break;
      }
      //console.log({idx,type,result})
      return result;
    },
    isShowAxisX(Y){
      return this.AxisVisable && (Y==0  );
      //|| Y == this.axis.y.length-1
    },
    isShowAxisY(X){
      return this.AxisVisable && (X==0);
      //|| X == this.axis.x.length-1
    },
    select(item){
        var _obj = this.Lists_x[item];
        _obj.isSelected = !_obj.isSelected;
         
    },
    action(event){
      var _val = event.target.value;
      this.$refs.view.action(_val);
      event.target.value = "";
    }

  }
}
</script>
<style  scoped>
.boxGrid{
  margin :3em;

}

.selected{
  color:red;
}

.boxGrid td{
  border:1px black groove;
  position:relative;
  padding:5px;
}

.boxGrid td:hover {
  background-color:blue;
  cursor: pointer;
}

.boxGrid tr:nth-child(even){
  background:#CCC ;
}

.axis-x{
  width:80%;
  text-align:center;
  position:absolute;
  top:-21px;
   
 
}

.axis-y{
  position:absolute;
  left:-17px;
}
</style>