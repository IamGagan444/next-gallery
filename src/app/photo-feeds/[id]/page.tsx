import Image from "next/image";
import photography, { photos } from "../wonders";

export default function PhotoById({ params:{id} }:{params:{id:string}}) {
  const photo:photos=photography.find((item)=>item.id==id)!;
console.log(id)
  return (
    <div className="bg-white mx-auto my-4 w-fit text-slate-800">
      <Image src={photo.src} alt={photo.name}/> 

<div className="my-2">
    <p> name: {photo.name} </p>
    <p> location {photo.location} </p>
    <p> photographer  {photo.photographer} </p>
    
</div>
    </div>
  );
}
