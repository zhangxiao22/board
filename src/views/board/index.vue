<template>
  <div class="container">
    <div class="top">
      <div class="left box box1">
        <div class="top-list-box">
          <div class="item">
            <div class="value">{{numberComma(112233)}}</div>
            <div class="text">设备数量（台）</div>
          </div>
          <div class="item">
            <div class="value">{{numberComma(22314.34)}}</div>
            <div class="text">设备金额（万元）</div>
          </div>
          <div class="item">
            <div class="value">33.44%</div>
            <div class="text">折旧率</div>
          </div>
          <div class="item">
            <div class="value">{{numberComma(123)}}</div>
            <div class="text">当年服务人次</div>
          </div>
        </div>
        <div class="chart1-box">
          <div class="list-box1">
            <div class="list">
              <div class="total">
                <div class="value">{{numberComma(22608.09)}}</div>
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
                <div class="value">{{numberComma(99999.09)}}</div>
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
      <div class="right box box2">
        <div class="nav">
          <div class="nav-item"
               :class="'nav-item-'+key"
               v-for="(item,key) of navList"
               :key="key"
               @click="list2=item.list">
            <div class="iconfont" :class="item.icon"></div>
            <div class="text">{{item.name}}</div>
          </div>
        </div>
        <div class="list">
          <div class="li" v-for="(item,key) of list2" :key="key">
            <span class="iconfont icon-jingbao"></span>
            <span class="text elip" title="飞利浦手术室撒似懂非懂萨法但是发的萨芬大沙发阿萨德防守打法的撒是大发生地方">
              飞利浦手术室撒似懂非懂萨法但是发的萨芬大沙发阿萨德防守打法的撒是大发生地方
            </span>
            <span class="time">2019-01-01 11:11:11</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="left box box3">
        <div id="chart3"></div>
        <div class="list-box-container">
          <div class="list-box3">
            <div class="list" v-for="(item,key) of list3" :key="key">
              <span class="index">{{key+1}}</span>
              <span class="name elip" :title="item.name">{{item.name}}</span>
              <span class="status" :class="{'err':item.status}">{{item.status?'待维修':'已完成'}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right box box4">
        <div id="chart4"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import {} from '@/api/api'
  import G2 from '@antv/g2';
  import {DataSet} from '@antv/data-set';
  import {queryOverview} from '@/api/api'
  import {numberComma} from '@/common/common';

  export default {
    components: {},
    // filters: {
    //   numberComma(source, length = 3) {
    //     source = String(source).split(".");
    //     source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{' + length + '})+$)', 'ig'), "$1,");
    //     return source.join(".");
    //   },
    // },
    data() {
      return {
        chart1: {
          data: [{
            name: "骨科",
            '收入': 8000,
            '支出': 6000,
            '设备数量': 40,
            '设备价值': 4800,
            '服务人次': 99,
          }, {
            name: "呼吸科",
            '收入': 4000,
            '支出': 1111,
            '设备数量': 30,
            '设备价值': 8800,
            '服务人次': 2334,
          }, {
            name: "放射科",
            '收入': 3300,
            '支出': 2345,
            '设备数量': 50,
            '设备价值': 9800,
            '服务人次': 99,
          }, {
            name: "放射科2",
            '收入': 4444,
            '支出': 5800,
            '设备数量': 47,
            '设备价值': 8800,
            '服务人次': 5555,
          }, {
            name: "放射科0",
            '收入': 9999,
            '支出': 4900,
            '设备数量': 53,
            '设备价值': 8800,
            '服务人次': 6666,
          }, {
            name: "放射科3",
            '收入': 6666,
            '支出': 2900,
            '设备数量': 44,
            '设备价值': 8800,
            '服务人次': 222,
          }, {
            name: "放射科4",
            '收入': 2222,
            '支出': 3333,
            '设备数量': 41,
            '设备价值': 8800,
            '服务人次': 28,
          }, {
            name: "放射科5",
            '收入': 1111,
            '支出': 2222,
            '设备数量': 40,
            '设备价值': 8800,
            '服务人次': 333,
          }, {
            name: "放射科6",
            '收入': 333,
            '支出': 1123,
            '设备数量': 30,
            '设备价值': 8800,
            '服务人次': 101,
          }, {
            name: "放射科7",
            '收入': 1232,
            '支出': 2222,
            '设备数量': 35,
            '设备价值': 8800,
            '服务人次': 111,
          }, {
            name: "放射科8",
            '收入': 1753,
            '支出': 1114,
            '设备数量': 49,
            '设备价值': 8800,
            '服务人次': 69,
          }, {
            name: "放射科9",
            '收入': 3884,
            '支出': 3455,
            '设备数量': 36,
            '设备价值': 8800,
            '服务人次': 2.3,
          }, {
            name: "放射科10",
            '收入': 3560,
            '支出': 2345,
            '设备数量': 41,
            '设备价值': 8800,
            '服务人次': 3.4,
          }],
        },
        navList: [{
          name: '紧急维修',
          icon: 'icon-xiuli1',
          list: Array(33),
        }, {
          name: '召回事件',
          icon: 'icon-buhegepinzhaohui',
          list: Array(33),
        }, {
          name: '强检事件',
          icon: 'icon-jingbao1',
          list: Array(33),
        }, {
          name: '超期事件',
          icon: 'icon-rili',
          list: Array(33),
        }],
        list2: [],
        chart3: {
          data: [{
            name: '骨科',
            count: 55,
            list: Array(...Array(55)).map((n, i) => {
              return {name: '骨科设备骨科设备骨科设备骨科设备骨科设备骨科设备骨科设备骨科设备骨科设备骨科设备骨科设备', status: Math.random() > .5}
            }),
          }, {
            name: '呼吸科',
            count: 33,
            list: Array(...Array(33)).map((n, i) => {
              return {name: '呼吸科设备', status: Math.random() > .5}
            }),
          }, {
            name: '放射科',
            count: 44,
            list: Array(...Array(44)).map((n, i) => {
              return {name: '放射科设备', status: Math.random() > .5}
            }),
          }, {
            name: '手术科',
            count: 22,
            list: Array(...Array(22)).map((n, i) => {
              return {name: '手术科设备', status: Math.random() > .5}
            }),
          }, {
            name: '急诊科',
            count: 11,
            list: Array(...Array(22)).map((n, i) => {
              return {name: '急诊科设备', status: Math.random() > .5}
            }),
          }, {
            name: '血液科',
            count: 5,
            list: Array(...Array(5)).map((n, i) => {
              return {name: '血液科设备', status: Math.random() > .5}
            }),
          }],
          interval: null,
          activeIndex: 0,
          timing: null,
        },
        list3: [],
        chart4: {},
      }
    },
    computed: {},
    created() {
      // this.getqueryOverview()

      this.$nextTick(() => {
        this.renderChart1()
        this.renderChart3()
        this.renderChart4()
      })
      this.autoSelectchart3()
    },
    methods: {
      getqueryOverview() {
        queryOverview().then(res => {
          console.log(res)
        })
      },
      renderChart1() {
        let _this = this
        var dv = new DataSet.DataView();
        dv.source(this.chart1.data).transform({
          type: 'map',
          callback: function callback(row) {
            row['支出'] *= -1;
            return row;
          }
        })
        //   .transform({
        //   type: 'pick',
        //   fields: [ '收入', '支出' ]
        // })
          .transform({
            type: 'fold',
            fields: ['收入', '支出'],
            key: 'opinion',
            value: 'value',
            retains: ['name']
          });

        console.log(dv)
        var colorMap = {
          '收入': '#95cff5',
          '支出': '#3561A7',
        };

        var chart = new G2.Chart({
          container: 'chart1',
          forceFit: true,
          height: document.querySelector('#chart1').clientHeight,
          padding: [55, 0, 0, 0],
          animate: false,
        });
        chart.source(dv);
        chart.axis(false);


        this.chart1.data.forEach(function (data, dataIndex) {
          if (data['支出'] > data['收入']) {
            // 辅助线
            chart.guide().line({
              top: true,
              start: [dataIndex - .25, -data['收入']],
              end: [dataIndex + .25, -data['收入']],

              lineStyle: {
                // fill: 'red',
                stroke: '#f2637b', // 线的颜色
                lineDash: 0, // 虚线的设置
                lineWidth: 1 // 线的宽度
              }, // 图形样式配置

            });
          }
        });


        chart.tooltip({
          itemTpl: '<li></span>{name}:+{value}</li>',
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
                      <li class="g2-tooltip-li">设备数量：${_this.numberComma(data.设备数量)}</li>
                      <li class="g2-tooltip-li">设备价值：${_this.numberComma(data.设备价值)}万</li>
                      <li class="g2-tooltip-li">服务人次：${_this.numberComma(data.服务人次)}万</li>
                      <li class="g2-tooltip-li">收入：${_this.numberComma(data.收入)}万</li>
                      <li class="g2-tooltip-li">支出：${_this.numberComma(data.支出)}万</li>
                    </ul>
                  </div>`
          }
        });
        chart.legend({
          position: 'top-left',
          offsetX: 20,
          offsetY: -30,
          // autoWrap: false,
        });

        // chart.axis(false);
        chart.coord();
        chart.intervalStack().position('name*value').color('opinion', function (opinion) {
          return colorMap[opinion];
        });
        chart.render();
      },
      renderChart3() {
        let _this = this
        let total = 0;
        this.chart3.data.forEach(n => {
          total += n.count
        })
        let chart = new G2.Chart({
          container: 'chart3',
          forceFit: true,
          padding: 0,
          height: document.querySelector('#chart3').clientHeight,
          animate: false,
        });
        chart.source(this.chart3.data, {
          // 'count': {
          //   formatter: function formatter(val) {
          //     console.log(111, val)
          //     return val + 'aa';
          //   }
          // }
        });
        // 坐标轴
        chart.coord('theta', {
          radius: 0.75,
          innerRadius: 0.6
        });
        // 鼠标hover交互
        chart.tooltip({
          showTitle: false,
          'g2-tooltip': {
            'background-color': 'rgba(0, 0, 0, 0.7)',
            color: '#ddd',
          },
          itemTpl: '<li>{name}<br/><br/> 参报数量：{value}</li>'
        });
        // 辅助文本
        chart.guide().html({
          position: ['50%', '50%'],
          html: `<div style="font-size: 14px;text-align: center;width: 10em;">
                  <span style="font-size:20px;font-weight: bold;">${total}</span>件
                  <br />
                  <br />
                  今日总报修
                </div>`,
          alignX: 'middle',
          alignY: 'middle'
        });
        // 不显示图例
        chart.legend(false)
        this.chart3.interval = chart.intervalStack()
          .position('count')
          .style({
            cursor: 'pointer'
          }).color('name')
        chart.render();
        // 默认选中
        this.chart3.interval.setSelected(this.chart3.data[this.chart3.activeIndex]);
        this.getchart3List(this.chart3.activeIndex)

        chart.on('interval:click', ev => {
          const data = ev.data;
          if (data) {
            let name = data._origin['name'];
            // 重新开始定时，防止刚点击一项就自动跳到下一项
            this.chart3.data.forEach((n, i) => {
              if (n.name === name) {
                this.chart3.activeIndex = i
                this.getchart3List(this.chart3.activeIndex)
                clearInterval(this.chart3.timing)
                this.autoSelectchart3()
              }
            })
          }
        })
      },
      autoSelectchart3() {
        this.chart3.timing = setInterval(() => {
          this.chart3.activeIndex++
          (this.chart3.activeIndex > this.chart3.data.length - 1) && (this.chart3.activeIndex = 0)
          this.chart3.interval.setSelected(this.chart3.data[this.chart3.activeIndex])
          this.getchart3List(this.chart3.activeIndex)
        }, 30000)
      },
      getchart3List(index) {
        // 通过下标获取list
        console.log(index)
        this.list3 = this.chart3.data[index].list
      },
      renderChart4() {
        var Shape = G2.Shape;
        // 自定义Shape 部分
        Shape.registerShape('point', 'pointer', {
          drawShape: function drawShape(cfg, group) {
            console.log(cfg)
            var center = this.parsePoint({ // 获取极坐标系下画布中心点
              x: 0,
              y: 0
            });
            var point = cfg.points[0];
            var target = this.parsePoint({
              x: point.x,
              y: 0.9
            });
            var dir_vec = {
              x: center.x - target.x,
              y: center.y - target.y
            };
            //normalize
            var length = Math.sqrt(dir_vec.x * dir_vec.x + dir_vec.y * dir_vec.y);
            dir_vec.x *= 1 / length;
            dir_vec.y *= 1 / length;
            //rotate dir_vector by -90 and scale
            var angle1 = -Math.PI / 2;
            var x_1 = Math.cos(angle1) * dir_vec.x - Math.sin(angle1) * dir_vec.y;
            var y_1 = Math.sin(angle1) * dir_vec.x + Math.cos(angle1) * dir_vec.y;
            //rotate dir_vector by 90 and scale
            var angle2 = Math.PI / 2;
            var x_2 = Math.cos(angle2) * dir_vec.x - Math.sin(angle2) * dir_vec.y;
            var y_2 = Math.sin(angle2) * dir_vec.x + Math.cos(angle2) * dir_vec.y;
            //polygon vertex
            var path = [['M', target.x + x_1 * 1, target.y + y_1 * 1], ['L', center.x + x_1 * 3, center.y + y_1 * 3], ['L', center.x + x_2 * 3, center.y + y_2 * 3], ['L', target.x + x_2 * 1, target.y + y_2 * 1], ['Z']];
            group.addShape('path', {
              attrs: {
                path: path,
                fill: '#F5222D'
              }
            });

            return group.addShape('circle', {
              attrs: {
                x: center.x,
                y: center.y,
                r: 8,
                stroke: '#F5222D',
                lineWidth: 2,
                fill: '#F5222D'
              }
            });
          }
        });

        var data = [{
          value: 5.6
        }];
        var chart = new G2.Chart({
          container: 'chart4',
          forceFit: true,
          height: document.querySelector('#chart1').clientHeight,
          padding: 'auto'
        });
        chart.source(data);
        // 坐标轴
        chart.coord('polar', {
          startAngle: -9 / 8 * Math.PI,
          endAngle: 1 / 9 * Math.PI,
          radius: 1,
        });
        // 刻度
        chart.scale('value', {
          min: 0,
          max: 10,
          tickInterval: 1,
          nice: false
        });

        chart.axis('1', false);
        chart.axis('value', {
          zIndex: 2,
          line: null,
          label: {
            offset: -16,
            textStyle: {
              fontSize: 18,
              textAlign: 'center',
              textBaseline: 'middle'
            }
          },
          subTickCount: 4,
          subTickLine: {
            length: -8,
            stroke: '#fff',
            strokeOpacity: 1
          },
          tickLine: {
            length: -17,
            stroke: '#fff',
            strokeOpacity: 1
          },
          grid: null
        });
        chart.legend(false);
        chart.point().position('value*1').shape('pointer').color('#1890FF').active(false);

        // 绘制仪表盘背景
        chart.guide().arc({
          zIndex: 0,
          top: false,
          start: [0, 0.945],
          end: [10, 0.945],
          style: { // 底灰色
            stroke: '#CBCBCB',
            lineWidth: 18
          }
        });
        // 绘制指标
        chart.guide().arc({
          zIndex: 1,
          start: [0, 0.945],
          end: [data[0].value, 0.945],
          style: {
            stroke: '#1890FF',
            lineWidth: 18
          }
        });
        // 绘制指标数字
        chart.guide().html({
          position: ['50%', '95%'],
          html: '<div style="width: 300px;text-align: center;">' + '<p style="font-size: 20px; color: #545454;margin: 0;">合格率</p>' + '<p style="font-size: 36px;color: #545454;margin: 0;">' + data[0].value * 10 + '%</p>' + '</div>'
        });

        chart.render();
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
    padding: 5px;
    background: #d9e9f9;
    overflow: hidden;

    .top, .bottom {
      width: 100%;
      height: 55%;
      display: flex;

      .left {
        width: 55%;
      }

      .right {
        width: 45%;
      }

      .box {
        background: #fff;
        margin: 5px;
        border-radius: 2px;
      }

      .box1 {
        display: flex;
        flex-direction: column;

        .top-list-box {
          background: #d9e9f9;
          display: flex;
          padding-bottom: 10px;

          .item {
            background: #fff;
            border-radius: 2px;
            height: 80px;
            flex: 1;
            margin-right: 10px;
            padding: 15px 0 15px 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .value {
              color: #5373a9;
              font-size: 24px;
              font-weight: bolder;
            }

            .text {

            }

            &:last-of-type {
              margin-right: 0;
            }
          }
        }

        .chart1-box {
          flex: 1;
          padding: 10px 0;
          position: relative;

          .list-box1 {
            position: absolute;
            right: 10px;
            top: 10px;
            display: flex;

            .list {
              display: flex;
              align-items: baseline;
              margin-left: 20px;

              .total {
                margin-right: 10px;

                .value {
                  font-weight: bold;
                  font-size: 20px;
                }

                .text {

                }
              }

              .status {


                .value {
                  font-weight: bold;
                  font-size: 20px;
                  display: flex;
                  align-items: baseline;

                  .iconfont {
                    font-size: 24px;
                  }
                }

                .text {
                  color: #000;

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

      .box2 {
        position: relative;

        .nav {
          display: flex;
          padding: 10px;
          justify-content: space-between;

          .nav-item {
            position: relative;
            width: 100px;
            height: 100px;
            border-radius: 10px;
            cursor: pointer;
            background-color: #d9e9f9;
            margin: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 15px 0;
            justify-content: space-between;

            &:hover {
              box-shadow: 0px 0px 6px #aaa;
            }

            .iconfont {
              font-size: 36px;
              color: #5a81c4;
            }

            .text {
              font-weight: bold;
            }
          }
        }

        .list {
          position: absolute;
          left: 0;
          right: 0;
          top: 140px;
          bottom: 20px;
          overflow-y: auto;
          padding: 0 40px;
          font-size: 16px;

          .li {
            display: flex;
            margin-bottom: 15px;

            &:last-of-type {
              margin-bottom: 0;
            }

            .iconfont {
              color: #FF6633;
              margin-right: 5px;
              font-weight: bold;
            }

            .text {
              flex: 1;
              margin-right: 10px;
            }

            .time {
              font-size: 14px;
              color: #888;
            }
          }
        }
      }

      .box3 {
        display: flex;

        #chart3 {
          width: 40%;
          height: 100%;
        }

        .list-box-container {
          width: 60%;
          padding: 20px 0 20px 20px;
          /*flex: 1;*/

          .list-box3 {
            padding-right: 30px;
            height: 100%;
            overflow-y: auto;

            .list {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 20px;

              .index {
                font-size: 20px;
                color: #5a81c4;
                margin-right: 15px;
              }

              .name {
                flex: 1;
                margin-right: 20px;
                width: 0;
              }

              .status {
                font-size: 12px;
                padding: 4px 8px;
                border-radius: 2px;
                background: #5a81c4;
                color: #fff;

                &.err {
                  background: #E64340;
                }
              }
            }
          }
        }

      }

      .box4 {
        #chart4 {
          width: 30%;
          height: 100%;
        }
      }
    }

    .bottom {
      height: 45%;
    }


    /deep/ .g2-tooltip {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 3px;
      color: #ddd;
      font-size: 12px;
      line-height: 20px;
      padding: 10px 10px 6px 10px;
      box-shadow: 0px 0px 10px #aeaeae;
    }

    /deep/ .g2-tooltip-list {
      padding: 0;
      list-style-type: none;
      margin-top: 5px;
    }

    /deep/ .g2-tooltip-li {
      margin: 5px 0;
    }
  }

  canvas {
    background: #fff;
    width: 100%;
    height: 100%;
  }

</style>

