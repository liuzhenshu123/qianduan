<template>
  <div id="vue-app">
    <h1>{{name}}</h1>
    <label>{{data}}</label>

    <h2>------------------------------------------这是一条平分线-------------------------------------------------</h2>

    <input v-model="newAddName" placeholder="请输入要添加的网站名称"/>
    <input v-model="newAddUrl" placeholder="请输入要添加的网站地址"/>
    <button @click='addNewList'>添加</button>

    <h2>下面是书签展示,总数:{{bookMarksNum}}</h2>
    <ul>
      <li v-for='(list,index) in lists' v-bind:key='list.id'>
        {{list.name}}——{{list.url}}
        <button v-on:click='lists.splice(index, 1)' @click="delList">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "showBookMarks",
    data() {
      return {
        name: "书签页",
        data: "",

        newAddName: '',
        newAddUrl: '',
        lists: [
          // {id: 1, name: '手机号码'}
        ],
        nextTodoId: 0,
        bookMarksNum: 0
      }
    },
    methods: {
      init() {
        this.$http.get('http://192.168.200.73:8033/base/bookmark/list', {
          params: {
            userId: 1,
            page: 1,
            size: 20
          }
        }).then((response) => {
          this.data = response.data.list
        })
      },
      initList: function () {
        this.$http.get('http://192.168.200.73:8033/base/bookmark/list', {
          params: {
            userId: 1,
            page: 1,
            size: 20
          }
        }).then((response) => {
          this.data = response.data.list
          length = 0
          for (let resList of response.data.list) {
            this.lists.push({
              id: resList.id,
              name: resList.name,
              url: resList.url
            })
            //获取列表内最大ID赋给nextTodoId
            this.nextTodoId = this.nextTodoId < resList.id ? resList.id : this.nextTodoId
          }
          //获取书签列表长度
          this.bookMarksNum = Object.keys(response.data.list).length
        })
      },
      addNewList: function () {
        //添加，在最大ID基础上+1
        this.lists.push({
          id: ++this.nextTodoId,
          name: this.newAddName,
          url: this.newAddUrl
        })
        this.bookMarksNum += 1
        this.newAddName = ''
        this.newAddUrl = ''
        console.log(this.lists)
      },
      delList: function () {
        this.bookMarksNum -= 1
      }
    },
    watch: {
      //如果路由发生变化，每次都会执行该方法
      "$route": {
        handler(route) {
          const that = this
          if (route.name == 'Report') {
            that.init()
          }
        },
        deep: true
      }
    },
    created() {
      this.initList()
    }
  }
</script>

<style scoped>

</style>
