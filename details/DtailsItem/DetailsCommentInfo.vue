<template>
  <div class='DetailsCommentInfo'>
      <div class="evaluation">
          <div class="evaluation_one">评价</div>
          <div class="evaluation_to">好评度97%</div>
      </div>
      <div class="NoEvaluation" v-if="this.commentInfo.length == 0">
          暂无评价
      </div>
      <div class="user-evaluation" v-if="commentInfo.length != 0">
          <div v-for="user in commentInfo">
              <div class="user-information">
                  <div class="user-information-one">
                      <div class="user-information-one-img">
                          <img  :src="user.user.avatar"/>
                      </div>
                      <div>
                          <span>{{user.user.uname}}</span>
                          <span class="EvaluationOfTime">{{DetailsDate(user.created)}}</span>
                      </div>
                  </div>
                  <div class="user-information-to">
                      <div class="user-information-to-text">{{user.content}}</div>
                      <div class="user-information-to-img" v-if="user.images">
                          <img :src="user.images" alt="">
                      </div>
                  </div>
                  <div class="user-information-three">
                      {{user.style}}
                  </div>
              </div>
          </div>
          <div class="Commodity-information">
            <button @click="evaluationPage()">查看全部评价</button>
          </div>
      </div>
 </div>
</template>
<script>
import {formatDate} from "../../../components/content/Data/data"
export default {
  name: 'DetailsCommentInfo',
  data() { 
    return {

    }
  },
  components:{
      formatDate
  },
  methods:{
      evaluationPage(){
        // 跳转外部链接  记得补充评论ui
          window.open('','_blank')
        // this.$router.replace("/home") 通过路由跳转到app页面
      }
  },
  computed: {
      DetailsDate() {
        return function(created){
            var date = new Date(created * 1000);
            return formatDate(date, 'yyyy年MM月dd日'); 
        }
       
      },
  
  },
  props:{
      commentInfo:{
          type:Array,
          default(){
              return []
          }
      }
  }
 }
</script>

<style scoped>
    .DetailsCommentInfo{
        display: block;
        width: 95%;
        margin: 0 2.5% 0;
        background-color: #fff;
        margin-top: 15px;
        border-radius: 15px;
        padding: 15px;
        padding-bottom: 5px;
    }
    .evaluation{
        width: 100%;
        display: flex;
        border-bottom: 1px solid rgb(204, 204, 204,0.7);
        padding-bottom: 10px;
    }
    .evaluation_one{
        flex: 1;
        text-align: left;
    }
    .evaluation_to{
       flex: 1;
       text-align: right;
    }
    /* 暂无评价 */
    .NoEvaluation{
        margin-top: 10px;
        text-align: center;
    }
    /* 用户评价 */
    .user-evaluation{
        margin-top: 10px;
        width: 100%;
        margin-bottom: 20px;
    }
    .user-information{
        text-align: left;
    }
    .user-information-one{
        display: block;
    }
    .user-information-one-img{
        overflow: hidden;
        float: left;
        border-radius: 45px;
        background: url("./头像图.jpg");
        background-size: 45px;
        height: 45px;
        width: 45px;
        margin-right: 15px;
    }
    .user-information-one-img>img{
        height: 45px;
        width: 45px;
        background-size: 45px;
    }
    .user-information-to{
        margin-top: 30px;
    }
    .user-information-to-text{
        text-indent:1em;
    }
    /* 评价时间 */
    .EvaluationOfTime{
        float: right;
    }
    /* 赛图 */
    .user-information-to-img{
        height: 60px;
        width: 100%;
        margin-top: 5px;
    }
    .user-information-to-img>img{
        float: left;
        margin-right: 5px;
        height: 60px;
        width: 60px;
    }
    /* 购买款式展示---评价 */
    .user-information-three{
        margin-top:10px;
    }

    /* 点击查看全部评价跳转 */

    .Commodity-information{
        display: block;
        margin:20px 0 0 0;
    }
    .Commodity-information>button{
        border-radius: 15px;
        background-color: #fff;
        border: 1px #ccc solid;
        font-weight: 400;
        font-size: 10px;
        height: 25px;
        width: 100px;
    }
</style>