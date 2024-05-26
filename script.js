
//your JS code here. If required.
document.getElementById('subm').addEventListener('click',()=>{
	let a = document.getElementById('name1').value
	let b = document.getElementById('name2').value
	let c = document.getElementById('name3').value
	let d = document.getElementById('name4').value

	alert(`First Name:${a}   Last Name:${b}   Phone Number:${c}   Email ID:${d}`)
})