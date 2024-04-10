import React from "react";
import PortableText from "react-portable-text";

const Paragrapgh = ({ heading, content }: any) => {
  return (
    <div className="px-10 xl:px-36 bg-black py-10 lg:py-14 text-white">
      <h1 className="text-xl sm:text-2xl mb-6 lg:text-[32px]">
        {heading}
        <span className="text-[#4ef721]"> MediQlogix</span>
      </h1>
      <div className="sm:text-lg text-sm  ">
        <PortableText
          content={content.portableText}
          serializers={{
            marks: {
              textColor: (props: any) => (
                <span style={{ color: props.mark.value }}>
                  {props.children}
                </span>
              ),
            },
          }}
        />
      </div>
    </div>
  );
};

export default Paragrapgh;
