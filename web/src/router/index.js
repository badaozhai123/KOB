import { createRouter, createWebHistory } from 'vue-router'
import VsIndexView from '../views/Vs/VsIndexView'
import RankListIndexView from '../views/rankList/RankListIndexView'
import RecordView from '../views/record/RecordView'
import UserBotView from '../views/user/bots/UserBotView'
import NotFound from '../views/error/NotFound'

const routes = [
  {
    path:"/",
    name:"home",
    redirect:"/pk/",
  },
 {
  path:"/pk/",
  name:"pk_index",
  component:VsIndexView,
 },
 {
  path:"/record/",
  name:"record_index",
  component:RecordView,
 },
 {
  path:"/rankList/",
  name:"rankList_index",
  component:RankListIndexView,
 },
 {
  path:"/uer/bot/",
  name:"user_bot_index",
  component:UserBotView,
 },
 {
  path:"/404/",
  name:"404",
  component:NotFound,
 },
 {
  path:"/:catchAll(.*)/",
  redirect:"/404/"
 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
