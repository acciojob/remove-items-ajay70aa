//your JS code here. If required.
const removeBtn = document.querySelector('input[type="button"]')

function handleClick(){
	const select = document.getElementById('colorSelect')
	select.remove(select.selectedIndex)
}
removeBtn.addEventListener('click', handleClick)