import { iceCreamService } from "@/services/ice-creams/instance";

export default async function Home() {
  const iceCreams = await iceCreamService.getAll();

  return (
    <>
      <h1>Ice creams</h1>
      {
        !iceCreams.length && (
          <p>No Ice-cream found. Please add an ice cream</p>
        )
      }      
    </>  
  );
  
}
