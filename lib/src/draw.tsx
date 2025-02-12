import type { RefObject } from "react";
import React from "react";
import { PathTooltip } from "react-path-tooltip-pi";

export function drawTooltip(
  tip: string | undefined,
  tooltipBgColor: string,
  tooltipTextColor: string,
  triggerRef: RefObject<SVGElement>,
  containerRef: RefObject<SVGSVGElement>,
): JSX.Element | null {
  return tip ? (
    <PathTooltip
      fontSize={12}
      bgColor={tooltipBgColor}
      textColor={tooltipTextColor}
      key={tip}
      pathRef={triggerRef}
      svgRef={containerRef}
      tip={tip}
    />
  ) : null;
}
