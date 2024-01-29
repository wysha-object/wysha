<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu mode="horizontal">
          <router-link to="/home">
            <el-menu-item>
              <el-text size="large">主页</el-text>
            </el-menu-item>
          </router-link>
          <router-link to="/products">
            <el-menu-item>
              <el-text size="large">产品</el-text>
            </el-menu-item>
          </router-link>
          <router-link to="/about">
            <el-menu-item>
              <el-text size="large">关于</el-text>
            </el-menu-item>
          </router-link>
        </el-menu>
        <el-text>
          开发者邮箱:wyshazhisishen@yeah.net
        </el-text>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
</script>

<style>
.el-menu-item {
  width: 300px;
}

.el-text {
  text-align: center;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

a {
  text-decoration: none;
}

.el-menu {
  background-color: #222;
}

#app {
  text-align: center;
  color: #eee;
}
</style>