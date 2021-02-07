<template>
  <div id="login_app">
    <div id="buttens">
      <button id="denlgu" v-on:click="dlu">{{$data.button.denglu}}</button>
      <button id="zhuce" v-on:click="zce">{{$data.button.zhuce}}</button>
      <button id="test" v-on:click="testHD">{{$data.button.test}}</button>
      <button id="getBookMarksBt" v-on:click="getBookMarks">{{$data.button.getBookMarks}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        name: "刘震书",
        age: 25,
        button: {
          denglu: "登录",
          zhuce: "注册",
          test: "这是测试后端接口",
          getBookMarks: "测试获取书签"
        }
      }
    },
    components: {},
    methods: {
      testHD: function () {
        console.log("进入testHD方法")
        this.$http.get('http://192.168.200.73:8090/test1', {
          params: {
            // sessionString: sessionStorage.getItem('session'),
            languageId: "111"
          }
        }).then((response) => {
          console.log(response)
        })
      },

      getBookMarks: function () {
        console.log("进入获取书签方法,跳转页面")
        // this.$http.get('http://192.168.200.73:8033/base/bookmark/list', {
        //   params: {
        //     userId: 1,
        //     page: 1,
        //     size: 1,
        //     // sessionString: sessionStorage.getItem('session'),
        //     languageId: "111"
        //   }
        // }).then((response) => {
        //   // response.data.list
        //   console.log(response.data.list)
        //   this.$router.push({
        //     path: "/showBookMarks",
        //     query: {}
        //   })
        // })
        this.$router.push("/showBookMarks")
      },
      dlu: function () {
        this.$router.push("/test1")
      },
      zce: function () {
        console.log("年龄为：" + this.age)
      }
    },
  }
</script>

<style scoped>
  #login_app {
    width: 400px;
    height: 200px;
    background: pink;
    font-size: 20px;
    content: "这是登录页面";
  }

  #denlgu {
    content: "登录";
  }

  #zhuce {
    content: "登录";
  }

</style>
