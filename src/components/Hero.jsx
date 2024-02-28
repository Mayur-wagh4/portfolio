import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import '../index.css';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    
    <section className={`relative w-full h-screen mx-auto`}>
     {/* <ScatterBoxLoader
        primaryColor={"#6366F1"}

      />  */}
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
        <h1 className="text-white text-4xl sm:text-5xl lg:text-5xl lg:leading-normal  font-semi-bold ">
            <span className="text-gradient">
              Mayur Wagh{""}
            </span>
            <br></br>
            <span> I am </span>
            <TypeAnimation
              sequence={[
                "A Front-End Developer.",
                1000,
                "A Back-End Developer.",
                1000,
                " Full Stack Developer.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;