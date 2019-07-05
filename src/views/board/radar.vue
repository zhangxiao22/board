<template>
  <div class="container">
    <div class="b-left">
      <div class="b-left-top">
        <div class="chart1-box">
          <div class="name">{{name1}}</div>
          <div class="list-box1">
            <div class="list">
              <div class="total">
                <div class="value">{{numberComma(2260.09)}}</div>
                <div class="text">总收入（万元）</div>
              </div>
              <div class="status up">
                <div class="value">
                  <span>23.45%</span>
                  <span class="iconfont icon-shang"></span>
                </div>
                <div class="text">
                  同比
                </div>
              </div>
            </div>
            <div class="list">
              <div class="total">
                <div class="value">{{numberComma(1563.09)}}</div>
                <div class="text">总支出（万元）</div>
              </div>
              <div class="status down">
                <div class="value">
                  <span>23.45%</span>
                  <span class="iconfont icon-shang"></span>
                </div>
                <div class="text">
                  同比
                </div>
              </div>
            </div>
          </div>
          <div id="chart1"></div>
        </div>

      </div>
      <div class="b-left-bottom">
        <div class="name">{{name2}}</div>
        <div id="chart3"></div>
        <div class="list3">
          <div class="item" v-for="(list,key) of chart3.data" :key="key">
            <span class="title">{{list.item}}次数：</span>
            <span class="count">{{list.value}}次</span>
          </div>
        </div>
      </div>
    </div>
    <div class="b-right">
      <div class="b-right-content">
        <div class="b-timeline">
        <timeline>
          <timeline-title bg-color="#E64340" font-color="#000">{{timelineTitle}}</timeline-title>
          <timeline-item v-for="(item,key) in currentTimeline" :key="key" :bg-color="item.color">{{item.event}}</timeline-item>
        </timeline>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {} from '@/api/api'
  import G2 from '@antv/g2';
  import {DataSet} from '@antv/data-set'
  import {queryOverview} from '@/api/api'
  import {getRem} from '@/common/common'
  import EventList from '../../components/componentEventList'
  import KpiList from '../../components/componentKpiGauge'
  import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'

  export default {
    components: {
      EventList,
      KpiList,
      Timeline,
      TimelineItem,
      TimelineTitle
    },

    data() {
      return {
        items: [
          {
            tag: '2019-02-12',
            content: '测试内容'
          },
          {
            tag: '2019-02-13',
            type: 'circle',
            content: '练习内容'
          }
        ],
        currentTimeline: [
          {
            color: '#9dd8e0',
            event: '2017年10月11日 设备安装'
          },
        ],
        timelineList1: [
          {
            color: '#9dd8e0',
            event: '2017年10月11日 设备安装'
          },
          {
            color: '#5579c4',
            event: '2017年11月1日 日常巡检'
          },
          {
            color: '#7accc6',
            event: '2017年12月11日 计划保养'
          },
          {
            color: '#ffb91a',
            event: '2018年1月3日 设备报修'
          },
          {
            color: '#ffb91a',
            event: '2017年12月21日 设备强检'
          },
          {
            color: '#7accc6',
            event: '2018年3月15日 设备校正'
          },
          {
            color: '#7accc6',
            event: '2018年11月1日 设备保养'
          },
          {
            color: '#ffb91a',
            event: '2018年12月3日 设备报修'
          },
          {
            color: '#ffb91a',
            event: '2018年12月21日 设备强检'
          },
          {
            color: '#7accc6',
            event: '2019年3月15日 设备校正'
          },
          {
            color: '#7accc6',
            event: '2019年4月1日 设备保养'
          },
        ],
        timelineList2:[
          {
            color: '#ffb91a',
            event: '2018年1月3日 设备报修'
          },
          {
            color: '#ffb91a',
            event: '2017年12月21日 设备强检'
          },
          {
            color: '#7accc6',
            event: '2018年3月15日 设备校正'
          },
          {
            color: '#7accc6',
            event: '2018年11月1日 设备保养'
          },
          {
            color: '#ffb91a',
            event: '2018年12月3日 设备报修'
          },
          
        ],
        name1: this.$route.query.name,
        name2: '',
        timelineTitle: '电子上消化道内窥镜 EG-530WR',
        timelineItems1: [],
        chart1: {
          data: [{
            name: "上呼吸道内窥镜EW34-49",
            '收入': 80,
            '支出': 60,
            '设备价值': 480,
            '服务人次': 99,
          }, {
            name: "上呼吸道内窥镜EW34-42",
            '收入': 40,
            '支出': 11,
            '设备价值': 880,
            '服务人次': 234,
          }, {
            name: "十二指肠内窥镜EW34-96",
            '收入': 330,
            '支出': 234,
            '设备价值': 980,
            '服务人次': 99,
          }, {
            name: "电子上消化道内窥镜 EG-531WR",
            '收入': 444,
            '支出': 580,
            '设备价值': 880,
            '服务人次': 555,
          }, {
            name: "电子上消化道内窥镜 EG-533WR",
            '收入': 999,
            '支出': 490,
            '设备价值': 880,
            '服务人次': 666,
          }, {
            name: "电子上消化道内窥镜 EG-520WR",
            '收入': 666,
            '支出': 290,
            '设备价值': 880,
            '服务人次': 22
          }, {
            name: "电子上消化道内窥镜 EG-535WR",
            '收入': 222,
            '支出': 333,
            '设备价值': 880,
            '服务人次': 28,
          }, {
            name: "电子上消化道内窥镜 EG-520WR",
            '收入': 111,
            '支出': 222,
            '设备价值': 880,
            '服务人次': 333,
          }, {
            name: "电子上消化道内窥镜 EG-330WR",
            '收入': 333,
            '支出': 112,
            '设备价值': 880,
            '服务人次': 101,
          }, {
            name: "电子上消化道内窥镜 EG-530WR",
            '收入': 123,
            '支出': 222,
            '设备价值': 880,
            '服务人次': 111,
          }],
        },

        chart3: {
          data: [],
          chart: null,
        }
        // list3: [],

      }
    },
    computed: {},
    created() {
      this.name2 = this.chart1.data[0].name
      // this.getqueryOverview()
      this.$nextTick(() => {
        this.renderChart1()
        this.renderChart3()
      })
    },
    methods: {
      random(lower, upper) {
        return Math.floor(Math.random() * (upper - lower)) + lower;
      },
      data3() {
        let _this = this

        _this.chart3.data = [{
          item: '维修',
          value: _this.random(2, 10),
        }, {
          item: '巡检',
          value: _this.random(2, 10),
        }, {
          item: '保养',
          value: _this.random(2, 10),

        }, {
          item: '校正',
          value: _this.random(2, 10),

        }, {
          item: '强检',
          value: _this.random(2, 10),

        }]
        var _DataSet = DataSet,
          DataView = _DataSet.DataView;

        var dv = new DataView().source(_this.chart3.data);
        dv.transform({
          type: 'fold',
          fields: ['value'], // 展开字段集
          key: 'user', // key字段
          value: 'score' // value字段
        });
        return dv
      },
      renderChart1() {
        // let rem =
        let _this = this
        var dv = new DataSet.DataView();
        dv.source(this.chart1.data).transform({
          type: 'map',
          callback: function callback(row) {
            row['支出'] *= -1;
            return row;
          }
        })
          .transform({
            type: 'fold',
            fields: ['收入', '支出'],
            key: 'opinion',
            value: 'value',
            retains: ['name']
          });

        console.log(dv)
        var colorMap = {
          '收入': '#86C7E6',
          '支出': '#1B85E7',
        };

        var chart = new G2.Chart({
          container: 'chart1',
          forceFit: true,
          height: document.querySelector('#chart1').clientHeight,
          padding: [getRem(1.6), 0, 0, 0],
          // animate: false,
        });
        chart.source(dv);
        chart.axis(false);


        this.chart1.data.forEach(function (data, dataIndex) {
          // chart.guide().region({
          //   top: true, // 指定 giude 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
          //   start: [dataIndex - .25, 'min'], // 辅助框起始位置，值为原始数据值，支持 callback
          //   end: [dataIndex + .25, 'max'],// 辅助框结束位置，值为原始数据值，支持 callback
          //   style: {
          //     lineWidth: 0, // 辅助框的边框宽度
          //     fill: '#f80', // 辅助框填充的颜色
          //     fillOpacity: 0.1, // 辅助框的背景透明度
          //     stroke: '#ccc' // 辅助框的边框颜色设置
          //   } // 辅助框的图形样式属性
          // });


          if (data['支出'] > data['收入']) {
            // 辅助框
            chart.guide().regionFilter({
              top: true, // 指定 giude 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
              start: [dataIndex - .25, -data['收入']], // 辅助框起始位置，值为原始数据值，支持 callback
              end: [dataIndex + .25, -data['支出']],// 辅助框结束位置，值为原始数据值，支持 callback
              color: '#E2340D',
            });
          }
        });


        chart.tooltip({
          inPlot: true,
          useHtml: true,
          htmlContent: function (title, items) {
            let data = {};
            _this.chart1.data.forEach(n => {
              if (n.name === title) {
                data = n
              }
            })
            return `<div class="g2-tooltip">
                    <div class="g2-tooltip-title">${title}</div>
                    <ul class="g2-tooltip-list">
                      <li class="g2-tooltip-li">设备价值：${_this.numberComma(data.设备价值)}万</li>
                      <li class="g2-tooltip-li">服务人次：${_this.numberComma(data.服务人次)}</li>
                      <li class="g2-tooltip-li">收入：${_this.numberComma(data.收入)}万</li>
                      <li class="g2-tooltip-li">支出：${_this.numberComma(data.支出)}万</li>
                    </ul>
                  </div>`
          }
        });
        // console.log(getRem())

        chart.legend({
          custom: true,
          itemWidth: getRem(1.4),
          items: [
            {
              value: '收入', // 图例项的文本内容
              marker: {
                symbol: 'square',  // 该图例项 marker 的形状，参见 marker 参数的说明
                fill: colorMap['收入'],  // 该图例项 marker 的填充颜色
                radius: getRem(.1)
              }
            },
            {
              value: '支出', // 图例项的文本内容
              marker: {
                symbol: 'square',  // 该图例项 marker 的形状，参见 marker 参数的说明
                fill: colorMap['支出'],  // 该图例项 marker 的填充颜色
                radius: getRem(.1)
              }
            },
          ],
          position: 'top-left',
          offsetX: getRem(.5),
          offsetY: -getRem(.2),
          // marker: {fill: 'red'},
          textStyle: {
            // textAlign: 'center', // 文本对齐方向，可取值为： start middle end
            fill: '#000', // 文本的颜色
            fontSize: getRem(.4), // 文本大小
            // textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
          },

          // onClick: ev => {
          //   const item = ev.item;
          //   const value = item.value;
          //   const checked = ev.checked;
          //   const geoms = chart.getAllGeoms();
          //   for (let i = 0; i < geoms.length; i++) {
          //     console.log('i:', i)
          //     const geom = geoms[i];
          //     console.log(geom.getYScale(), '///', value)
          //     if (geom.getYScale().field === value) {
          //       if (checked) {
          //         geom.show();
          //       } else {
          //         geom.hide();
          //       }
          //     }
          //   }
          // }
          hoverable: false,
          reactive: false,
          clickable: false,
          // title: {
          //   textAlign: 'center', // 文本对齐方向，可取值为： start middle end
          //   // fill: '#404040', // 文本的颜色
          //   fontSize: '50', // 文本大小
          //   // fontWeight: 'bold', // 文本粗细
          //   textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
          // }
          // autoWrap: false,
        });

        // chart.axis(false);
        chart.coord();
        chart.intervalStack().position('name*value').color('opinion', function (opinion) {
          return colorMap[opinion];
        });

        chart.on('click', ev => {
          // 获取逼近的点 point 的原始数据集合
          var records = chart.getSnapRecords({x: ev.x, y: ev.y});
          console.log(records);
          // const data = ev.data;
          const name = records[0]._origin.name
          _this.name2 = name
          _this.chart3.chart.changeData(_this.data3());
          _this.timelineTitle = name;
          _this.currentTimeline.length == _this.timelineList1.length?_this.currentTimeline = _this.timelineList2:_this.currentTimeline = _this.timelineList1;
        });

        chart.render();
      },

      renderChart3() {
        let _this = this

        // console.log(_this.data3)
        _this.chart3.chart = new G2.Chart({
          container: 'chart3',
          forceFit: true,
          height: document.querySelector('#chart3').clientHeight,
          padding: [getRem(.5), getRem(.2), 0, getRem(.2)]
        });
        _this.chart3.chart.source(_this.data3(), {
          score: {
            min: 0,
            max: 10
          }
        });
        _this.chart3.chart.coord('polar', {
          radius: 0.8
        });
        _this.chart3.chart.axis('item', {
          line: null,
          label: {
            // offset: {number}, // 设置坐标轴文本 label 距离坐标轴线的距离
            textStyle: {
              // textAlign: 'center', // 文本对齐方向，可取值为： start middle end
              // fill: '#404040', // 文本的颜色
              fontSize: getRem(.4), // 文本大小
              fontWeight: 'bold', // 文本粗细
              // rotate: 30,
              // textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
            },
            // autoRotate: {boolean} // 是否需要自动旋转，默认为 true
          },
          tickLine: null,
          grid: {
            lineStyle: {
              lineDash: null
            },
            hideFirstLine: false
          }
        });
        _this.chart3.chart.axis('score', {
          // title: null,
          label: null,
          line: null,
          tickLine: null,
          grid: {
            type: 'polygon',
            lineStyle: {
              lineWidth: getRem(.02),
              lineDash: null
            }
          }
        });
        _this.chart3.chart.legend(false)
        _this.chart3.chart.tooltip(false)
        _this.chart3.chart.line().position('item*score').color('user').size(getRem(.01));
        // chart.point().position('item*score').color('user').shape('circle').size(getRem(.04)).style({
        //   stroke: '#fff',
        //   lineWidth: 1,
        //   fillOpacity: 1
        // });
        _this.chart3.chart.area().position('item*score').color('user');
        // chart.active(false)
        // const geoms = chart.getAllGeoms();
        // for (let i = 0; i < geoms.length; i++) {
        //   const geom = geoms[i];
        //   geom.select(false)
        // }
        _this.chart3.chart.render();
      },
      numberComma(source, length = 3) {
        source = String(source).split(".");
        source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{' + length + '})+$)', 'ig'), "$1,");
        return source.join(".");
      },
    }
  }
</script>
<style scoped lang="less">
  .container {
    min-width: 1200px;
    width: 100%;
    height: 100%;
    background: #D7E0EE;
    overflow: hidden;
    font-size: .4rem;
    padding: .3rem;
    display: flex;

    .b-left {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .b-left-top {
        border-radius: .16rem;
        height: 50%;
        margin: .15rem;
        background: #fff;

        .chart1-box {
          background: #fff;
          /*flex: 1;*/
          padding: .5rem;
          position: relative;
          border-radius: .16rem;
          height: 100%;

          .name {
            position: absolute;
            /*top: 60px;*/
          }

          .list-box1 {
            position: absolute;
            right: .6rem;
            top: .5rem;
            display: flex;
            z-index: 2;

            .list {
              display: flex;
              align-items: baseline;
              margin-left: .6rem;

              .total {
                margin-right: .4rem;

                .value {
                  font-weight: bold;
                  font-size: .6rem;
                  margin-bottom: .1rem;
                }

                .text {
                  font-size: .4rem;
                }
              }

              .status {


                .value {
                  font-weight: bold;
                  font-size: .6rem;
                  display: flex;
                  align-items: baseline;
                  margin-bottom: .1rem;

                  .iconfont {
                    font-size: .7rem;
                  }
                }

                .text {
                  color: #000;
                  font-size: .4rem;
                }

                &.up {
                  color: #E64340;
                }

                &.down {
                  color: #3eaf7c;

                  .iconfont {
                    transform: rotate(180deg);
                  }
                }
              }
            }
          }

          #chart1 {
            width: 100%;
            height: 100%;
          }
        }

      }

      .b-left-bottom {
        border-radius: .16rem;
        height: 50%;
        margin: .15rem;
        background: #fff;
        display: flex;
        position: relative;

        .name {
          position: absolute;
          left: .5rem;
          top: .5rem;
        }

        #chart3 {
          width: 60%;
          height: 100%;
        }

        .list3 {
          width: 40%;
          font-weight: bold;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: .3rem;

          .item {
            margin: .3rem 0;

            .title {
            }

            .count {

            }
          }


        }
      }
    }

    .b-right {
      width: 50%;
      height: 100%;
      padding: .15rem;

      .b-right-content {
        width: 100%;
        height: 100%;
        border-radius: .16rem;
        background: #fff;
        .timeline{
          margin-top: 0px;
        }
      }
    }


    /deep/ .g2-tooltip {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: .16rem;
      color: #ddd;
      font-size: .36rem;
      line-height: 1.2;
      padding: .24rem .24rem .1rem .24rem;
      box-shadow: 0 0 .1rem #aeaeae;
    }

    /deep/ .g2-tooltip-title {
      font-size: .4rem;
    }

    /deep/ .g2-tooltip-list {
      padding: 0;
      list-style-type: none;
      margin-top: .2rem;

      .g2-tooltip-li {
        margin: .2rem 0;
      }
    }

    canvas {
      background: #fff;
      width: 100%;
      height: 100%;
    }

  }


</style>

