import React from "react";

const Text = ({ incompletedCount }) => {
  let res = (
    <span>
      You have{" "}
      <div className="inline-block px-3 py-2 rounded-md text-sm font-medium bg-green-500 font-bold text-xl">
        {incompletedCount}
      </div>{" "}
      incompleted {incompletedCount > 1 ? "tasks" : "task"}
    </span>
  );

  return (
    <h2 className="text-xl">
      {incompletedCount > 0 ? res : "All tasks are completed"}
    </h2>
  );
};

function ActionPanel({
  handleChangeFilter,
  handleClearComplete,
  filter,
  incompletedCount,
}) {
  return (
    <div>
      <div className="mx-auto px-0 md:px-2 lg:px-4">
        <div className="flex items-center justify-between h-16">
          <Text incompletedCount={incompletedCount} />
        </div>
        <div className="flex items-center justify-between flex-wrap h-16">
          <div className="flex items-center">
            <div className="flex items-baseline space-x-4 cursor-pointer mx-1">
              <div
                className={
                  filter === "all"
                    ? "px-2 py-2 rounded-md text-sm font-medium bg-green-300"
                    : "px-2 py-2 rounded-md text-sm font-medium  hover:bg-green-200 hover:text-green-800"
                }
                onClick={() => handleChangeFilter("all")}
              >
                All
              </div>
            </div>
            <div className="flex items-baseline space-x-4 cursor-pointer mx-1">
              <div
                className={
                  filter === "active"
                    ? "px-2 py-2 rounded-md text-sm font-medium bg-green-300  "
                    : "px-2 py-2 rounded-md text-sm font-medium  hover:bg-green-200 hover:text-green-800"
                }
                onClick={() => handleChangeFilter("active")}
              >
                Active
              </div>
            </div>
            <div className="flex items-baseline space-x-4 cursor-pointer mx-1">
              <div
                className={
                  filter === "complete"
                    ? "px-2 py-2 rounded-md text-sm font-medium bg-green-300  "
                    : "px-2 py-2 rounded-md text-sm font-medium  hover:bg-green-200 hover:text-green-800"
                }
                onClick={() => handleChangeFilter("complete")}
              >
                Complete
              </div>
            </div>
            <div className="flex items-baseline space-x-4 cursor-pointer mx-1">
              <div
                className="px-1 py-2 rounded-md text-sm font-medium  bg-red-200 hover:bg-red-300 hover:text-green-800"
                onClick={() => handleClearComplete()}
              >
                Clear complete
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionPanel;
