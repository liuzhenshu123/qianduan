<template>
  <div id="vue-app">
    <h1>{{greet("下午好")}}</h1>
    <p>{{name}}</p>
    <p>工作：{{job}}</p>
    <a v-bind:href="website">打开百度</a>
    <input type="text" v-bind:value="website">
    <p v-html="websiteTag"></p>


    <p>-----------------------events-------------------------</p>
    <button @click.once="add(1)">涨一岁</button>
    <button @click="subtract(1)">减一岁</button>
    <button v-on:dblclick="add(1)">双击涨一岁</button>
    <button v-on:dblclick="subtract(1)">双击减一岁</button>
    <p>my age is {{age}}</p>
    <div id="testeqe111" v-on:mousemove="updateXY">
      {{X}},{{Y}} - <span v-on:mousemove.stop="">stop</span>
    </div>

    <p>------------双向绑定---------------</p>
    <label>标题名字：</label>
    <input ref="sx1" type="text" v-model="name">
    <p>名字：{{name}}</p>
    <label>标题名字（按alt回车）：</label>
    <input ref="sx2" type="text" v-on:keyup.alt.enter="logAge1">
    <p>工作：{{job}}</p>
    <p>------------键盘 events--------------</p>
    <label>姓名：</label>
    <input type="text" v-on:keyup.shift.alt.enter="logName">
    <label>年龄：</label>
    <input type="text" v-on:keyup="logAge">
    <p>-----------------计算属性-------------------</p>
    <button v-on:click="a++">a+1</button>
    <button v-on:click="b++">b+1</button>
    <p>a - {{a}}</p>
    <p>b - {{b}}</p>
    <!--    <p>Age + a = {{addToA()}}</p>-->
    <!--    <p>Age + b = {{addToB()}}</p>-->
    <p>Age + a = {{addToA}}</p>
    <p>Age + b = {{addToB}}</p>
    <p>-----------------动态 CSS Class---------------------</p>
    <!--    <h2 v-bind:class="{red:true,blue:true}"> 示例1 </h2>-->
    <h2> 示例1 </h2>
    <div v-on:click="changeColor = !changeColor" v-bind:class="{changeColor:changeColor}">
      <span>点击我变色span内容1</span>
    </div>
    <h2> 示例2 </h2>
    <div v-on:click="changeColor = !changeColor">点我changeColor变非</div>
    <div v-on:click="changeLength = !changeLength">点我changeLength变非</div>
    <div v-bind:class="compClass">
      <span>span框要变色</span>
    </div>


    <p>---------------- v-if 条件------------------</p>
    <button v-on:click="error = !error">error非</button>
    <button v-on:click="success = !success">success非</button>
    <p v-if="error">error为true显示这个,优先级1</p>
    <p v-else-if="success">success为true显示</p>
    <!--    v-show  在F12会一直存在-->
    <!--    <p v-show="error">error为true显示这个,优先级1</p>-->
    <!--    <p v-show="success">success为true显示</p>-->
    <p>-------------------- v-for循环 ------------------------</p>
    <!--  第一种：数组下标获取  -->
    <!--    {{charList[0]}}-->
    <!--    {{charList[1]}}-->
    <!--    {{charList[2]}}-->
    <ul>
      <li v-for="name in charList">
        {{name}}
      </li>
    </ul>
    <ul>
      <li v-for="(user,index) in users">
        {{index+1}}-{{user.name}} 年龄为：{{user.age}}
      </li>
    </ul>

    <template v-for="(user,index) in users">
      <H3>{{index}}-{{user.name}}</H3>
      <p>年龄：{{user.age}}</p>
    </template>
    <template v-for="(user,index) in users">
      <template v-for="(value,key) in user">
        <p>{{key}}----{{value}}</p>
      </template>
    </template>

    <p>----------------实战DEMO 更换图片----------------</p>
    <!--    图片  -->
    <div id="bag" v-bind:class="{changephoto:ended}">

    </div>
    <!--    进度情况  -->
    <div id="bag-health">
      <div v-bind:style="{width : health+'%'}">
        {{health+"%"}}
      </div>
    </div>
    <!--    控制按钮-->
    <div id="controls">
      <button v-on:click="punch11()">使劲敲</button>
      <button v-on:click="restart()">重新开始</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "test1",
    data() {
      return {
        name: "杰克思道睿",
        job: "服务员",
        website: "http://www.baidu.com",
        websiteTag: "<a href='https://www.baidu.com'> 这是一个百度链接</a>",

        age: 30,
        X: 0,//获取坐标点
        Y: 0,

        a: 0,
        b: 0, //使用方法加值

        changeColor: false,
        changeLength: false,

        error: false,
        success: false,

        //    循环数组
        charList: ["赵", "钱", "孙", "李"],//字符串数组
        users: [
          {name: "马云", age: 30},
          {name: "马华腾", age: 40},
          {name: "刘华强", age: 50},
        ],

        health: 100,
        ended: false,//改变图片
      }
    },
    methods:
      {
        greet: function (str) {
          if (str.length > 1) {
            return this.name + str
          }
          return this.name + " good morning";
        }
        ,
        add: function (age) {
          this.age += age;
        }
        ,
        subtract: function (age) {
          this.age -= age;
        }
        ,
        updateXY: function (event) {
          this.X = event.offsetX;
          this.Y = event.offsetY;
          // console.log(event)
        }
        ,
        stopMove: function (event) {
          // console.log("0000000000000000000")
          event.stopPropagation()
        }
        ,
        logName1: function () {
          this.name = this.$refs.sx1.value
        }
        ,
        logAge1: function () {
          this.job = this.$refs.sx2.value
        }
        ,
        logName: function () {
          console.log("发送了名字")

        }
        ,
        logAge: function () {
          console.log("发送了工作")
        }
        ,
        // , addToA: function () {
        //     return this.a + this.age;
        // }
        // , addToB: function () {
        //     return this.b + this.age;
        // }
        punch11: function () {
          //进度条减少
          console.log("11111");
          this.health -= 10;
          if (this.health <= 0) {
            this.health = 0;
            this.ended = true;
          }
        }
        ,
        restart: function () {
          this.health = 100;
          this.ended = false;
        }
        ,
      }
    ,

    computed: {
      addToA: function () {
        return this.a + this.age;
      }
      ,
      addToB: function () {
        return this.b + this.age;
      }
      ,
      compClass: function () {
        return {
          changeColor: this.changeColor,
          changeLength: this.changeLength
        }
      }
    }
  }
</script>

<style scoped>
  #testeqe111 {
    width: 600px;
    padding: 200px 20px;
    text-align: center;
    border: 1px solid #333;
  }

  span {
    background: red;
    display: inline-block;
    padding: 10px;
    color: #fff;
    margin: 10px 0;
  }

  .changeColor span {
    background: green;
  }

  .changeLength span:after {
    content: "length";
    margin-left: 10px;
  }

  #bag {
    width: 400px;
    height: 250px;
    margin: 0 auto;
    background: url(../../../img/女神.jpg) center no-repeat;
    background-size: 80%;
  }

  #bag.changephoto {
    background: url(../../../img/悟空.jpg) center no-repeat;
  }

  #bag-health {
    width: 400px;
    border: 1px #000 solid;
    margin: 0 auto 20px auto;
  }

  #bag-health div {
    height: 10px;
    background: crimson;
  }


  #controls {
    width: 200px;
    margin: 0 auto;
  }

  #controls button {
    margin-left: 20px;
  }
</style>
