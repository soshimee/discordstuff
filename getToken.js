function getToken() {
	function getLocalStoragePropertyDescriptor() {
		const iframe = document.createElement('iframe');
		document.head.append(iframe);
		const pd = Object.getOwnPropertyDescriptor(iframe.contentWindow, 'localStorage');
		iframe.remove();
		return pd;
	}

	Object.defineProperty(window, 'localStorage', getLocalStoragePropertyDescriptor());

	location.reload();
	stop();

	var token = localStorage.token.slice(1, localStorage.token.length-1);

	return token;
}
