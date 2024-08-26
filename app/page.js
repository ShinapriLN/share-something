'use client'
import { useState, useEffect } from "react";
import MyCard from "./components/card"
import { ScrollShadow } from "@nextui-org/react";
import MyButton from "./components/mybtn";

const getNotes = async () => {
  const note = await fetch("/api")
  if (!note.ok) {
    throw new Error("Fetch fail")
  }

  return note.json()
}

export default function Home() {
  const [notes, setNotes] = useState([])
  async function initNote() {
    const newNotes = await getNotes()
    setNotes(newNotes)
  }
  useEffect(() => {
    initNote()
  }, [])


  return (
    <div id="bg" className="bg-gradient-to-br from-[#DA38CD] to-[#6176E3] w-screen h-fit min-h-screen flex flex-col items-center">
      <div className="text-lg font-bold text-white p-5 sm:text-3xl">
        Let's Share Your Thoughs
      </div>
      <div className="text-3xl font-bold text-white m-2">
        <MyButton reload={initNote}>Click here</MyButton>
      </div>
      <div>
        <ScrollShadow hideScrollBar className=" bg-transparent sm:w-[400px] md:w-[700px] lg:w-[950px] h-[500px] rounded-t-md flex flex-wrap justify-center">
          {
            notes.map((note, idx) => (
              <MyCard key={idx} title={note.title} name={note.name} content={note.content} date={note.created_at} />
            ))
          }
        </ScrollShadow>
      </div>
    </div>
  );
}
