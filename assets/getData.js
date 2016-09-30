$(document).ready(function() {
  $('#mainTable').DataTable({
    ajax: {
      "url": "https://streams-of-ga.herokuapp.com:3015/",
      "dataSrc": "value.timeSeries"
    },
    columns: [
      { data: "sourceInfo.siteName" },
      { data: "sourceInfo.geoLocation.geogLocation.latitude" },
      { data: "sourceInfo.geoLocation.geogLocation.longitude" },
      { data: "variable.variableName" },
      { data: "values[0].value[0].value" },
      { data: "values[0].value[0].dateTime" }
    ],
    columnDefs: [
      {
        render: function(data, type, row) {
          return data.toFixed(4);
        },
        targets: [1, 2] 
      },
      {
       render: function(data, type, row) {
          var sampled = new Date(data);
          return sampled;
        },
        targets: [5] 
      }]
  });
});