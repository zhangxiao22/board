<template>
  <div class="component-event-list-container">
    <div class="nav">
      <div class="nav-item"
           :class="['nav-item-'+key,{active:item.active}]"
           v-for="(item,key) of navList"
           :key="key"
           @click="iconClick(key)">
        <div class="iconfont" :class="item.icon"></div>
        <div class="text">{{item.name}}</div>
        <div class="count center-center">{{item.count}}</div>
      </div>
    </div>
    <div class="component-event-list" @click="link">
      <div class="li" v-for="(item,key) of list" :key="key">
        <span class="iconfont icon-jingbao"></span>
        <span class="text elip" title="飞利浦手术室撒似懂非懂萨法但是发的萨芬大沙发阿萨德防守打法的撒是大发生地方">
              飞利浦手术室撒似懂非懂萨法但是发的萨芬大沙发阿萨德防守打法的撒是大发生地方
            </span>
        <span class="time">2019-01-01 11:11:11</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {eventList} from '@/api/api'
  // import {getRem} from '@/common/common'

  export default {

    components: {},
    model: {},
    props: {},
    data() {
      return {
        navList: [{
          key: 'RepairEvents',
          name: '紧急维修',
          icon: 'icon-xiuli1',
          count: 0,
          active: false,
        }, {
          key: 'CallbackEvents',
          name: '召回事件',
          icon: 'icon-buhegepinzhaohui',
          count: 0,
          active: false,
        }, {
          key: 'ForceCheckEvents',
          name: '强检事件',
          icon: 'icon-jingbao1',
          count: 0,
          active: false,
        }, {
          key: 'DelayedEvents',
          name: '超期事件',
          icon: 'icon-rili',
          count: 0,
          active: false,
        }],
        list: [],
        interval: null,
        cur_index: 0,
      }
    },
    watch: {},

    created() {
      this.iconClick(this.cur_index)
      this.autoLoop()
    },
    methods: {
      link() {
        window.open('page/index-FujiManagerRecall.html', '_self')
      },
      autoLoop() {
        this.interval = setTimeout(() => {
          this.cur_index++
          (this.cur_index > this.navList.length - 1) && (this.cur_index = 0)
          this.iconClick(this.cur_index)
        }, 30000)
      },
      iconClick(index) {
        let item = this.navList[index]
        this.navList.forEach(n => {
          n.active = false;
        })
        item.active = true
        this.cur_index = index;
        this.getList(item.key)

        clearTimeout(this.interval)
        this.autoLoop()
      },
      getList(key) {
        eventList().then(res => {
          this.list = res.Data[key].Detail
          this.navList.forEach((n) => {
            n.count = res.Data[n.key].Count
          })
          // 滚动条回到顶
          document.querySelector('.component-event-list').scrollTo(0, 0)
        })
      }
    }
  }

</script>


<style scoped lang="less">
  .component-event-list-container {
    position: relative;
    width: 100%;
    height: 100%;

    .nav {
      display: flex;
      padding: .5rem .9rem;
      justify-content: space-between;

      .nav-item {
        position: relative;
        width: 2.9rem;
        height: 2.8rem;
        border-radius: .16rem;
        cursor: pointer;
        background-color: #d9e9f9;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: .6rem 0 .4rem;
        justify-content: space-between;

        &.active {
          box-shadow: 0 0 .1rem #aaa;
          background: #3D6EC0;
          color: #fff;

          .iconfont {
            color: #d9e9f9;;
          }
        }

        &:hover {
          box-shadow: 0 0 .1rem #aaa;
        }

        .iconfont {
          font-size: 1.1rem;
          color: #3D6EC0;;
        }

        .text {
          font-weight: bold;
          font-size: .4rem;
        }

        .count {
          position: absolute;
          width: .8rem;
          height: .8rem;
          right: -.24rem;
          top: -.24rem;
          background: #E2340D;
          font-size: .44rem;
          color: #fff;
          border-radius: 50%;
        }
      }
    }

    .component-event-list {
      position: absolute;
      left: 0;
      right: 0;
      top: 4.1rem;
      bottom: .6rem;
      overflow-y: auto;
      padding: 0 .95rem;
      font-size: .4rem;

      .li {
        display: flex;
        margin-bottom: .58rem;
        align-items: center;
        font-size: .4rem;
        cursor: pointer;

        &:last-of-type {
          margin-bottom: 0;
        }

        .iconfont {
          color: #E2340D;
          margin-right: .2rem;
          font-weight: bold;
          font-size: .44rem;
        }

        .text {
          flex: 1;
          margin-right: .1rem;
        }

        .time {
          font-size: .36rem;
          color: #888;
        }
      }
    }
  }
</style>

