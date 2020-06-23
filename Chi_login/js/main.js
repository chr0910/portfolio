console.clear()

const signupTitle = document.getElementById("signup-title")
const loginTitle = document.getElementById("login-title")

signupTitle.addEventListener('click', (e) => {
    let parent = e.target.parentNode
    Array.from(e.target.parentNode.classList).find((element) => {
        if(element !== "slide") {
            parent.classList.add('slide')
        } else {
            loginTitle.parentNode.parentNode.classList.add('slide')
            parent.classList.remove('slide')
        }
    })
})

loginTitle.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide") {
			parent.classList.add('slide')
		} else {
			signupTitle.parentNode.classList.add('slide')
			parent.classList.remove('slide')
		}
	})
})
