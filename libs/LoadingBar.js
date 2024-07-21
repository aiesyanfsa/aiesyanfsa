class LoadingBar {
	constructor({ bgColor = '#000', opacity = 0.7, barBgColor = '#aaa', barColor = '#22a', barWidth = '50%', barMinWidth = '250px', barHeight = '15px' } = {}) {
		this.domElement = document.createElement("div");
		this._setStyle(this.domElement, {
			position: 'fixed',
			top: '0',
			left: '0',
			width: '100%',
			height: '100%',
			background: bgColor,
			opacity: opacity,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			zIndex: '1111',
		});

		const barBase = document.createElement("div");
		this._setStyle(barBase, {
			background: barBgColor,
			width: barWidth,
			minWidth: barMinWidth,
			borderRadius: '10px',
			height: barHeight,
		});
		this.domElement.appendChild(barBase);

		const bar = document.createElement("div");
		this._setStyle(bar, {
			background: barColor,
			borderRadius: '10px',
			height: '100%',
			width: '0',
		});
		barBase.appendChild(bar);
		this.progressBar = bar;

		document.body.appendChild(this.domElement);
	}

	_setStyle(element, styles) {
		for (const property in styles) {
			element.style[property] = styles[property];
		}
	}

	set progress(delta) {
		const percent = delta * 100;
		this.progressBar.style.width = `${percent}%`;
	}

	set visible(value) {
		this.domElement.style.display = value ? 'flex' : 'none';
	}
}

export { LoadingBar };
