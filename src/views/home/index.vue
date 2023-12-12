<script lang='ts' setup>
import { ref } from 'vue'
import { Search } from 'vant'

const searchVal = ref<string>('')
</script>
<template>

  <Search
    v-model='searchVal'
    clearable
    shape='round'
    background='#4fc08d'
    placeholder='请输入搜索关键词'
  />
  <div class='test'>我我我我我我我我我我</div>
</template>
<style>
.test {
  font-size: 39px;
}
</style>