// Save pickup & drop address
function saveAddresses() {
  const pickup = document.getElementById("pickupAddress").value;
  const drop = document.getElementById("dropAddress").value;

  localStorage.setItem("pickupAddress", pickup);
  localStorage.setItem("dropAddress", drop);
}

// Show address on summary page
document.addEventListener("DOMContentLoaded", function () {
  const pickupText = document.getElementById("pickupText");
  const dropText = document.getElementById("dropText");

  if (pickupText) {
    pickupText.innerText =
      localStorage.getItem("pickupAddress") || "Not provided";
  }

  if (dropText) {
    dropText.innerText =
      localStorage.getItem("dropAddress") || "Not provided";
  }
});
function ChkNotNull(){
	var name=document.getElementById("name").value;
	var mono=document.getElementById("mono").value;
	if(name==""||mono==""){
		alert('Fill the Feilds');
	}
	if(mono.length>10||mono.length<10){
		alert('Mobile number must be 10 digits');
	}
	else{
		window.location.href = "payment.html";
	}
}