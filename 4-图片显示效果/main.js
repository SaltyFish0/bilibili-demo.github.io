// 初始化
window.onload = init
function init(){
	// 获取所有item
	let items = document.querySelectorAll('.item')
	items.forEach((item) =>{
		// 给每个item属性添加鼠标移动事件
		item.addEventListener('mousemove', e=>{
			let mask = item.querySelector('.mask')
			// 当鼠标在item上移动时,改变mask类的样式
			mask.style.transform = 'translate(' + e.offsetX + 'px,'+e.offsetY +'px)'
		})
	})
}