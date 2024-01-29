<template>
  <div id="products">
    <el-row>
      <el-col :span="12">
        <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
        >
          <el-sub-menu v-for="type in data" :title="type.name" :key="type">
            <template #title>
              {{ type.name }}
            </template>
            <el-menu-item-group v-for="items in type.data" :title="items.name" :key="items">
              <template #title>
                {{ items.name }}
              </template>
              <el-menu-item v-on:click="click(item)" v-for="item in items.data" :title="item.name" :key="item">
                <template #title>
                  {{ item.name }}
                </template>
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-col>
      <el-col :span="12">
        <el-row justify="space-evenly">详情</el-row>
        <el-row>项目名:{{ current.name }}</el-row>
        <el-row>已开源至:</el-row>
        <el-row v-for="url in current.openURLs" :key="url">
          &emsp;<a :href="url">{{ url }}</a>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current:{

      },
      data: [
        {
          name: "程序",
          data: [
            {
              name: "工具",
              data: [
                {
                  name: "MathToolkit数学工具包",
                  openURLs:[
                      "https://gitee.com/wysha-object/math-toolkit",
                      "https://github.com/wysha-object/math-toolkit"
                  ]
                },
                {
                  name: "AlarmClock闹钟",
                  openURLs:[
                      "https://gitee.com/wysha-object/alarm-clock",
                      "https://github.com/wysha-object/alarm-clock"
                  ]
                },
                {
                  name: "DebateTournament辩论赛计时系统",
                  openURLs:[
                      "https://gitee.com/wysha-object/debate-tournament",
                      "https://github.com/wysha-object/debate-tournament"
                  ]
                },
                {
                  name: "SchoolScoringSystem学校计分系统",
                  openURLs:[
                      "https://gitee.com/wysha-object/school-scoring-system",
                      "https://github.com/wysha-object/school-scoring-system"
                  ]
                }
              ]
            },
            {
              name: "其他",
              data: [
                {
                  name: "Engine引擎",
                  openURLs:[
                      "https://gitee.com/wysha-object/engine",
                      "https://github.com/wysha-object/engine"
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    click(item) {
      this.current=item;
    }
  }
};
</script>

<style>
</style>