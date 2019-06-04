<template>
    <div class="content-item">
      <ul 
     
      >
          <div class="left">
              <div class="space">{{item.title}}</div>
              <div>{{item.title}} </div>
          </div>
          <div class="right">
              <div class="price space">￥ {{item.rate}} 起</div>
              <div class="right-last">距离未知</div>
          </div>
      </ul>
    </div>
</template>

<script>
export default {
    props:{item:Object},
}
</script>

<style lang="scss" scoped>
    .content-item{
        width:100%;
        ul{
         display: flex;
            justify-content: space-between;
            align-items: center;
            padding:0 10px;
            font-size:12px;
            margin-bottom:25px;
            color:rgb(163, 163, 163);
            .left{
                width:80%;
            }
            .right{
                width:20%;
            }
            .space{
                margin-bottom:7px;
                color:black;
                font-size:14px;
            }
            .price{
                color:rgb(226, 105, 6);
                font-size:12px;
                text-align: center;
            }
            .right-last{
                text-align: center;
                font-size:10px;
            }
            
        }
        
    }
</style>

