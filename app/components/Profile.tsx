import Image from "next/image"

export default function Profile(){
    return(
        <section className="w-full mx-auto">
            <Image 
                className="border-4  drop-shadow-xl
                shadow-black rounded-full mx-auto mt-8"
                src="/Phasmoblog/images/book.jpg" // Change this later and post images Check for basePath solution
                width={200}
                height={200}
                alt = "David"
                priority = {true}
            />
        </section>
    )
}