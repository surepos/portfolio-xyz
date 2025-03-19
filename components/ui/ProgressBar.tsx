import * as React from "react";

export type ProgressBarProps = {
  completed: string | number;
  bgColor?: string;
  baseBgColor?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  labelAlignment?: "left" | "center" | "right" | "outside";
  labelColor?: string;
  labelSize?: string;
  customLabelStyles?: React.CSSProperties;
  isLabelVisible?: boolean;
  transitionDuration?: string;
  transitionTimingFunction?:
    | "ease"
    | "linear"
    | "ease-in"
    | "ease-out"
    | "ease-in-out";
  className?: string;
  dir?: "ltr" | "rtl" | "auto";
  ariaValuemin?: number;
  ariaValuemax?: number;
  ariaValuetext?: number | null;
  maxCompleted?: number;
  customLabel?: string;
  animateOnRender?: boolean;
  barContainerClassName?: string;
  completedClassName?: string;
  labelClassName?: string;
  initCompletedOnAnimation?: string | number;
  isIndeterminate?: boolean;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  width = "100%",
  borderRadius = "50px",
  labelAlignment = "right",
  labelColor = "#fff",
  labelSize = "15px",
  isLabelVisible = true,
  dir = "ltr",
  ariaValuemin = 0,
  ariaValuemax = 100,
  ariaValuetext = null,
  maxCompleted = 100,
  animateOnRender = false,
  isIndeterminate = false,
  completed,
  margin,
  padding,
  customLabelStyles,
  transitionDuration,
  transitionTimingFunction,
  className,
  customLabel,
  barContainerClassName,
  completedClassName,
  labelClassName,
}) => {
  const [isInView, setIsInView] = React.useState(false);
  const [initWidth, setInitWidth] = React.useState<string>("0%");
  const progressBarRef = React.useRef<HTMLDivElement>(null);

  const getAlignment = (
    alignmentOption: ProgressBarProps["labelAlignment"]
  ) => {
    if (alignmentOption === "left") {
      return "flex-start";
    } else if (alignmentOption === "center") {
      return "center";
    } else if (alignmentOption === "right") {
      return "flex-end";
    } else {
      return null;
    }
  };

  const alignment = getAlignment(labelAlignment);

  const getFillerWidth = (
    maxCompletedValue: ProgressBarProps["maxCompleted"],
    completedValue: ProgressBarProps["completed"]
  ) => {
    if (maxCompletedValue) {
      const ratio = Number(completedValue) / maxCompletedValue;
      return ratio > 1 ? "100%" : `${ratio * 100}%`;
    }
    return `${completedValue}%`;
  };

  const fillerWidth = getFillerWidth(maxCompleted, completed);

  // Intersection Observer to detect when progress bar is in view
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, []);

  // Animate progress bar when in view
  React.useEffect(() => {
    if (isInView && animateOnRender && !isIndeterminate) {
      requestAnimationFrame(() => setInitWidth(fillerWidth));
    }
  }, [fillerWidth, isInView, animateOnRender, isIndeterminate]);

  const containerStyles: React.CSSProperties = {
    borderRadius: borderRadius,
    padding: padding,
    width: width,
    margin: margin,
    overflow: "hidden",
  };

  const fillerStyles: React.CSSProperties = {
    width: isIndeterminate ? "100%" : initWidth,
    transition: isIndeterminate
      ? "none"
      : `width ${transitionDuration || "1s"} ${
          transitionTimingFunction || "ease-in-out"
        }`,
    borderRadius: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent:
      labelAlignment !== "outside" && alignment ? alignment : "normal",
    animation: isIndeterminate ? "indeterminate 1.5s infinite linear" : "none",
  };

  const labelStyles: React.CSSProperties = {
    padding: labelAlignment === "outside" ? "0 0 0 5px" : "5px",
    color: labelColor,
    fontWeight: "bold",
    fontSize: labelSize,
    display: !isLabelVisible ? "none" : "initial",
    ...customLabelStyles,
  };

  const outsideStyles = {
    display: labelAlignment === "outside" ? "flex" : "initial",
    alignItems: labelAlignment === "outside" ? "center" : "initial",
  };

  const completedStr =
    typeof completed === "number" ? `${completed}%` : `${completed}`;

  const labelStr = customLabel ? customLabel : completedStr;

  return (
    <div
      ref={progressBarRef}
      style={className ? undefined : outsideStyles}
      className={className}
      dir={dir}
      role="progressbar"
      aria-valuenow={isIndeterminate ? undefined : parseFloat(labelStr)}
      aria-valuemin={ariaValuemin}
      aria-valuemax={ariaValuemax}
      aria-valuetext={`${ariaValuetext === null ? labelStr : ariaValuetext}`}
    >
      <div
        style={barContainerClassName ? undefined : containerStyles}
        className={`${barContainerClassName} h-[12px] md:h-[16px] lg:h-[22px] base-bg`}
      >
        <div
          style={completedClassName ? undefined : fillerStyles}
          className={`${completedClassName} h-[12px] md:h-[16px] lg:h-[22px] filler-bg`}
        >
          {labelAlignment !== "outside" && (
            <span
              style={labelClassName ? undefined : labelStyles}
              className={labelClassName}
            >
              {labelStr}
            </span>
          )}
        </div>
      </div>
      {labelAlignment === "outside" && (
        <span
          style={labelClassName ? undefined : labelStyles}
          className={labelClassName}
        >
          {labelStr}
        </span>
      )}
      <style>
        {`
          @keyframes indeterminate {
            0% {
              width: 30%;
              transform: translateX(-50%);
            }
            50% {
              width: 30%;
              transform: translateX(250%);
            }
            100% {
              width: 30%;
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProgressBar;
