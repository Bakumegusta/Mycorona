getcorona();
// Karnataka();
function getcorona() {
    fetch("https://api.covid19india.org/data.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const {
                statewise: [total]
            } = data;
            var time = total.lastupdatedtime;
            var datearray = time.split("/");
            var newdate = datearray[1] + '/' + datearray[0] + '/' + datearray[2];
            var localTime = new Date(newdate);
            console.log(newdate);
            document.querySelector('#active').textContent = total.active;
            document.querySelector('#confirmed').textContent = total.confirmed;
            document.querySelector('#deaths').textContent = total.deaths;
            document.querySelector('#recovered').textContent = total.recovered;
            document.querySelector('#LastUpdate').textContent = localTime.toLocaleString();
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
            // table rendering
            $.each(data.statewise, function(i, d) {
                console.log(d);
                var parent = document.querySelector('#parent');
                var row = document.createElement('tr');
                row.innerHTML = `
                              <td>${d.state}</td>
                              <td>${d.recovered}</td>
                              <td>${d.deaths}</td>
                              <td>${d.confirmed}</td>
                              <td>${d.active}</td>
                              </tr>

                `;
                parent.append(row);
                // $('#coronaTable').DataTable({
                //     responsive: true,
                //     colReorder: true,
                //     scrollY: '70vh',
                //     scrollCollapse: true,
                //     paging: false,
                //     "ordering": false
                // });
            });

        });
}

// function Karnataka() {
//     console.log(name);
//     fetch("https://api.covid19india.org/state_district_wise.json")
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             var {
//                 Karnataka: {
//                     districtData: Kerala
//                 }
//             } = data;
//             console.log(Kerala);
//             $.each(Kerala, function(i, d) {
//                 var parent = document.querySelector('#parent');
//                 var row = document.createElement('tr');
//                 row.innerHTML = `
//                               <td>${i}</td>
//                               <td>${d.confirmed}</td>

//                               </tr>

//                 `;
//                 parent.append(row);
//             });
//             $('#coronaDistTable').DataTable({
//                 responsive: true,
//                 colReorder: true,
//                 scrollY: '70vh',
//                 scrollCollapse: true,
//                 paging: false,
//                 "ordering": true
//             });
//         });

// }