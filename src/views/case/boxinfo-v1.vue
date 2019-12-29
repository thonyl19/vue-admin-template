<template>
  <div class="main">{{axisVisable}}
  {{selected}}
    <ul>
      <li>
        Cols<input v-model="Cols"  />
        <select  v-model="ColType"  > 
          <option v-for="(value,key) in displayType" :value="key">{{value}}</option>
        </select>
      </li>
      <li>
        Rows<input v-model="Rows"  />
        <select v-model="RowType">
          <option v-for="(value,key) in displayType" :value="key">{{value}}</option>
        </select>
      </li>
      <li>
        OrderType
        <select v-model="orderType">
          <option v-for="(value,key) in displayOrder" :value="key">{{value}}</option>
        </select>
      </li>
      <li>
        axisVisable<input type="checkbox" v-model="axisVisable"/>
      </li>
      <li>
        <el-button type="primary" @click="Exec" >Create</el-button>
      </li>
      <li>
        <input v-on:keyup.enter="action($event)" />
      </li>
    </ul>
 
<table class="boxGrid">
  <tr v-for="(rows,row_idx) in Lists">
    <td v-for="(itme,col_idx) in rows">
      <div class="axis-x" v-if="isShowAxisX(row_idx)">{{axis.x[col_idx]}}</div>
      <div class="axis-y" v-if="isShowAxisY(col_idx)">{{axis.y[row_idx]}}</div>
      <span :class="itme" @click="select($event,itme)" :key="itme">{{itme}}</span>
    </td>
  </tr>
  </table>    
  </div>
  
</template>

<script>
export default {
  data(){
    return {
      Cols:5,
      ColType:"0",
      Rows:5,
      RowType:"0",
      orderType:"0",
      axisVisable:true,
      displayType:{
        0:'1~n',
        1:'A~Z',
        2:'a~z',
        //{0:'a~z'},
      },
      displayOrder: {
        0:'col-row',
        1:'row-col'
      },
      Lists:[],
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
      var _self = this;
      _self.Lists=[];
      _self.selected = {};
      _self.axis={
          x:[],
          y:[]
        };
      for(var row=0 ; row < _self.Rows ; row++){
        var rows = [],
            _row = _self.transAxis(row,_self.RowType);
        _self.axis.y.push(_row);
        for(var col=0 ; col < _self.Cols ; col++){
          var _col = _self.transAxis(col,_self.ColType);
          if (row == 0) _self.axis.x.push(_col);
          switch(_self.orderType){
            case "0":
              rows.push(`${_col}-${_row}`);
              break;
            case "1":
              rows.push(`${_row}-${_col}`);
              break;
          }
        }
        this.Lists.push(rows);
      }
    },

    transAxis(idx,type){
      var result ;
      switch(type){
        case "1":
          result = this.charArr[idx];
          break;
        case "2":
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
      return this.axisVisable && (Y==0  );
      //|| Y == this.axis.y.length-1
    },
    isShowAxisY(X){
      return this.axisVisable && (X==0);
      //|| X == this.axis.x.length-1
    },
    select(eObj,item){
        console.log(eObj);
        var isSelected = this.selected[item]==null;
        var _tag = eObj.toElement;
        if (isSelected){
          this.$set(this.selected,item, eObj)
          _tag.classList.add('selected');
        }else{
          this.$delete(this.selected,item);
          _tag.classList.remove('selected');
        }
    },
    action(event){
       
      var _val = event.target.value;
      event.target.value = "";
      setTimeout(() => {
        var _sels = this.$el.querySelectorAll(`span.${_val}`);
        console.log(_sels);
      }, 500);
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