import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black text-gray-400 p-4 py-10 grid md:grid-cols-4  sm:grid-cols-1 ">
      <div>
        <h4 className="text-2xl font-semibold">About us</h4>
        <p className="pr-7 py-5">
          Music school is a premier intstitue dedicate to teaching the art and
          science of music. We nurture talent from the groud up fostring a
          Vibrant community of musicians.
        </p>
      </div>
      <div>
        <h4 className="text-2xl font-semibold">Quick Links</h4>
        <div className="pr-7 py-5 flex flex-col gap-1">
          <Link href={"/"}>Home</Link>
          <Link href={"/courses"}>All Courses</Link>
          <Link href={"/contact"}>Contact Us</Link>
        </div>
      </div>
      <div>
        <h4 className="text-2xl font-semibold">Follow Us</h4>
        <div className="pr-7 py-5 flex flex-col gap-1">
          <Link href={"#"}>Facebook</Link>
          <Link href={"#"}>Instagram</Link>
          <Link href={"#"}>LinkedIn</Link>
        </div>
      </div>
      <div>
        <h4 className="text-2xl font-semibold">Contact Us</h4>
        <p className="pr-7 py-5 leading-7">
          1702 Aqua Marine Blvd <br />
          Avon Lake, Ohio(OH), 44012
          <br />
          (440) 653-9590
        </p>
      </div>
    </div>
  );
};

export default Footer;
