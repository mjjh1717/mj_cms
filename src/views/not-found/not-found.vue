<template>
  <div class="not-found">
    <div class="title">
      {{ title }}
      <div class="pieceFlag" :class="{ bgcb: flag, bgcw: !flag }"></div>
      <el-button type="primary" class="eBtn" @click="handleLoginClick">
        返回登录</el-button
      >
    </div>
    <table>
      <!-- 渲染tr -->
      <tr v-for="(item, index) in list" :key="index">
        <!-- 渲染td,绑定点击事件，并把参数传递到事件中 -->
        <td v-for="(item2, index2) in item" :key="index2">
          <div
            @click="pieceClick(index, index2)"
            :class="item2 == 1 ? 'bgcb' : item2 == 2 ? 'bgcw' : ''"
          ></div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
//所有黑棋数组
let blackArr: any[][] = []
//所有白棋数组
let whiteArr: any[][] = []
//下棋顺序变量
let title = '五子棋'
let flag = ref(true)
let list = ref(
  Array(20)
    .fill(0)
    .map(() => Array(20).fill(0))
)

// 点击事件
const pieceClick = (x: number, y: number) => {
  console.log(list)
  console.log(flag)

  //判断是黑棋还是白棋
  if (flag.value) {
    //判断格子内是否已经有棋子 1黑2白
    if (list.value[x][y] == 0) {
      list.value[x][y] = 1
      flag.value = !flag.value
      blackArr.push([x, y])
    }
  } else {
    list.value[x][y] = 2
    flag.value = !flag.value
    whiteArr.push([x, y])
  }
  Win(x, y, 'x')
  Win(x, y, 'y')
  Win(x, y, 'x_y')
  Win(x, y, 'y_x')
}
// 获胜逻辑
const Win = (a: any, b: any, Axle: any) => {
  // 当前轴的所有棋子集合数组
  let AllArr: any = []
  // 判断横轴胜负逻辑的棋子数组
  let WinArr: any = []
  // 存入对应轴的数据
  switch (Axle) {
    case 'x':
      if (!flag.value) {
        blackArr.map((item) => {
          if (item[0] == a) {
            AllArr.push(item[1])
          }
        })
      } else {
        whiteArr.map((item) => {
          if (item[0] == a) {
            AllArr.push(item[1])
          }
        })
      }
      break
    case 'y':
      if (!flag.value) {
        blackArr.map((item) => {
          if (item[1] == b) {
            AllArr.push(item[0])
          }
        })
      } else {
        whiteArr.map((item) => {
          if (item[1] == b) {
            AllArr.push(item[0])
          }
        })
      }
      break
    case 'x_y':
      if (!flag.value) {
        blackArr.map((item) => {
          if (item[0] - a == item[1] - b) {
            AllArr.push(item[1])
          }
        })
      } else {
        whiteArr.map((item) => {
          if (item[0] - a == item[1] - b) {
            AllArr.push(item[1])
          }
        })
      }
      break
    case 'y_x':
      if (!flag.value) {
        blackArr.map((item) => {
          if (0 - (item[0] - a) == item[1] - b) {
            AllArr.push(item[1])
          }
        })
      } else {
        whiteArr.map((item) => {
          if (0 - (item[0] - a) == item[1] - b) {
            AllArr.push(item[1])
          }
        })
      }
      break
    default:
      break
  }
  AllArr.sort((a: any, b: any) => a - b)
  for (let i = 1; i < AllArr.length; i++) {
    if (AllArr[i] == +AllArr[i - 1] + 1) {
      WinArr.push(AllArr[i])
    } else {
      if (WinArr.length >= 4) break
      WinArr = []
    }
  }
  if (WinArr.length >= 4) {
    if (!flag.value) {
      setTimeout(function () {
        alert('黑棋获胜!')
        location.reload()
      }, 100)
    } else {
      setTimeout(function () {
        alert('白棋获胜!')
        location.reload()
      }, 100)
    }
  }
}
const handleLoginClick = () => {
  console.log('111')
}
</script>
<style scoped>
.title {
  width: 150px;
  font-size: 50px;
  font-weight: bold;
  margin: 0 auto;
}
.title .pieceFlag {
  display: inline-block;
  width: 35px;
  height: 35px;
  vertical-align: top;
  border: 1px solid #000;
  margin-top: 10px;
}
.title .eBtn {
  margin-top: 10px;
  height: 35px;
  margin-left: 10px;
  vertical-align: top;
  display: inline-block;
}

table {
  position: relative;
  width: 1050px;
  height: 1050px;
  margin: 0 auto;
  border: 5px solid rgb(199, 122, 7);
  background: #fff;
  background-size: 100%;
  background-position: center;
}

td {
  width: 35px;
  height: 35px;
  margin-right: 13px;
  margin-bottom: 11px;
  cursor: pointer;
  background: rgb(199, 122, 7);
  border: 2px solid rgb(199, 122, 7);
}
td div {
  width: 100%;
  height: 100%;
}

.bgcb {
  background-color: #000;
  border-radius: 50%;
}

.bgcw {
  background-color: #fff;
  border-radius: 50%;
}
</style>
