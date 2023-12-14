const Pagination = () => {
  return (
    <div className="flex items-center gap-[8px]">
      <div className="border-[--primary-light-bluenavy] border px-3 py-2 rounded-full ">
        <i className="simple-icon-control-start"></i>
      </div>
      <div className="border-[--primary-light-bluenavy] border px-3 py-2 rounded-full">
        <i className="simple-icon-arrow-left"></i>
      </div>
      <div className="bg-[--primary-light-bluenavy] text-white px-4 py-2 rounded-full">1</div>
      <div className="border-[--primary-light-bluenavy] border px-4 py-2 rounded-full">2</div>
      <div className="border-[--primary-light-bluenavy] border px-4 py-2 rounded-full">3</div>
      <div className="border-[--primary-light-bluenavy] border px-4 py-2 rounded-full">4</div>
      <div className="border-[--primary-light-bluenavy] border px-3 py-2 rounded-full">
        <i className="simple-icon-arrow-right"></i>
      </div>
      <div className="border-[--primary-light-bluenavy] border px-3 py-2 rounded-full">
        <i className="simple-icon-control-end"></i>
      </div>
    </div>
  );
};

export default Pagination;
