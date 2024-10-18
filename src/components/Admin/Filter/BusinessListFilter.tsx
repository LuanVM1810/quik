const BusinessListFilter = () => {
  return (
    <div className="mb-4">
      <div className="text-[24px] font-medium mb-4">Bộ lọc</div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-2">
          <label>Tên doanh nghiệp</label>
          <input
            placeholder="Nhập tên doanh nghiệp"
            className="outline-none px-4 py-2 rounded-2xl transition-all duration-300 focus:scale-110 focus:shadow-btn"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Địa chỉ</label>
          <input
            placeholder="Nhập địa chỉ"
            className="outline-none px-4 py-2 rounded-2xl transition-all duration-300 focus:scale-110 focus:shadow-btn"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            placeholder="Email"
            className="outline-none px-4 py-2 rounded-2xl transition-all duration-300 focus:scale-110 focus:shadow-btn"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Số điện thoại</label>
          <input
            placeholder="Nhập số điện thoại"
            className="outline-none px-4 py-2 rounded-2xl transition-all duration-300 focus:scale-110 focus:shadow-btn"
          />
        </div>
        {/* <div className="flex flex-col gap-2">
          <label>Trạng thái</label>
          <select className="outline-none px-4 py-2 rounded-2xl transition-all duration-300 focus:scale-110 focus:shadow-btn">
            <option>Tất cả</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default BusinessListFilter;
