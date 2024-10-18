const TransactionListFilter = () => {
  return (
    <div className="mb-4">
      <div className="text-[24px] font-medium mb-4">Bộ lọc</div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-2">
          <label>Người đặt</label>
          <input
            placeholder="Nhập người đặt"
            className="outline-none px-4 py-2 rounded-2xl transition-all duration-300 focus:scale-110 focus:shadow-btn"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Mã phòng</label>
          <input
            placeholder="Nhập mã phòng"
            className="outline-none px-4 py-2 rounded-2xl transition-all duration-300 focus:scale-110 focus:shadow-btn"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Số giao dịch</label>
          <input
            placeholder="Nhập số giao dịch"
            className="outline-none px-4 py-2 rounded-2xl transition-all duration-300 focus:scale-110 focus:shadow-btn"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Ngày đặt</label>
          <input
            type="date"
            placeholder="Chọn ngày đặt"
            className="outline-none px-4 py-2 rounded-2xl transition-all duration-300 focus:scale-110 focus:shadow-btn"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Trạng thái</label>
          <select className="outline-none px-4 py-2 rounded-2xl transition-all duration-300 focus:scale-110 focus:shadow-btn">
            <option>Tất cả</option>
            <option>Chấp nhận</option>
            <option>Đang chờ</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TransactionListFilter;
