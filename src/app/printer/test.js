/* global BTPrinter */

function onDeviceReady() {
	// Cordova has been loaded. Perform any initialization that requires Cordova here.
	console.log('onDeviceReady()');

	// Handle the Cordova pause and resume events
	document.addEventListener('pause', onPause.bind(this), false);
	document.addEventListener('resume', onResume.bind(this), false);

	/* Initialize plugin */
	if (typeof (BTPrinter) === 'undefined') {
		// Error: plugin not installed
		console.error('Error: BTPrinter plugin not detected');
		window.plugins.toast.showLongBottom('BTPrinter plugin not detected');
	} else {
		// Bind action buttons
		$('#list').click(function () {
			BTPrinter.list(function (data) {
				console.log('list: success');
				window.plugins.toast.showLongBottom('list: success');
				$('#btpPrinter').empty().prop('disabled', false);
				$.each(data, function (idx, value) {
					/* Add devices (array contains device name every 3 array elements) */
					if (idx % 3 === 0) {
						$('#btpPrinter').append('<option value="' + idx + '" data-name="' + data[idx] + '">' + data[idx] + ' (' + data[idx + 1] + ')</option>');
					}
				});
			}, function (err) {
				console.error('list: ' + err);
				window.plugins.toast.showLongBottom('list: ' + err);
				$('#btpPrinter').empty().prop('disabled', true);
			});
		});
		$('#status').click(function () {
			BTPrinter.status(function (data) {
				console.log('status: ' + data);
				window.plugins.toast.showLongBottom('status: ' + data);
			}, function (err) {
				console.error('status: ' + err);
				window.plugins.toast.showLongBottom('status: ' + err);
			});
		});
		$('#connected').click(function () {
			BTPrinter.connected(function (data) {
				console.log('connected: ' + data);
				window.plugins.toast.showLongBottom('connected: ' + data);
			}, function (err) {
				console.error('connected:' + err);
				window.plugins.toast.showLongBottom('connected: ' + err);
			});
		});
		$('#connect').click(function () {
			$('#connect').prop('disabled', true);
			window.setTimeout(function () {
				/* Use timeout to properly update GUI first */
				var strPrinter = $('#btpPrinter option:selected').attr('data-name');
				BTPrinter.connect(function (data) {
					console.log('connect: ' + data);
					window.plugins.toast.showLongBottom('connect: ' + data);
					$('#connect').prop('disabled', false);
				}, function (err) {
					console.error('connect: ' + err);
					window.plugins.toast.showLongBottom('connect: ' + err);
					$('#connect').prop('disabled', false);
				}, strPrinter);
			}, 100);
		});
		$('#disconnect').click(function () {
			BTPrinter.disconnect(function (data) {
				console.log('disconnect: ' + data);
				window.plugins.toast.showLongBottom('disconnect: ' + data);
			}, function (err) {
				console.error('disconnect: ' + err);
				window.plugins.toast.showLongBottom('disconnect: ' + err);
			});
		});
		$('#printQRCode').click(function () {
			var data = $('#txtQRData').val();
			var align = $('#optAlign').val();
			var model = $('#optQRModel').val();
			var size = $('#optQRSize').val();
			var eclevel = $('#optQREclevel').val();
			BTPrinter.printQRCode(function (data) {
				console.log('printQRCode:' + data);
				window.plugins.toast.showLongBottom('printQRCode:' + data);
			}, function (err) {
				console.error('printQRCode:' + err);
				window.plugins.toast.showLongBottom('printQRCode:' + err);
			}, data, align, model, size, eclevel);
			$('#lineFeed').click();
		});
		$('#printBarcode').click(function () {
			var system = $('#optBCSystem').val();
			var data = $('#txtBarcode').val();
			var align = $('#optAlign').val();
			var position = $('#optBCPosition').val();
			var font = $('#optBCFont').val();
			var height = $('#optBCHeight').val();
			BTPrinter.printBarcode(function (data) {
				console.log();
				window.plugins.toast.showLongBottom('printBarcode: ' + data);
			}, function (err) {
				console.error(err);
				window.plugins.toast.showLongBottom('printBarcode: ' + err);
			}, system, data, align, position, font, height);
			$('#lineFeed').click();
		});
		$('#setEncoding').click(function () {
			var strEncoding = $('#txtEncoding').val();
			BTPrinter.setEncoding(function (data) {
				console.log('setEncoding: ' + data);
				window.plugins.toast.showLongBottom('setEncoding: ' + data);
			}, function (err) {
				console.error('setEncoding: ' + err);
				window.plugins.toast.showLongBottom('setEncoding: ' + err);
			}, strEncoding);
		});
		$('#printText').click(function () {
			var strText = $('#txtSample').val() + "\n";
			BTPrinter.printText(function (data) {
				console.log('printText: ' + data);
				window.plugins.toast.showLongBottom('printText: ' + data);
			}, function (err) {
				console.error('printText: ' + err);
				window.plugins.toast.showLongBottom('printText: ' + err);
			}, strText);
		});
		$('#printTextSizeAlign').click(function () {
			var strText = $('#txtSample').val();
			var strSize = $('#optSize option:selected').val();
			var strAlign = $('#optAlign option:selected').val();
			BTPrinter.printTextSizeAlign(function (data) {
				console.log('printTextSizeAlign: ' + data);
				window.plugins.toast.showLongBottom('printTextSizeAlign: ' + data);
			}, function (err) {
				console.error('printTextSizeAlign: ' + err);
				window.plugins.toast.showLongBottom('printTextSizeAlign: ' + err);
			}, strText, strSize, strAlign);
		});
		$('#printTitle').click(function () {
			var strText = $('#txtSample').val();
			var strSize = $('#optSize option:selected').val();
			var strAlign = $('#optAlign option:selected').val();
			BTPrinter.printTitle(function (data) {
				console.log('printTitle: ' + data);
				window.plugins.toast.showLongBottom('printTitle: ' + data);
			}, function (err) {
				console.error('printTitle: ' + err);
				window.plugins.toast.showLongBottom('printTitle: ' + err);
			}, strText, strSize, strAlign);
		});
		$('#printPOSCommand').click(function () {
			var printPOS = $('#txtPOS').val();
			BTPrinter.printPOSCommand(function (data) {
				console.log('printPOSCommand: ' + data);
				window.plugins.toast.showLongBottom('printPOSCommand: ' + data);
			}, function (err) {
				console.error('printPOSCommand: ' + err);
				window.plugins.toast.showLongBottom('printPOSCommand: ' + err);
			}, printPOS);
		});
		$('#printBase64').click(function () {
			var printBase64 = $('#txtBase64').val();
			var strAlign = $('#optAlign option:selected').val();
			BTPrinter.printBase64(function (data) {
				console.log('printBase64: ' + data);
				window.plugins.toast.showLongBottom('printBase64: ' + data);
			}, function (err) {
				console.error('printBase64: ' + err);
				window.plugins.toast.showLongBottom('printBase64: ' + err);
			}, printBase64, strAlign);
			// Print extras
			$('#txtSample').val('>>> Sent POS:FEED+BEEP');
			$('#printText').click();
			$('#lineFeed').click();
			$('#beepX3').click();
		});
		$('#reset').click(function () {
			// Clear data in buffer and reset modes
			var bytes = '1B40'; /* Initialize printer: https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=192 */
			$('#txtPOS').val(bytes);
			$('#printPOSCommand').click();
			// Reset GUI
			$('#txtSample').val("» BTPrinter Plugin Demo\n» ©2020 Andrés Zsögön");
			$('#optAlign').val(0);
			$('#optSize').val('00');
			$('#invertedIcon').hide();
		});
		$('#lineFeed').click(function () {
			// Print line feed
			var bytes = '0A';
			$('#txtPOS').val(bytes);
			$('#printPOSCommand').click();
		});
		$('#fontDemo').click(function () {
			var TXT_UNDERL_OFF = '1b2d00'; // bluetooth printer underline OFF
			var TXT_UNDERL_ON = '1b2d01'; // bluetooth printer underline font 1-dot ON
			var TXT_UNDERL2_ON = '1b2d02'; // bluetooth printer underline font 2-dot ON
			var TXT_BOLD_OFF = '1b4500'; // bluetooth printer bold font OFF
			var TXT_BOLD_ON = '1b4501'; // bluetooth printer bold font ON
			var TXT_FONT_A = '1b4d48'; // bluetooth printer font type A
			var TXT_FONT_B = '1b4d01'; // bluetooth printer font type B

			$('#reset').click();
			$('#txtEncoding').val('ISO-8859-1');

			/* Print font types demo */
			$('#txtSample').val('>>> FONT DEMO');
			$('#printText').click();

			$('#txtPOS').val(TXT_UNDERL_ON);
			$('#printPOSCommand').click();
			$('#txtSample').val('Underline font 1-dot');
			$('#printText').click();
			$('#reset').click();

			$('#txtPOS').val(TXT_UNDERL2_ON);
			$('#printPOSCommand').click();
			$('#printPOSCommand').click();
			$('#txtSample').val('Underline font 2-dot');
			$('#printText').click();
			$('#reset').click();

			$('#txtPOS').val(TXT_BOLD_ON);
			$('#printPOSCommand').click();
			$('#txtSample').val('Bold font ON');
			$('#printText').click();
			$('#reset').click();

			$('#txtPOS').val(TXT_FONT_A);
			$('#printPOSCommand').click();
			$('#txtSample').val('Font type A');
			$('#printText').click();
			$('#reset').click();

			$('#txtPOS').val(TXT_FONT_B);
			$('#printPOSCommand').click();
			$('#txtSample').val('Font type B');
			$('#printText').click();

			$('#reset').click();
			$('#txtSample').val('>>> Sent POS:FEED+BEEP+RESET');
			$('#printText').click();

			$('#lineFeed').click();
			$('#beepX3').click();
			$('#reset').click();
		});
		$('#sizeDemo').click(function () {
			$('#reset').click();
			$('#txtEncoding').val('ISO-8859-1');

			/* Print font sizes demo */
			$('#txtSample').val('>>> SIZE DEMO');
			$('#printText').click();

			$('#optSize').val('00');
			$('#txtSample').val('00 Normal Size');
			$('#printTextSizeAlign').click();

			$('#optSize').val('01');
			$('#txtSample').val('01 Reduced Size');
			$('#printTextSizeAlign').click();

			$('#optSize').val('10');
			$('#txtSample').val('10 Double Height');
			$('#printTextSizeAlign').click();

			$('#optSize').val('20');
			$('#txtSample').val('20 Double Width');
			$('#printTextSizeAlign').click();

			$('#optSize').val('30');
			$('#txtSample').val('30 Quad Area');
			$('#printTextSizeAlign').click();

			$('#reset').click();
			$('#txtSample').val('>>> Sent POS:FEED+BEEP+RESET');
			$('#printText').click();

			$('#lineFeed').click();
			$('#beepX3').click();
			$('#reset').click();
		});
		$('#beepX1').click(function () {
			// Beeps 1 time for 9*50ms
			var bytes = '1B420109';
			$('#txtPOS').val(bytes);
			$('#printPOSCommand').click();
		});
		$('#beepX3').click(function () {
			// Beeps 3 times for 9*50ms each time
			var bytes = '1B420309';
			$('#txtPOS').val(bytes);
			$('#printPOSCommand').click();
		});
		$('#printGreek').click(function () {
			// Greek sample text
			$('#txtEncoding').val('ISO-8859-7');
			$('#txtSample').val('>>> Set Encoding: ISO-8859-7');
			$('#setEncoding').click();
			$('#printText').click(); // print performed action

//				$('#txtPOS').val('1B740F'); /* (ESC t in HEX => 1B74) + (ISO-8859-7 => EPSON page 15 => 0F in HEX) */
//				$('#txtSample').val('>>> Set POS: 1B740F');
//				$('#printText').click(); // print performed action
//				$('#txtSample').val('    0F=HEX for EPSON page #15');
//				$('#printText').click(); // print performed action
//				$('#printPOSCommand').click();

			/* Greek character tables modes test with ISO-8859-7 encoding */
			testCP(11);
			testCP(14);
			testCP(15);
			testCP(38);
			testCP(47);

			$('#lineFeed').click();
			$('#beepX3').click();

		});
		$('#enableInverted').click(function () {
			// Enable inverted color
			var bytes = '1D4201';
			$('#txtPOS').val(bytes);
			$('#printPOSCommand').click();
			$('#invertedIcon').fadeIn();
			$('#txtSample').val('< Inverted Mode ON >');
			$('#optAlign').val(1);
			$('#printTitle').click();
			$('#optAlign').val(0);
			$('#lineFeed').click();
			$('#beepX1').click();
		});
		$('#disableInverted').click(function () {
			// Disable inverted color
			var bytes = '1D4200';
			$('#txtPOS').val(bytes);
			$('#printPOSCommand').click();
			$('#invertedIcon').fadeOut();
			$('#txtSample').val('< Inverted Mode OFF >');
			$('#optAlign').val(1);
			$('#printTitle').click();
			$('#optAlign').val(0);
			$('#lineFeed').click();
			$('#beepX1').click();
		});
		/* Demo app links */
		$('#btnAndreszsogon').click(function () {
			window.open('http://www.andreszsogon.com/cordova-bluetooth-printer-plugin-demo-app/', '_system');
		});
		$('#btnWebsite').click(function () {
			window.open('https://github.com/CesarBalzer/Cordova-Plugin-BTPrinter', '_system');
		});
	}
}

function testCP(table) {
	// Convert table from decimal to hex
	var hexa = table.toString(16);
	hexa = hexa.toUpperCase();
	if (hexa.length == 1) {
		hexa = '0' + hexa;
	}
	// Run POS command ESC + t + table_hex
	var pos = '1B74' + hexa;
	$('#txtPOS').val(pos);
	$('#printPOSCommand').click();
	// Create sample text
	$('#txtSample').val('#' + table + ' POS ' + pos + ' ΑαΒβΓγΔδΕε');
	$('#printText').click();
}
