<template>
  <div class="layout-default">
    <div class="default-main">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active" :fixed="false">
      <van-tabbar-item v-for="(item,index) in tabList" :key="index">{{item.label}}</van-tabbar-item>
    </van-tabbar>
  </div>
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
.layout-default {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .default-main {
    flex: 1;
  }
}
</style>