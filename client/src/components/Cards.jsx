export default function Cards({ item }) {
  return (
    <>
      <div className="mt-3 my-1 w-11/12 p-1 ">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 mt-5 ml-6 z-0 dark:bg-slate-900 dark:text-white dark:border ">
          <figure>
            <img src={item.image} alt="book" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{item.price}₹</div>
              <div className="cursor-pointer px-2 py-1 rounded-full  border-[2px] hover:bg-pink-500 hover:text-white ">
                Buy-Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
