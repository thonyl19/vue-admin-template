<template>
  <div> 
    <button @click="unselectAll">Unselect All</button>
    <table class="boxGrid">
      <tr v-for="(rows,row_idx) in Lists">
        <td v-for="(itme,col_idx) in rows" @click="select(itme)" >
          <div class="axis-x" v-if="isShowAxisX(row_idx)">{{axis.x[col_idx]}}</div>
          <div class="axis-y" v-if="isShowAxisY(col_idx)">{{axis.y[row_idx]}}</div>
          <span :class="Lists_x[itme].isSelected?'selected':''" :key="itme">{{itme}}</span>
        </td>
      </tr>
    </table>    
  </div>
</template>

<script>
export default {
  data(){
    return {
      Lists:[],
      Lists_x:{},
      axis:{
        x:[],
        y:[]
      },  
      charArr : Array.from("ABCDEFGHIJKLMNOPQRESTUVWXYZ"),
 
    }
  },
  props:{
    Cols:{
      type:Number,
      default:0
    },
    Rows:{
      type:Number,
      default:0
    },
    RowType:{
      type:Number,
      default:0
    },
    ColType:{
      type:Number,
      default:0
    },
    OrderType:{
      type:Number,
      default:0
    },
    AxisVisable:{
      type:Boolean,
      default:true
    },
    AutoGen:{
      type:Boolean,
      default:true
    }
    
  },
  methods:{
    Exec(){
      debugger
      var _self = this;
      _self.Lists=[];
      _self.Lists_x = {};
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
          var _key 
              = _self.OrderType
              ? `${_col}-${_row}`
              : `${_row}-${_col}`;
          rows.push(_key);
          _self.$set(_self.Lists_x,_key,{isSelected:false})
        }
        this.Lists.push(rows);
      }
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
    action(item){
      var _obj = this.Lists_x[item];
      if (_obj){
        _obj.isSelected = !_obj.isSelected;
      }
    },
    unselectAll(){
      for(var [key, item]  of Object.entries(this.Lists_x)){
        item.isSelected = false;
      }
    }

  },
  mounted() {
    if (this.AutoGen){
      this.Exec();
    }
    
  },
  
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