import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-[#171717] min-h-screen pt-10">
        <div className="max-w-7xl mx-auto bg-[#1f1f1f] border-[#2e2e2e] border rounded-md">
          <h2 className="text-3xl text-[#FD9739] font-thin p-6 pb-3">
            Welcome at Pc Builder
          </h2>
          <p className="text-lg text-[#888888] p-6 pt-0">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
            delectus odit quia vel eaque provident voluptatem corporis
            reprehenderit est, quidem aliquid excepturi possimus optio ex, iste
            aut saepe fuga ipsum! Dicta esse assumenda facilis odio atque,
            maiores dolore nemo laudantium autem, voluptates explicabo quae
            aliquam quia reprehenderit rerum modi alias perferendis magni omnis
            molestiae numquam ducimus adipisci voluptas enim. Fugiat ipsam ut
            qui officia quam aut architecto nam, assumenda exercitationem sint
            deserunt soluta veniam eum expedita corporis illum voluptate illo,
            ex consectetur dignissimos sapiente unde repellendus saepe. Beatae
            quisquam, nam distinctio impedit provident alias totam autem aperiam
            eaque illo fugit.
          </p>
        </div>
      </section>
    </>
  );
}
