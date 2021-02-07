import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login/login'

import test1 from '../page/test/test1'
import showBookMarks from '../page/mySer/showBookMarks'

let arrs = [{
  path: '/',
  name: 'login',
  component: login
}, {
  path: '/test1',
  name: 'test1',
  component: test1
}, {
  path: '/showBookMarks',
  name: 'showBookMarks',
  component: showBookMarks
}]
Vue.use(Router)

let bc = new Router({
  mode: 'history', // 去掉#号
  routes: arrs
})
export default bc
