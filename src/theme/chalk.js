(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('chalk', {
        "color": [
            "#e85173",
            "#15b4e6",
            "#f2e914",
            "#95cff0",
            "#f7c5a0",
            "#d4a4eb",
            "#d2f5a6",
            "#76f2f2",
            "#293441"
        ],
        "backgroundColor": "rgba(41,52,65,1)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#ffffff"
            },
            "subtextStyle": {
                "color": "#dddddd"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": "4"
            },
            "lineStyle": {
                "width": "3"
            },
            "symbolSize": "0",
            "symbol": "emptyCircle",
            "smooth": false
        },
        "radar": {
            "itemStyle": {
                "borderWidth": "4"
            },
            "lineStyle": {
                "width": "3"
            },
            "symbolSize": "0",
            "symbol": "emptyCircle",
            "smooth": false
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#fc97af",
                "color0": "transparent",
                "borderColor": "#fc97af",
                "borderColor0": "#87f7cf",
                "borderWidth": "2"
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "lineStyle": {
                "width": 1,
                "color": "#ffffff"
            },
            "symbolSize": "0",
            "symbol": "emptyCircle",
            "smooth": false,
            "color": [
                "#e85173",
                "#15b4e6",
                "#f2e914",
                "#95cff0",
                "#f7c5a0",
                "#d4a4eb",
                "#d2f5a6",
                "#76f2f2",
                "#293441"
            ],
            "label": {
                "color": "#cccccc"
            }
        },
        "map": {
            "emphasis": {
              
                    "areaColor": "#eee",
                    "borderColor": "#444",
                    "borderWidth": 0.5,
               
                "emphasis": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                }
            },
            "label": {
             
                        "color": "#000",
          
                "emphasis": {
                        "color": "rgb(100,0,0)"
                }
            }
        },
        "geo": {
            "emphasis": {
                
                    "areaColor": "#eee",
                    "borderColor": "#444",
                    "borderWidth": 0.5,
              
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "#000",
                    "emphasis": {
                            "color": "rgb(100,0,0)"
                    }
                }
            },
           
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#666666"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#aaaaaa"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#e6e6e6"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#6E7079"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#6E7079"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#6E7079"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#E0E6F1"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.2)",
                        "rgba(210,219,238,0.2)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#6E7079"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#6E7079"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#6E7079"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#E0E6F1"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.2)",
                        "rgba(210,219,238,0.2)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#6E7079"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#6E7079"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#6E7079"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#E0E6F1"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.2)",
                        "rgba(210,219,238,0.2)"
                    ]
                }
            }
        },
        "toolbox": {
            "emphasis": {
                    "borderColor": "#999",
                "iconStyle": {
                    "borderColor": "#666"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#999999"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#ccc",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#ccc",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#87f7cf",
                "width": "1"
            },
            "emphasis": {
                    "color": "#87f7cf",
                    "borderWidth": 1,
                "itemStyle": {
                    "color": "#f7f494"
                },
                "controlStyle": {
                    "color": "#87f7cf",
                    "borderColor": "#87f7cf",
                    "borderWidth": "0.5",
               
                "emphasis": {
                    "color": "#87f7cf",
                    "borderColor": "#87f7cf",
                    "borderWidth": "0.5"
                }
            },
            "label": {
                "color": "#87f7cf",
                "emphasis": {
                        "color": "#87f7cf"
                }
            }
            },
            // "controlStyle": {
            //         "color": "#87f7cf",
            //         "borderColor": "#87f7cf",
            //         "borderWidth": "0.5",
               
            //     "emphasis": {
            //         "color": "#87f7cf",
            //         "borderColor": "#87f7cf",
            //         "borderWidth": "0.5"
            //     }
            // },
            "checkpointStyle": {
                "color": "#fc97af",
                "borderColor": "#fc97af"
            },
         
        },
        "visualMap": {
            "color": [
                "#fc97af",
                "#87f7cf",
                "#f6efa6"
            ]
        },
        "dataZoom": {
            "handleSize": "undefined%",
            "textStyle": {}
        },
        "markPoint": {
            "label": {
                "color": "#cccccc"
            },
            "emphasis": {
                "label": {
                    "color": "#cccccc"
                }
            }
        }
    });
}));
