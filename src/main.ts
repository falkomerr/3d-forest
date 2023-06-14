document.addEventListener('mousemove', (event:MouseEvent) => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(event.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(event.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})
