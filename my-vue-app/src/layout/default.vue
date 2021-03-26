<template>
  <router-view></router-view>
  <van-tabbar v-model="active">
    <van-tabbar-item v-for="(item,index) in tabList" :key="index">{{item.label}}</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
import { reactive, ref } from "vue";
export default {
  components: {
    vanTabbar: Tabbar,
    vanTabbarItem: TabbarItem
  },
  setup() {
    const active = ref(0);
    const tabList = reactive([
      { label: "我的" },
      { label: "主页" },
      { label: "设置" }
    ]);
    return {
      tabList,
      active
    };
  }
};
</script>

<style lang="scss">
.main-home {
  height: 100%;
}
</style>