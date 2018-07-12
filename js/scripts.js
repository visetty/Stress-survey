var surveySuggestions = function(stress-symptoms, health-symptoms, coping-methods1) {
  return stressValue + healthIssuesValue + copingValue;
}
var result = stressValue + healthIssuesValue + copingValue;






$(document).ready(function) {
  $("form#stress-survey").submit(function(event) {
   event.preventDefault();
   $("#stressRelief").show();
    $("input:checkbox[name=stress-signs]:checked").each(function(){
      var stressValue = parseInt($(this).val());
    $("input:checkbox[name=health-issues]:checked").each(function(){
      var healthIssuesValue = parseInt($(this).val());
    $("input:checkbox[name=coping-methods]:checked").each(function(){
      var copingValue = parseInt($(this).val());
        if (result <= 3) {
          $("#stressRelief").append("Take rest");
        } else if (result > 3) && (result <= 10) {
          $("#stressRelief").append("do yoga");
        } else if (result > 10) && (result <= 15) {
          $("#stressRelief").append("Take a break");
        } else {
          $("#stressRelief").append("Go to a Doctor");
        }
        return result();

});
