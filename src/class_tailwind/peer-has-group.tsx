export const PeerHasGroup = () => {
  return (
    <section className="flex flex-wrap gap-4">
      <div>
        <h2>Hover al padre</h2>
        <div className="bg-red-100 shadow-sm rounded-xl group size-28">
          <div
            id="1"
            className="group-hover:bg-blue-200 rounded transition-all duration-700 size-10"
          ></div>
        </div>
      </div>

      <div>
        <h2>Hover al hermano</h2>
        <div className="border rounded-xl size-28">
          <div id="1" className="bg-emerald-300 rounded peer size-10"></div>
          <div
            id="2"
            className="bg-yellow-200 rounded scale-0 size-10 peer-hover:scale-100 transition-all duration-700"
          ></div>
        </div>
      </div>

      <div className="[&:has(p):hover]:bg-blue-100 [&:has(p:hover)]:bg-emerald-200 [&:has(p)]:bg-red-100 [&:has(p)]:p-6 rounded-xl transition-all duration-700 size-96">
        <h2 className="mb-2" >Hover al hijo estila el padre</h2>
        <p className="bg-yellow-50 m-4 p-4 rounded-xl" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est voluptates quod natus
          aliquam alias cupiditate, ipsam officia quibusdam accusamus ratione inventore recusandae, nobis
          itaque perferendis molestiae, odio veritatis ut!
        </p>
      </div>
    </section>
  );
};
