const { invoke } = window.__TAURI__.tauri
const { listen } = window.__TAURI__.event

let greetInputEl
let greetMsgEl

async function greet() {
	// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
	greetMsgEl.textContent = await invoke('greet', { name: greetInputEl.value })
}

window.addEventListener('DOMContentLoaded', () => {
	greetInputEl = document.querySelector('#greet-input')
	greetMsgEl = document.querySelector('#greet-msg')
	document
		.querySelector('#greet-button')
		.addEventListener('click', () => greet())
})

listen('tauri://update-status', (res) => {
	document.body.appendChild(document.createTextNode(JSON.stringify(res)))
})
