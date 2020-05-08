getcorona();
// state();
function getcorona() {
    fetch("https://api.covid19india.org/data.json")
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            const {
                statewise: [total]
            } = data;
            var time = total.lastupdatedtime;
            var datearray = time.split("/");
            var newdate = datearray[1] + '/' + datearray[0] + '/' + datearray[2];
            var localTime = new Date(newdate);
            // console.log(newdate);
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
                if(i!=0){
                    // console.log(d.statecode,d.state)
                    // console.log(d);
                    var parent = document.querySelector('#parent');
                    var row = document.createElement('tr');
                    row.innerHTML = `
                                  <td id="${d.statecode}" onclick= state(this.id)>${d.state} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></td>
                                  <td>${d.recovered}</td>
                                  <td>${d.deaths}</td>
                                  <td>${d.confirmed}</td>
                                  <td>${d.active}</td>
                                  </tr>
                    `;
                    parent.append(row);
                }
            
            });
            // var table = $('#corona').DataTable();

            var day= [];
            var confirmed =[];
            var recovered =[];
            var death =[];
            const lineChart =data.cases_time_series;
            lineChart.forEach(function(data){
                day.push(data.date);
                confirmed.push(data.totalconfirmed);
                recovered.push(data.totalrecovered);
                death.push(data.totaldeceased);               

            })
          
        });

}


function state(statecode) {
    fetch("https://api.covid19india.org/state_district_wise.json")
        .then(response => response.json())
        .then(data => {
            var statename;
            if(statecode == "MH"){
                statename = data["Maharashtra"]["districtData"];
            }else if(statecode == "GJ"){
                statename = data["Gujarat"]["districtData"];
            }else if(statecode == "DL"){
                statename = data["Delhi"]["districtData"];
            }else if(statecode == "TN"){
                statename = data["Tamil Nadu"]["districtData"];
            }else if(statecode == "RJ"){
                statename = data["Rajasthan"]["districtData"];
            }else if(statecode == "MP"){
                statename = data["Madhya Pradesh"]["districtData"];
            }else if(statecode == "UP"){
                statename = data["Uttar Pradesh"]["districtData"];
            }else if(statecode == "AP"){
                statename = data["Andhra Pradesh"]["districtData"];
            }else if(statecode == "PB"){
                statename = data["Punjab"]["districtData"];
            }else if(statecode == "WB"){
                statename = data["West Bengal"]["districtData"];
            }else if(statecode == "TG"){
                statename = data["Telangana"]["districtData"];
            }else if(statecode == "JK"){
                statename = data["Jammu and Kashmir"]["districtData"];
            }else if(statecode == "KA"){
                statename = data["Karnataka"]["districtData"];
            }else if(statecode == "HR"){
                statename = data["Haryana"]["districtData"];
            }else if(statecode == "BR"){
                statename = data["Bihar"]["districtData"];
            }else if(statecode == "KL"){
                statename = data["Kerala"]["districtData"];
            }else if(statecode == "OR"){
                statename = data["Odisha"]["districtData"];
            }else if(statecode == "CH"){
                statename = data["Chandigarh"]["districtData"];
            }else if(statecode == "JH"){
                statename = data["Jharkhand"]["districtData"];
            }else if(statecode == "TR"){
                statename = data["Tripura"]["districtData"];
            }else if(statecode == "UT"){
                statename = data["Uttarakhand"]["districtData"];
            }else if(statecode == "CT"){
                statename = data["Chhattisgarh"]["districtData"];
            }else if(statecode == "AS"){
                statename = data["Assam"]["districtData"];
            }else if(statecode == "HP"){
                statename = data["Himachal Pradesh"]["districtData"];
            }else if(statecode == "LA"){
                statename = data["Ladakh"]["districtData"];
            }else if(statecode == "AN"){
                statename = data["Andaman and Nicobar Islands"]["districtData"];
            }else if(statecode == "PY"){
                statename = data["Puducherry"]["districtData"];
            }else if(statecode == "ML"){
                statename = data["Meghalaya"]["districtData"];
            }else if(statecode == "GA"){
                statename = data["Goa"]["districtData"];
            }else if(statecode == "MN"){
                statename = data["Manipur"]["districtData"];
            }else if(statecode == "MN"){
                statename = data["Manipur"]["districtData"];
            }else if(statecode == "MZ"){
                statename = data["Mizoram"]["districtData"];
            }else if(statecode == "AR"){
                statename = data["Arunachal Pradesh"]["districtData"];
            }else if(statecode == "DN"){
                statename = data["Dadra and Nagar Haveli and Daman and Diu"]["districtData"];
            }else if(statecode == "NL"){
                statename = data["Nagaland"]["districtData"];
            }else if(statecode == "DD"){
                statename = data["Daman and Diu"]["districtData"];
            }else if(statecode == "LD"){
                statename = data["Lakshadweep"]["districtData"];
            }else if(statecode == "SK"){
                statename = data["Sikkim"]["districtData"];
            }
        //     console.log(data); 
        //    console.log(statename);  
            $.each(statename, function(i, d) {
                // console.log(i,d);
                var parent = document.querySelector('#distparent');
                var row = document.createElement('tr');
                row.innerHTML = `
                              <td>${i}</td>
                              <td>${d.confirmed}</td>
                              </tr>
                `;
                parent.append(row);

            });
            // $('#coronaDistTable').DataTable({
            //     responsive: true,
            //     colReorder: true,
            //     scrollY: '70vh',
            //     scrollCollapse: true,
            //     paging: false,
            //     "ordering": true
            // });
        });
        $('#coronaDistTable tbody').empty();
}
