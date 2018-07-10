var surveySuggestions = function(stress-symptoms, health-symptoms) {
  return stressValue + healthIssuesValue;
}
var result = stressValue + healthIssuesValue;






$(document).ready(function) {
  $("form#stress-survey").submit(function(event) {
   event.preventDefault();
   $("#coping-methods").show();
    $("input:checkbox[name=stress-signs]:checked").each(function(){
      var stressValue = $(this).val();
    $("input:checkbox[name=health-issues]:checked").each(function(){
      var healthIssuesValue = $(this).val();
        if (surveySuggestions <= 3) {
          $("#coping-methods").append("Take rest");
        } else if (surveySuggestions > 3) && (surveySuggestions <= 10) {
          $("#coping-methods").append("do yoga");
        } else if (surveySuggestions > 10) && (surveySuggestions <= 15) {
          $("#coping-methods").append("Take a break");
        } else {
          $("#coping-methods").append("Go to a Doctor");
        }


}
