import { IoIosArrowRoundForward } from "react-icons/io";
const Suggest = () => {
  return (
    <nav className="flex flex-col gap-3">
      <div className="flex items-center">
        <span className="text-lg">Bạn có thể thích</span>
        <IoIosArrowRoundForward size={"24px"} />
      </div>
      <div className="flex gap-5 overflow-x-auto">
        <img
          className="rounded-3xl shadow-image"
          width={"50%"}
          height="50%"
          src="https://s3-alpha-sig.figma.com/img/4089/613e/32cc863c866ffb1808649b25c240f523?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ol2QoeLIr5GEyg4O6BFoeVM6Ve58OqG4zY-tK8-Q8L8yYUrWYIxJENUECw-408fasQ7oFmJQy2LcuEr3mbchrr~vql0TcT0~27GYMfrmWjcU0IjqHT9KIP5Z0giiENIyX496olyScHJlHMyOdjVMHS81mvOVDb7N~JIsDk~vsz-6WtNyLZ52VKhU0wl4j9I~wf6FBRGbKnmj6SsHnNvGT2JPHrVcN0KVOyMZKJlPQojGCDTf~0RrNP1bJWfJr1oWqfHLxTZ3kc0c8WqHnt7Cdg3HNeDORSz4RexWzAjOFAcYRt0WA9Z~xM7ond1tQTawgHllrQ3P4bzPyqTvXsil-w__"
        />
        <img
          className="rounded-3xl shadow-image"
          width={"50%"}
          height="50%"
          src="https://s3-alpha-sig.figma.com/img/0f7d/26c7/7b4cb39777a45faa15aaf2f1ada76842?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fsuJOs~9s5ENpzhrKV376KEuscQ7rLadEiPXxIpP62aERX-BtV4uSDc~SwT3jc487VhLVYAecL5INbJP~e-8nZ4j6dsfKTivPR-6tIRpHhs5PFEqyaGVm3AJh1cSpvBpUL2NEOiqoyIHV6kBRArz99-DNG9iybaJKbK5fphy5rFHY2fCBfoVashfkH641aYpNG2bEPV8VV2nmQcMz1hjcTaITL0hsgTQLV~UplxUamLdSxhfYXmIaZHGCd6HaGEjXGw8NZcVynSBMSYUcZ9cE5u~01rNMzMTJjweqE6ajJ8MKteRza07AhlWnEcVzMayUbZWgsS~bjFrwBrX4RIvMA__"
        />
      </div>
    </nav>
  );
};

export default Suggest;
