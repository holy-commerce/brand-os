import imgContainerLabelGuideForRetinolAlternativeMoisturizer1 from "figma:asset/2b7125203b0ef7205f739ee78757dec8ba848e5b.png";

function AvoidTextInThisArea() {
  return (
    <div className="absolute contents left-[290.6px] top-[97px]" data-name="Avoid text in this area">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[290.6px] top-[97px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "286.765625", "--transform-inner-height": "60.015625" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[rgba(255,255,255,0.5)] h-[60.031px] relative w-[286.78px]" data-name="white 50%">
            <div aria-hidden="true" className="absolute border border-dashed border-white inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AllowTextInThisArea() {
  return (
    <div className="absolute contents left-[59px] top-[106px]" data-name="Allow text in this area">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[59px] top-[106px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "268", "--transform-inner-height": "232" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[rgba(162,217,247,0.5)] h-[232px] relative w-[268px]" data-name="blue 50%">
            <div aria-hidden="true" className="absolute border border-[#a2d9f7] border-dashed inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContainerLabelGuideForRetinolAlternativeMoisturizer() {
  return (
    <div className="bg-white relative size-full" data-name="Container Label Guide for Retinol Alternative Moisturizer">
      <div className="absolute h-[454px] left-0 top-0 w-[439px]" data-name="Container Label Guide for Retinol Alternative Moisturizer 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.01%] max-w-none top-0 w-[130.08%]" src={imgContainerLabelGuideForRetinolAlternativeMoisturizer1} />
        </div>
      </div>
      <AvoidTextInThisArea />
      <AllowTextInThisArea />
    </div>
  );
}