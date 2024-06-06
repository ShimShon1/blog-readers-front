import comodoUrl from "../assets/comodo.jpg";

export default function About() {
  return (
    <div className="relative m-auto   grid  gap-1 border-t-[1px] bg-violet-950 p-3 pb-2 shadow-lg   lg:w-11/12 lg:gap-3 lg:p-7  lg:pt-4 lg:shadow-2xl">
      <div className="  lg:text-lg lg:leading-8 xl:grid xl:grid-cols-2 xl:gap-10">
        <div className="max-w-[40ch] leading-7 lg:max-w-[70ch]">
          <h1 className="lg text-2xl lg:text-3xl">
            About This Blog:
          </h1>
          <p>
            There's absoluetly nothing about it, this is just an
            excuse to add something to the navigation bar.
          </p>
          <p>
            this is just an excuse to add something to the navigation
            bar, There's absoluetly nothing about it.
          </p>
          <h2 className="mt-4 text-xl lg:mt-8 lg:text-2xl">
            Take Some Lorem Ipsum:
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, sed blanditiis? Modi error magni, quo
            molestiae inventore quibusdam consequatur sunt, accusamus
            suscipit assumenda quasi explicabo earum vel dolorum harum
            sit. Obcaecati asperiores ad cumque. Asperiores excepturi
            beatae molestias laboriosam. Repellat, cupiditate iusto
            labore omnis nulla rerum ullam natus qui ratione incidunt
            pariatur animi dolorem cum eius quos. Dolor, optio
            consequatur. Blanditiis, quibusdam commodi. Laboriosam
            nesciunt id quam itaque sed? Culpa nostrum quo quibusdam
            sit totam? Reprehenderit obcaecati nemo dolores odio cum
            corrupti quos amet magni consequuntur nisi, ea provident
            minima? Libero praesentium minima laborum neque
            perferendis molestias itaque modi. Exercitationem,
            possimus optio, iure error, ipsum sapiente enim aspernatur
            ea amet temporibus placeat perspiciatis maiores omnis
            corporis natus suscipit aut numquam.
          </p>
        </div>
        <div>
          <h2 className="mt-6 text-xl lg:text-2xl xl:mt-0">
            Here's a Komodo Dragon:
          </h2>
          <div className="relative mt-2 w-full md:w-3/4 lg:mt-4">
            <div className="position absolute right-0 top-0 h-full  w-full bg-violet-950 bg-opacity-40 hover:bg-opacity-0"></div>
            <img
              className=" min-h-60 w-full rounded-xl"
              src={comodoUrl}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
