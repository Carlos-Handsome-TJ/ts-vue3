<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from 'vant'

const router = useRouter()
const getLocation = () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position)
      },
      err => {
        console.log('err', err)
      }
    )
  } else {
    console.log('地理位置不可用')
  }
}
const searchLocation = () => {
  router.push('/location')
}
const currentLocation = ref('')
onMounted(() => {
  getLocation()
})
</script>
<template>
  <div class="header-wrapper">
    <span>饿了么</span>
    <Icon
      @click="searchLocation"
      name="location-o"
      color="#fff"
      size="18px"
      class="location-wrapper"
    >
      {{ currentLocation ? currentLocation : '点击获取当前位置' }}
    </Icon>
  </div>
</template>
<style lang="scss" scoped>
.header-wrapper {
  height: 44px;
  line-height: 44px;
  background: linear-gradient(90deg, rgb(41, 202, 255) 0%, rgb(0, 171, 245) 100%);
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 44px;

  & > span {
    font-weight: bold;
    font-size: 20px;
    color: #fff;
    text-align: right;
    margin-right: 5px;
  }
  .location-wrapper {
    display: flex;
    align-items: center;
  }
}
</style>
