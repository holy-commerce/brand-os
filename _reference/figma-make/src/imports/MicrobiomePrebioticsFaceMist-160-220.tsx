import imgMicrobiomePrebioticsFaceMistSelfNamedGuideScreenshot from "figma:asset/57e082e7a7776ef4f89e64c1ea7cb4a04d46a919.png";
import imgAvoidTextInThisAreaWhite from "figma:asset/6a23c06a4a37c6c07df7b8046b3789c14d43db0c.png";

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
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[204px] top-[122px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "320", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[320px]" data-name="Center text on this line (green)">
            <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 4">
                <line id="Center text on this line (green)" stroke="var(--stroke-0, #34C759)" strokeWidth="4" x2="320" y1="2" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}