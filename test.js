const workerBlob = new Blob(['']);
 const workerUrl = URL.createObjectURL(workerBlob);
 const worker = new Worker(workerUrl);
console.log('Worker!');
