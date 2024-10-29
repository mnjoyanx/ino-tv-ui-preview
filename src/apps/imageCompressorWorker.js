self.onmessage = async function (e) {
  const { imageUrl, quality } = e.data;
  const targetWidth = 362;
  const targetHeight = 408;

  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const bitmap = await createImageBitmap(blob);

    const canvas = new OffscreenCanvas(targetWidth, targetHeight);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(bitmap, 0, 0, targetWidth, targetHeight);

    const compressedBlob = await canvas.convertToBlob({
      type: "image/jpeg",
      quality,
    });
    self.postMessage(compressedBlob);
  } catch (error) {
    self.postMessage({ error });
  }
};
