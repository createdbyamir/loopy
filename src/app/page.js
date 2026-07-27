import Image from "next/image"


export default function home() {
  return (
    <>
      <Image src="/banner.jpg" width={800} height={540} alt="Banner"/>
    </>
  )
}