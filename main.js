
$('.districtModal').hide();
getcorona();
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
                                  <td id="${d.statecode}" onclick= state(this.id,this)>${d.state} <img src="https://img.icons8.com/color/20/000000/tap.png"/></td>
                                  <td>${d.confirmed}</td>                              
                                  <td>${d.recovered}</td>
                                  <td>${d.active}</td>
                                  <td>${d.deaths}</td>
                                  </tr>
                    `;
                    parent.append(row);
                }
            
            });
            $('#corona').DataTable({
                responsive: true,
                colReorder: true,
                scrollY: '52vh',
                scrollCollapse: true,
                scrollX:true,
                paging: false,
                "ordering": false,
                "searching": false,
                "bInfo" : false,
                columnDefs: [{
                    width: '40%',
                    targets: 0
                }],
                fixedColumns: true
            });
            var a= parseInt(total.active);
            var c= parseInt(total.confirmed);
            var d= parseInt(total.deaths);
            var r= parseInt(total.recovered);
            var chartTotal = [a,c,d,r];
            // console.log(chartTotal);
             //    chart data
           var data = {
            labels: ["Active", "Confirmed", "Deaths", "Recovered"],
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
        });

       

}

// district wise
function state(statecode ,stateLabel) {
    var stateLabel = stateLabel.innerText; 
    console.log(stateLabel);    
$('.districtModal').show();
    fetch("https://api.covid19india.org/state_district_wise.json")
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            //   check which state user click 
            var statename;        
            if(statecode == "MH"){
                $('#stateLabel').text(stateLabel);
                statename = data["Maharashtra"]["districtData"];
            }else if(statecode == "GJ"){
                $('#stateLabel').text(stateLabel);
                statename = data["Gujarat"]["districtData"];
            }else if(statecode == "DL"){
                $('#stateLabel').text(stateLabel);
                statename = data["Delhi"]["districtData"];
            }else if(statecode == "TN"){
                $('#stateLabel').text(stateLabel);
                statename = data["Tamil Nadu"]["districtData"];
            }else if(statecode == "RJ"){
                $('#stateLabel').text(stateLabel);
                statename = data["Rajasthan"]["districtData"];
            }else if(statecode == "MP"){
                $('#stateLabel').text(stateLabel);
                statename = data["Madhya Pradesh"]["districtData"];
            }else if(statecode == "UP"){
                $('#stateLabel').text(stateLabel);
                statename = data["Uttar Pradesh"]["districtData"];
            }else if(statecode == "AP"){
                $('#stateLabel').text(stateLabel);
                statename = data["Andhra Pradesh"]["districtData"];
            }else if(statecode == "PB"){
                $('#stateLabel').text(stateLabel);
                statename = data["Punjab"]["districtData"];
            }else if(statecode == "WB"){
                $('#stateLabel').text(stateLabel);
                statename = data["West Bengal"]["districtData"];
            }else if(statecode == "TG"){
                $('#stateLabel').text(stateLabel);
                statename = data["Telangana"]["districtData"];
            }else if(statecode == "JK"){
                $('#stateLabel').text(stateLabel);
                statename = data["Jammu and Kashmir"]["districtData"];
            }else if(statecode == "KA"){
                $('#stateLabel').text(stateLabel);
                statename = data["Karnataka"]["districtData"];
            }else if(statecode == "HR"){
                $('#stateLabel').text(stateLabel);
                statename = data["Haryana"]["districtData"];
            }else if(statecode == "BR"){
                $('#stateLabel').text(stateLabel);
                statename = data["Bihar"]["districtData"];
            }else if(statecode == "KL"){
                $('#stateLabel').text(stateLabel);
                statename = data["Kerala"]["districtData"];
            }else if(statecode == "OR"){
                $('#stateLabel').text(stateLabel);
                statename = data["Odisha"]["districtData"];
            }else if(statecode == "CH"){
                $('#stateLabel').text(stateLabel);
                statename = data["Chandigarh"]["districtData"];
            }else if(statecode == "JH"){
                $('#stateLabel').text(stateLabel);
                statename = data["Jharkhand"]["districtData"];
            }else if(statecode == "TR"){
                $('#stateLabel').text(stateLabel);
                statename = data["Tripura"]["districtData"];
            }else if(statecode == "UT"){
                $('#stateLabel').text(stateLabel);
                statename = data["Uttarakhand"]["districtData"];
            }else if(statecode == "CT"){
                $('#stateLabel').text(stateLabel);
                statename = data["Chhattisgarh"]["districtData"];
            }else if(statecode == "AS"){
                $('#stateLabel').text(stateLabel);
                statename = data["Assam"]["districtData"];
            }else if(statecode == "HP"){
                $('#stateLabel').text(stateLabel);
                statename = data["Himachal Pradesh"]["districtData"];
            }else if(statecode == "LA"){
                $('#stateLabel').text(stateLabel);
                statename = data["Ladakh"]["districtData"];
            }else if(statecode == "AN"){
                $('#stateLabel').text(stateLabel);
                statename = data["Andaman and Nicobar Islands"]["districtData"];
            }else if(statecode == "PY"){
                $('#stateLabel').text(stateLabel);
                statename = data["Puducherry"]["districtData"];
            }else if(statecode == "ML"){
                $('#stateLabel').text(stateLabel);
                statename = data["Meghalaya"]["districtData"];
            }else if(statecode == "GA"){
                $('#stateLabel').text(stateLabel);
                statename = data["Goa"]["districtData"];
            }else if(statecode == "MN"){
                $('#stateLabel').text(stateLabel);
                statename = data["Manipur"]["districtData"];
            }else if(statecode == "MN"){
                $('#stateLabel').text(stateLabel);
                statename = data["Manipur"]["districtData"];
            }else if(statecode == "MZ"){
                $('#stateLabel').text(stateLabel);
                statename = data["Mizoram"]["districtData"];
            }else if(statecode == "AR"){
                $('#stateLabel').text(stateLabel);
                statename = data["Arunachal Pradesh"]["districtData"];
            }else if(statecode == "DN"){
                $('#stateLabel').text(stateLabel);
                statename = data["Dadra and Nagar Haveli and Daman and Diu"]["districtData"];
            }else if(statecode == "NL"){
                $('#stateLabel').text(stateLabel);
                statename = data["Nagaland"]["districtData"];
            }else if(statecode == "DD"){
                $('#stateLabel').text(stateLabel);
                statename = data["Daman and Diu"]["districtData"];
            }else if(statecode == "LD"){
                $('#stateLabel').text(stateLabel);
                statename = data["Lakshadweep"]["districtData"];
            }else if(statecode == "SK"){
                $('#stateLabel').text(stateLabel);
                statename = data["Sikkim"]["districtData"];
                
            }
            // console.log(data); 
            // console.log(statename); 
            // state total delcare 
            var totalactive = 0;
            var totalconfirmed= 0;
            var totaldeaths = 0;
            var totalrecoverd = 0;
            $.each(statename, function(i, d) {
             totalactive += d.active;
             totalconfirmed += d.confirmed;
             totaldeaths += d.deceased;
             totalrecoverd += d.recovered;
                // render table state
                var parent = document.querySelector('#distparent');
                var row = document.createElement('tr');
                row.innerHTML = `
                            <td>${i}</td>
                            <td>${d.confirmed}</td>
                            <td>${d.recovered}</td>
                            <td>${d.active}</td>
                            <td>${d.deceased}</td>
                              </tr>
                `;
                parent.append(row);

            }); 
         // state total count
        // console.log(totalactive);
        // console.log(totalconfirmed);
        // console.log(totaldeaths);
        // console.log(totalrecoverd); 
        document.querySelector('#stateActive').textContent = totalactive;
        document.querySelector('#stateConfirmed').textContent = totalconfirmed;
        document.querySelector('#stateDeath').textContent = totaldeaths;
        document.querySelector('#stateRecovered').textContent = totalrecoverd; 
        
             var a= parseInt(totalactive);
            var c= parseInt(totalconfirmed);
            var d= parseInt(totaldeaths);
            var r= parseInt(totalrecoverd);
            var chartTotal = [a,c,d,r];
             console.log(chartTotal);
             //    chart data
           var data = {
            labels: ["Active", "Confirmed", "Deaths", "Recovered"],
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
          
          Chart.Bar('chart_1', {
            options: option,
            data: data
          });        
            $('#coronaDistTable').DataTable({
                responsive: true,
                colReorder: true,
                scrollY: '50vh',
                scrollCollapse: true,
                paging: false,
                "ordering": false,
                "searching": false,
                "bInfo" : false,
                columnDefs: [{
                    width: '20%',
                    targets: [0,1,2,3,4,5]
                }],
                fixedColumns: true,
                fixedHeader: true
            });
        });
        $('#coronaDistTable tbody').empty();
        // disable warning datatables
        $.fn.dataTable.ext.errMode = 'none';
}

// Clear modal
const modal = document.querySelector('.districtModal');
window.addEventListener('click', clearModal);
$('.close').click(function(){
    $('.districtModal').hide();
});
function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

