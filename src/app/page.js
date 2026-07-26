import Image from "next/image"
import Data from "@/components/Data/Data"

export default function home() {
  return (
    <>
      <Data />
      <Image src="/banner.jpg" width={800} height={540} alt="Banner"/>
    </>
  )
}