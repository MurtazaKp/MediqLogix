import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className=" ">
      <div className=" mb-6">
        <div className="flex justify-between items-center">
          <h4 className="text-[18.5px] font-bold leading-5 text-primary-green">
            Microsoft
          </h4>
          <Image
            className=" mix-blend-darken w-[184px] h-[39px]"
            src="/images/Microsoft.svg"
            alt="Microsoft"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <p>
          Microsoft Corporation is an American public multinational corporation
          headquartered in Redmond, Washington, USA that develops, manufactures,
          licenses, and supports a wide range of products and services
          predominantly related to computing through its various product
          divisions. Established on April 4, 1975 to develop and sell BASIC
          interpreters for the Altair 8800, Microsoft rose to dominate the home
          computer operating system (OS) market with MS-DOS in the mid-1980s,
          followed by the Microsoft Windows line of OSs. Microsoft would also
          come to dominate the office suite market with Microsoft Office.
        </p>
      </div>
      <div className=" mb-6">
        <div className="flex justify-between items-center">
          <h4 className="text-[18.5px] font-bold leading-5   text-primary-green">
            Oracle
          </h4>
          <Image
            className=" mix-blend-darken w-[184px] h-[39px]"
            src="/images/Oracle.svg"
            alt="Oracle"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>

        <p>
          Oracle provides the world’s most complete, open, and integrated
          business software and hardware systems, with more than 370,000
          customers—including 100 of the Fortune 100—representing a variety of
          sizes and industries in more than 145 countries around the globe.
          Oracles product strategy provides flexibility and choice to our
          customers across their IT infrastructure. Now, with Sun server,
          storage, operating-system, and virtualization technology, Oracle is
          the only vendor able to offer a complete technology stack in which
          every layer is integrated to work together as a single system.
        </p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h4 className="text-[18.5px] font-bold leading-5 text-primary-green">
            Apple
          </h4>
          <Image
            className=" mix-blend-darken w-[184px] h-[39px]"
            src="/images/Apple.svg"
            alt="Apple"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <p>
          Apple Inc. (previously Apple Computer, Inc.) is an American
          multinational corporation that designs and markets consumer
          electronics, computer software, and personal computers. The company is
          best-known hardware products include the Macintosh line of computers,
          the iPod, the iPhone and the iPad. Apple software includes the Mac OS
          X operating system.
        </p>
      </div>
      <div className=" mb-6">
        <div className="flex justify-between items-center">
          <h4 className="text-[18.5px] font-bold leading-5  text-primary-green">
            Setoo Solutions
          </h4>
          <Image
            className=" mix-blend-darken w-[100px] me-10 h-[40px]"
            src="/images/setoo-logo.jpeg"
            alt="Setoo Solutions"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <p>
          Setoo is a niche design-led technology solution company. The company
          provides technology solutions throughout the product life cycle. The
          company focuses on advanced AI technological solutions to enhance the
          websites and applications of its clients as per their needs. Setoo is
          the development partner for MediQlogix. It has helped MediQlogix in
          product development and provided various technological solutions to
          execute them as per the needs of MediQlogix to enhance its digital
          presence.
        </p>
      </div>
    </div>
  );
};

export default Partners;
