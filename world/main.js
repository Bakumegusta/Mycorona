fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // console.log(data.Afghanistan[78].confirmed);
        var confirmed_total = 0;
        var deaths_total = 0;
        var recovered_total = 0;

        $.each(data, function(i, d) {
            // console.log(i);
            // console.log("confirmd" + d[79].confirmed); 
            document.querySelector('#LastUpdate').textContent = d[79].date;
            confirmed_total += d[79].confirmed;
            deaths_total += d[79].deaths;
            recovered_total += d[79].recovered;
            var parent = document.querySelector('#parent');
            var row = document.createElement('tr');
            row.innerHTML = `
                              <td>${i}</td>
                              <td>${d[79].confirmed}</td>
                               <td>${d[79].deaths}</td>
                              <td>${d[79].recovered}</td>
                              </tr>

                `;
            parent.append(row);
            // $.each(d, function(key, value) {
            //     // console.log(key);
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