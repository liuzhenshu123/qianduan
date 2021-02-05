//实例化
new Vue({
    el: "#vue-app",
    data: {
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
    },
    methods: {
        greet: function (str) {
            if (str.length > 1) {
                return this.name + str
            }
            return this.name + " good morning";
        },
        add: function (age) {
            this.age += age;
        },
        subtract: function (age) {
            this.age -= age;
        },
        updateXY: function (event) {
            this.X = event.offsetX;
            this.Y = event.offsetY;
            // console.log(event)
        },
        stopMove: function (event) {
            // console.log("0000000000000000000")
            event.stopPropagation()
        },
        logName1: function () {
            this.name = this.$refs.sx1.value
        },
        logAge1: function () {
            this.job = this.$refs.sx2.value
        },
        logName: function () {
            console.log("发送了名字")

        }
        , logAge: function () {
            console.log("发送了工作")
        },
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
                this.ended = true;
            }
        },
        restart: function () {
            this.health = 100;
            this.ended = false;
        },
    },

    computed: {
        addToA: function () {
            return this.a + this.age;
        }
        , addToB: function () {
            return this.b + this.age;
        },
        compClass: function () {
            return {
                changeColor: this.changeColor,
                changeLength: this.changeLength
            }
        }
    }
});
/*
el:   element 需要获取的元素，一定是html中根容器元素
data:用于数据的存储
methods:存储各种方法,（每次都会渲染methods里的所有方法）
computed：计算属性，只执行对应的(不加括号可以)             method里不要有，则会找computed里的值
 */
