import Posts from "./components/Posts"

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        <span className="font-bold">PhasmoBlog</span>
        <br />
        <br />
        <span>by David Gonzalez</span>
      </p>
      <Posts />
      
    </main>
  )
}
