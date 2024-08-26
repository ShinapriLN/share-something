import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react"

export default function MyCard({ title, name, content, date }) {
  function formatDate(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // เดือนเริ่มนับจาก 0 เลยต้อง +1
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }
  return (
    <Card className="w-[300px] bg-transparent min-h-[150px] h-fit m-2">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md font-bold">{title}</p>
          <p className="text-small text-gray-300">{name}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{content}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <p className="text-small italic text-gray-300">{formatDate(date)}</p>
      </CardFooter>
    </Card>
  )
}