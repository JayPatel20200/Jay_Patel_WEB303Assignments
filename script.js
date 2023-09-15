/*
	WEB 303 Assignment 1 - jQuery
	{Jay Patel (w0823610)}
*/

$(document).ready(function(){
	const $yearlySalary = $('#yearly-salary');
	const $percent = $('#percent');
	const $amount = $('#amount');
	const changeEventFunction = () => {
		const salary = $yearlySalary.val();
		const percent = $percent.val();
		const amount = salary * percent / 100;
		const totalAmount = amount.toFixed(2)
		$amount.text("$" + totalAmount)
	}
	$yearlySalary.on("change",changeEventFunction)
	$percent.on("change",changeEventFunction)
})