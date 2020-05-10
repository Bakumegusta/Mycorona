fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // console.log(data.Afghanistan[78].confirmed);
        var confirmed_total = 0;
        var deaths_total = 0;
        var recovered_total = 0;

        $.each(data, function(i, d) {
            var final = d.length - 1;
            // console.log(final);
            // console.log(d[final].confirmed);
            // console.log("confirmd" + d[final].confirmed); 
            document.querySelector('#LastUpdate').textContent = d[final].date;
            confirmed_total += d[final].confirmed;
            deaths_total += d[final].deaths;
            recovered_total += d[final].recovered;
            var parent = document.querySelector('#parent');
            var row = document.createElement('tr');
            row.innerHTML = `
                              <td>${i}</td>
                              <td>${d[final].confirmed}</td>
                               <td>${d[final].deaths}</td>
                              <td>${d[final].recovered}</td>
                              </tr>

                `;
            parent.append(row);
            // $.each(d, function(key, value) {
            //     console.log(key);
            //     // console.log(value);
            // })
        });
        $('#corona').DataTable({
          responsive: true,
          colReorder: true,
          scrollY: '52vh',
          scrollCollapse: true,
          scrollX:true,
          paging: false,
          "ordering": false,
          "bInfo" : false,
          columnDefs: [{
              width: '20%',
              targets: 0
          }],
          fixedColumns: true
      });
        // console.log('confirmed' + confirmed_total);
        // console.log('deaths' + deaths_total);
        // console.log('recovered' + recovered_total);
        document.querySelector('#confirmed').textContent = confirmed_total;
        document.querySelector('#deaths').textContent = deaths_total;
        document.querySelector('#recovered').textContent = recovered_total;

        // chart render
        var c= parseInt(confirmed_total);
        var d= parseInt(deaths_total);
        var r= parseInt(recovered_total);
        var chartTotal = [c,d,r];
        // console.log(chartTotal);
         //    chart data
       var data = {
        labels: ["Confirmed", "Deaths", "Recovered"],
        datasets: [{
          label: "Total Case",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 2,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: chartTotal,
        }]
      };         
      var option = {
        scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: true,
              color: "rgba(255,99,132,0.2)"
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      };
      
      Chart.Bar('chart_0', {
        options: option,
        data: data
      });        

        // counter code
        $('.count').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });


    });
