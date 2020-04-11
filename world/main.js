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
            scrollY: '70vh',
            scrollCollapse: true,
            paging: false,
            "ordering": false
        });
        console.log('confirmed' + confirmed_total);
        console.log('deaths' + deaths_total);
        console.log('recovered' + recovered_total);
        document.querySelector('#confirmed').textContent = confirmed_total;
        document.querySelector('#deaths').textContent = deaths_total;
        document.querySelector('#recovered').textContent = recovered_total;
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