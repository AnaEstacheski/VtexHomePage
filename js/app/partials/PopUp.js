export default class PopUp {
	constructor() {
		this.selectors();
		this.events();
		this.getCookies();
	}

	selectors() {
		this.button = $(".pop-up__button");
		this.closePopUpButton = $(".pop-up__button-close");
		this.popUp = $(".pop-up");
		this.sectionPopUp = $(".pop-up-section");
		this.inputName = $(".pop-up__input-nome");
		this.inputEmail = $("pop-up__input-email");
	}

	events() {
		this.button.click(this.getInputValue.bind(this));
		this.closePopUpButton.click(this.closeOfButton.bind(this));
		this.sectionPopUp.click(this.closePopUp.bind(this));
		this.expires = new Date(Date.now() + 604800 * 1000).toUTCString();
	}

	getCookies() {
		if (document.cookie.includes("closePopup")) {
			this.sectionPopUp.addClass("is-close");
		} else {
			document.cookie =
				"closePopup=close; expires=" +
				(this.expires + 604800) +
				";path=/;";
			this.sectionPopUp.addClass("is-open");
		}
	}

	getInputValue(e) {
		e.preventDefault();

		let data = {
			name: document.querySelector(".pop-up__input-nome").value,
			email: document.querySelector(".pop-up__input-email").value,
		};

		this.validator(data);

		const resetInputName = document.querySelector(".pop-up__input-nome");
		const resetInputEmail = document.querySelector(".pop-up__input-email");
		resetInputName.value = "";
		resetInputEmail.value = "";
	}

	closePopUp(event) {
		event.preventDefault();
		const targetButton = $(event.target);
		targetButton.removeClass("is-open");
	}

	closeOfButton() {
		this.sectionPopUp.removeClass("is-open");
	}

	async validator(data) {
		var re = /\S+@\S+\.\S+/;
		var validaEmail = await this.validaEmailRepetido(data.email);
		const errorForm = document.getElementById("message-error-all");

		if (data.name == "" && data.email == "") {
			errorForm.innerHTML = `<span> Preencha os campos faltantes! </span>`;
			this.sleep(5000).then(() => {
				errorForm.innerHTML = ``;
			});
		} else if (data.name.length < 3) {
			const errorFormName = document.getElementById("message-error-nome");
			errorFormName.innerHTML = `<span> Insira um nome válido </span>`;
			this.sleep(5000).then(() => {
				errorFormName.innerHTML = ``;
			});
		} else if (!re.test(data.email)) {
			const errorFormEmail = document.getElementById(
				"message-error-email"
			);
			errorFormEmail.innerHTML = `<span> Insira um email válido </span>`;
			this.sleep(5000).then(() => {
				errorFormEmail.innerHTML = ``;
			});
		} else if (!validaEmail) {
			const sucessForm = document.getElementById("message-sucess-all");
			sucessForm.innerHTML = `
			<span> Email cadastrado com sucesso <i class="sprite sprite-check-icon"></i> </span>`;
			this.sleep(5000).then(() => {
				sucessForm.innerHTML = ``;
			});
			this.cadastraCliente(data.name, data.email);
		} else {
			errorForm.innerHTML = `<span> Email já cadastrado! </span>`;
			this.sleep(5000).then(() => {
				errorForm.innerHTML = ``;
			});
		}
	}

	sleep(time) {
		return new Promise((resolve) => setTimeout(resolve, time));
	}

	async validaEmailRepetido(email) {
		const api = await fetch(
			`/api/dataentities/MA/search?_fields=email&_where=email=${email}`,
			{}
		);
		let emailRepetido = false;
		const responseContent = await api.json();

		if(responseContent.length > 0) {
			emailRepetido = true;
		}
		return emailRepetido;
	}

	cadastraCliente(Nome, Email) {
		let data = {
			name: Nome,
			email: Email,
		};
		fetch("/api/dataentities/MA/documents", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(function (response) {
			console.log("sucess, fez o post", response);
		});
	}
}