import ContactForm from "@/components/ContactForm";
import Input from "@/components/Input";

const Contact = () => {
  return (
    <div className="relative font-Mont bg-white text-black">
      <img
        alt="aviator footer"
        src="/assets/images/footer-top.png"
        className="w-full absolute -bottom-1"
      />
      <div className="w-full h-96 bg-gold pt-[174px]">
        <p className="lg:text-2xl text-xl font-semibold text-center">
          Get in touch
        </p>
        <p className="text-secondary lg:text-[84px] text-6xl uppercase font-extrabold text-center tracking-tight">
          CONTACT
        </p>
      </div>

      <div className="py-16 xl:px-24 lg:px-12 px-6">
        <p className="text-primary lg:text-2xl text-base font-bold text-center">
          Give flight to your brand's dreams by connecting with us
        </p>
      </div>

      <div className="lg:px-24 px-8 lg:pb-[200px] pb-[140px]">
        <img className="w-full" src="/assets/images/border.png" />
        <div className="bg-[#FFF7D3] pt-16 lg:px-32 px-6 pb-[120px]">
          <div className="flex justify-between items-center">
            <h1 className="text-primary font-bold lg:text-3xl text-xl">
              Let's get to work
            </h1>

            <img
              className="lg:w-[135px] w-20"
              src="/assets/images/logoicon.png"
            />
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
