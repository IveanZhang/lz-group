      google.charts.load('current', {
          'packages': ['geochart'],
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
          var data = google.visualization.arrayToDataTable([
              ['Country', '分公司/运营中心'],
              ['US', 1],
              ['Canada', 14],
              ['TW', 1],
              ['China', 13],
              ['KR', 1],
              ['Vietnam', 1],
              ['HK', 1],
              ['England',1]
          ]);
          var options = {
              colorAxis: {colors: ['#b3d0ff', '#2d5ba6']} // orange to blue
          };
          var chart = new google.visualization.GeoChart(document.getElementById('main'));
          chart.draw(data, options);
      }