import imgMicrobiomePrebioticsFaceMistSelfNamedGuideScreenshot from "figma:asset/57e082e7a7776ef4f89e64c1ea7cb4a04d46a919.png";
import imgAvoidTextInThisAreaWhite from "figma:asset/aa97c2ff02215abc3faada39639cdb5420cc34c6.png";

function AllowTextInThisAreaBlue() {
  return (
    <div className="absolute h-[320px] left-[136px] top-[122px] w-[224px]" data-name="Allow text in this area (blue)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 224 320">
        <g id="Allow text in this area (blue)">
          <rect fill="#5BAFE2" fillOpacity="0.2" height="320" width="224" />
        </g>
      </svg>
    </div>
  );
}

export default function MicrobiomePrebioticsFaceMist() {
  return (
    <div className="bg-white relative size-full" data-name="Microbiome Prebiotics Face Mist">
      <div className="absolute h-[573px] left-0 top-0 w-[587px]" data-name="Microbiome Prebiotics Face Mist SelfNamed Guide Screenshot">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMicrobiomePrebioticsFaceMistSelfNamedGuideScreenshot} />
      </div>
      <div className="absolute flex inset-[21.29%_30.49%_22.86%_61.33%] items-center justify-center">
        <div className="flex-none h-[48px] rotate-[270deg] w-[320px]">
          <div className="relative size-full" data-name="Avoid text in this area (white)">
            <img alt="" className="block max-w-none size-full" height="48" src={imgAvoidTextInThisAreaWhite} width="320" />
          </div>
        </div>
      </div>
      <AllowTextInThisAreaBlue />
    </div>
  );
}