import { StaticImageData } from "next/image"
import myphoto from "./photos/f1.png"
import myphoto1 from "./photos/fr2.png"
import myphoto2 from "./photos/fr3.png"
import myphoto3 from "./photos/fr4.png"
import myphoto4 from "./photos/fr5.png"
import myphoto5 from "./photos/fr7.png"

export interface photos {
    src: StaticImageData
    name: string
    location: string
    photographer: string
    id: string

}

const photography: photos[] = [
    {
        src: myphoto,
        name: "aldio bravis"
        , location: "smuai, china"
        , photographer: "dilsio craniod",
        id: "10rf0"
    },
    {
        src: myphoto1,
        name: "mustkis"
        , location: "moscow, rusia"
        , photographer: "carlos simon",
        id: "105df0"
    },
    {
        src: myphoto2,
        name: "beldio raikero"
        , location: "atlanta, usa"
        , photographer: "dreko torman",
        id: "140rf0"
    },
    {
        src: myphoto3,
        name: "benxin triotora"
        , location: "kabul, india"
        , photographer: "psycho sakra",
        id: "144rf0"
    },
    {
        src: myphoto4,
        name: "tride e rek"
        , location: "phoenix, usa"
        , photographer: "dilsio craniod",
        id: "189rf0"
    },
    {
        src: myphoto5,
        name: " houstan sdok"
        , location: "phoenix, usa"
        , photographer: "dilsio craniod",
        id: "999rf0"
    },
]
export default photography;
