import { iceCreamService } from "./instance";

export async function IceCreams() {
  const iceCreams = await iceCreamService.getAll();

  return (
    !iceCreams.length && <p>No ice creams found. Please add an ice cream.</p>
  );
}