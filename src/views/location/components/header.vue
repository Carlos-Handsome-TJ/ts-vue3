<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { IndexBar, IndexAnchor, Cell, Button, Search } from 'vant'

const locationList = ref([])
const getLocationList = () => {
  axios
    .get('https://www.mxnzp.com/api/address/list', {
      params: {
        app_id: 'temjhlompnpiqeno',
        app_secret: 'J6Z8JSgj0O2xe533kt24UqHByT5Cg9h9'
      }
    })
    .then(res => {
      if (res.data) {
        const data = res.data.data
        if (data.length) {
          locationList.value = data.reduce((pre, cur) => {
            pre = [...pre, ...cur.pchilds]
            return pre
          }, [])
        }
      }
    })
}
onMounted(() => {
  getLocationList()
})
</script>
<template>
  <div>
    <Search placeholder="输入城市名、拼音或字母查询" @input="searchCity"/>
  </div>
  <div class="hot-title">热门城市</div>
  <div class="hot-city">
    <Button type="default" size="small" v-for="item in locationList.slice(3, 13)" :key="item.code">{{ item.name }}</Button>
  </div>
  <IndexBar>
    <IndexAnchor index="A"/>
    <Cell v-for="item in locationList" :key="item.code" :title="item.name" />
  </IndexBar>
</template>
<style lang="scss" scoped>
.hot-title {
  font-size: 14px;
  color: rgb(66, 66, 66);
  padding-left: 0.7rem;
  padding-bottom: 0.7rem;
}
.hot-city {
  padding: 0 0.7rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>
