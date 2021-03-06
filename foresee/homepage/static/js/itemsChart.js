// $("#chart").click(function() {
// $(function() {
function show_item_chart() {
    // console.log(chartitem);
    $('.itemsChart').highcharts({
        colors: ['#45c99f'],
        chart: {
            type: 'bar',
            // width: 450,
            height: 592,
            spacingBottom: 0,
            spacingTop: 10,
            spacingLeft: 10,
            spacingRight: 0,
            backgroundColor: '#fff',
            // borderColor: '#EBBA95',
            // borderWidth: 2
        },
        // plotOptions: {
        //     series: {
        //         colorByPoint: true
        //     }
        // },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        title: {
            text: '求償項目',
            style: {
                    fontSize: '20px',
                    fontFamily: 'Microsoft JhengHei, Verdana, sans-serif',
            }
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: 0,/*橫軸項目名稱傾斜角度*/
                style: {
                    fontSize: '12px',
                    fontFamily: 'Microsoft JhengHei, Verdana, sans-serif',
                }
            }
        },
        yAxis: {
            min: 0,            
            title: {
                text: '次數',
                style: {
                    fontSize: '12px',
                    fontFamily: 'Microsoft JhengHei',
                }
            }
        },
        legend: {
            enabled: false
            /*改變"比例或次數"的值上限，ture是150，flase是125，但我搞不懂差異@@*/
        },
        tooltip: {
            pointFormat: '<b>{point.y:}</b>'
        },
        series: [{
            name: '比例或次數',/*圖表名稱*/
            data: chartitem,
            dataLabels: {
                enabled: true,/*柱狀圖上的數字*/
                rotation: 0,/*柱狀圖上的數字旋轉角度*/
                color: '#FFFFFF',/*柱狀數字的顏色*/
                align: 'right',
                format: '{y}', // '{point.y:.1f}'= one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '15px',
                    fontFamily: 'Microsoft JhengHei, Verdana, sans-serif'
                }
            }/*end of dataLabels*/
        }]/*end of series*/
    });
};