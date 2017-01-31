// Data retrieved from http://vikjavev.no/ver/index.php?spenn=2d&sluttid=16.06.2015.
$(function () {
    Highcharts.chart('chart', {
        chart: {
            type: 'areaspline',
            backgroundColor: null
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            lineWidth: 0,
            tickWidth: 0,
            title: {
                text: ''
            },
            type: 'datetime',
            labels: {
                enabled: false,
                overflow: 'justify'
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            labels: {
                enabled: false
            }
        },
        tooltip: {
            valueSuffix: ' mins'
        },
        plotOptions: {
            areaspline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 5
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 3600000, // one hour
                pointStart: Date.UTC(2015, 4, 31, 0, 0, 0),
                color: 'rgba(255,255,255,.3)'
            },
            series: {
                animation: {
                    duration: 2000
                },
                fillColor: {
                    linearGradient: [0, 0, 0, 300],
                    stops: [
                        [0, 'rgba(255,255,255,.2)'],
                        [1, 'rgba(255,255,255,0)']
                    ]
                }
            }
        },
        series: [{
            name: ' ',
            data: [33, 102, 71, 43, 106, 96, 30, 86, 80, 111, 88, 69, 92, 67, 75, 88, 34]

        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        }
    });
});
