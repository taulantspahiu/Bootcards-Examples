bootcards.init( {
  offCanvasBackdrop : false,
  offCanvasHideOnMainClick : false,
  enableTabletPortraitMode : false,
  disableRubberBanding : false,
  disableBreakoutSelector : 'a.no-break-out'
});

var financeCharts = function() {
  $("#financesChart").empty();
  Morris.Bar({
    element: 'financesChart',
    data: [
      {year: 2013, sales: 1.1},
      {year: 2014, sales: 0.9},
      {year: 2015, sales: 1.3},
      {year: 2016, sales: 0.7}
    ],
    xkey: 'year',
    ykeys: ['sales'],
    labels: ['Sales (Mil. $)'],
    hideHover: 'auto'
  });
}

var growthCharts = function() {
  $("#growthChart").empty();
  Morris.Bar({
    element: 'growthChart',
    data: [
      {year: 2013, growth: 5},
      {year: 2014, growth: 2},
      {year: 2015, growth: 7},
      {year: 2016, growth: 11}
    ],
    xkey: 'year',
    ykeys: ['growth'],
    labels: ['Percentage (%)'],
    hideHover: 'auto'
  });
}

$(document).ready( function() {
  financeCharts();
  growthCharts();
});
$(window).on('resize', function() {
  financeCharts();
  growthCharts();
});
$(window).on('click', function() {
  financeCharts();
  growthCharts();
});

function comp(nameid) { 
    $('.cards').addClass('hidden');
    $(nameid).removeClass('hidden').addClass('visible');
}