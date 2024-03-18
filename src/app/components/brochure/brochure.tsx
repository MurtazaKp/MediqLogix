import React from "react";
import { PdfIcon } from "../icons/pdf";
import { DownloadIcon } from "../icons/download";

const Brochure = () => {
  return (
    <div className="flex gap-3 flex-col items-start bg-white p-5 pt-3 mt-5 rounded-xl">
      <h4 className="text-primary-green  font-bold">Brochure</h4>

      <PdfIcon />
      <p>
        Mauris sapien purus, euismod nec feugiat quis, ultricies sed urna. Cras
        id est venenatis orci porta volutpat sit amet vitae magna.
      </p>
      <a className="py-2 px-3 flex w-auto gap-3 sm:px-3 lg:px-6 rounded-full border border-[#707070]">
        Download <DownloadIcon />
      </a>
    </div>
  );
};

export default Brochure;
