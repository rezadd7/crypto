import React from "react";

function Pginations({ page, setPage }) {
  const previousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };
  const nextHandler = () => {
    if (page >= 10) return;
    setPage((page) => page + 1);
  };

  return (
    <div className=" flex justify-center my-20">
      <div className="w-[400px] items-center">
        <button
          className={` border-2 border-cyan-800 bg-cyan-800 rounded-lg px-1 py-0 mr-2 ${
            page === 1 && " disabled:opacity-80"
          }`}
          onClick={previousHandler}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className={`border-2 border-cyan-800 text-cyan-800 rounded-lg px-1 py-0 mr-2 ${
            page === 1 ? "bg-cyan-800 text-white" : null
          }`}
        >
          1
        </button>
        <button
          className={` border-2 border-cyan-800 text-cyan-800 rounded-lg px-1 py-0 mr-2 ${
            page === 2 ? "bg-cyan-800 text-white" : null
          }`}
        >
          2
        </button>
        {page > 2 && page < 9 && (
          <>
            <span className=" mr-2 text-cyan-800">...</span>
            <button
              className={` border-2 border-cyan-800 text-cyan-800 rounded-lg px-1 py-0 mr-2 ${
                page === page ? "bg-cyan-800 text-white" : null
              }`}
            >
              {page}
            </button>
          </>
        )}
        <span className=" mr-2 text-cyan-800">...</span>
        <button
          className={` border-2 border-cyan-800 text-cyan-800 rounded-lg px-1 py-0 mr-2 ${
            page === 9 ? "bg-cyan-800 text-white" : null
          }`}
        >
          9
        </button>
        <button
          className={` border-2 border-cyan-800 text-cyan-800 rounded-lg px-1 py-0 mr-2 ${
            page === 10 ? "bg-cyan-800 text-white" : null
          }`}
        >
          10
        </button>

        <button
          className={` border-2 border-cyan-800 bg-cyan-800 rounded-lg px-1 py-0 mr-2 ${
            page === 10 && " disabled:opacity-80"
          }`}
          onClick={nextHandler}
          disabled={page === 10}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Pginations;
