const record = document.querySelector('.record');
const stop = document.querySelector('.stop');
const form = new FormData();


if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
	console.log('getUserMedia supported.');
	navigator.mediaDevices.getUserMedia ({
		audio: true
	}).then(function(stream) {
		const mediaRecorder = new MediaRecorder(stream);

		record.onclick = function() {
			mediaRecorder.start();
			console.log(mediaRecorder.state);
			console.log("recorder started");
			record.style.background = "red";
			record.style.color = "black";
		}

		let chunks = [];

		mediaRecorder.ondataavailable = function(e) {
			chunks.push(e.data);
		}

		stop.onclick = function() {
			mediaRecorder.stop();
			console.log(mediaRecorder.state);
			console.log("recorder stopped");
			record.style.background = "";
			record.style.color = "";
		}

		mediaRecorder.onstop = function(e) {
			console.log("recorder stopped");

			const blob = new Blob(chunks, { 'type' : 'audio/wav; codecs=opus' });
			chunks = [];

			form.append('recording', blob);
			$.ajax({
				type: 'POST',
				url: 'http://127.0.0.1:5000/say',
				data: form,
				cache: false,
				processData: false,
				contentType: false
			}).done(function(data) {
				console.log(data)
			});
		}
	})
	.catch(function(err) {
		console.log('The following getUserMedia error occurred: ' + err);
	});
} else {
	console.log('getUserMedia not supported on your browser!');
}