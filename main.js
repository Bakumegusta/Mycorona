getcorona();
// Karnataka();

function getcorona() {
    fetch("https://api.covid19india.org/data.json")
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            const {
                statewise: [total]
            } = data;
            var time = total.lastupdatedtime;
            var time = new Date();
            // console.ltime.toDateString());
            document.querySelector('#active').textContent = total.active;
            document.querySelector('#confirmed').textContent = total.confirmed;
            document.querySelector('#deaths').textContent = total.deaths;
            document.querySelector('#recovered').textContent = total.recovered;
            document.querySelector('#LastUpdate').textContent = time.toLocaleString();
            var tblHtml =
                "<table class='table ' id='coronaTable'>";
            tblHtml += "<thead class = 'table-dark'>";
            $.each(data.statewise, function(i, d) {
                if (i == 0) {
                    tblHtml += "<tr>";
                    var key1 = [];

                    $.each(d, function(key, value) {
                        key1.push(key);
                    });
                    var key2 = key1.reverse();
                    // console.log(key2);

                    $.each(key1, function(value, key) {
                        // console.log(key);
                        if (key != "delta" && key != 'deltaconfirmed' && key != 'deltadeaths' && key != 'deltarecovered' && key != 'lastupdatedtime' && key != 'statecode') {
                            tblHtml += "<th>";
                            tblHtml += key;
                            tblHtml += "</th>";
                        }

                    });
                    tblHtml += "</thead>";
                    tblHtml += "<tbody>";
                    $.each(data.statewise, function(i, d) {
                        tblHtml += "<tr class ='default'>";
                        var value1 = [];
                        $.each(d, function(key, value) {
                            value1.push(value);
                        });
                        var value2 = value1.reverse();
                        // console.log(value1);
                        // console.log(d);
                        $.each(value1, function(key, value) {
                            // console.log(key, value);
                            // console.log(key);
                            if (value == null) {
                                value = " ";
                            }
                            if (value == "NA") {
                                value = " - ";
                            }
                            if (key != 0 && key != 3 && key != 4 && key != 5 && key != 6) {
                                tblHtml += '<td>';
                                tblHtml += value;
                                tblHtml += '</td>';
                            }

                        });

                    });
                    tblHtml += "</tbody>";
                    tblHtml += "</tbody>";
                    $("#corona-tab").html("");
                    $("#corona-tab").append(tblHtml);
                    // $('#coronaTable').DataTable({
                    //     responsive: true,
                    //     colReorder: true,
                    //     scrollY: '70vh',
                    //     scrollCollapse: true,
                    //     paging: false,
                    //     "ordering": false
                    // });
                }

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