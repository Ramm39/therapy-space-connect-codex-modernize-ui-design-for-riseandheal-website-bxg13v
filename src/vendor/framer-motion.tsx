import {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  MutableRefObject,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import type { CSSProperties } from "react";
import type { ReactNode } from "react";

type MotionNumeric = number | string | undefined;
type MotionTarget = Record<string, MotionNumeric> | undefined;
type Variants = Record<string, Record<string, MotionNumeric>>;

type MotionTransition = {
  duration?: number;
  delay?: number;
  ease?: string;
};

type MotionViewport = {
  once?: boolean;
  amount?: number;
};

interface MotionOptions {
  initial?: MotionTarget | keyof Variants;
  animate?: MotionTarget | keyof Variants;
  whileInView?: MotionTarget | keyof Variants;
  whileHover?: MotionTarget | keyof Variants;
  whileTap?: MotionTarget | keyof Variants;
  transition?: MotionTransition;
  viewport?: MotionViewport;
  variants?: Variants;
}

type BaseProps<T extends ElementType> = MotionOptions & ComponentPropsWithoutRef<T>;

const easingMap: Record<string, string> = {
  easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  linear: "linear"
};

const resolveTarget = (
  target: MotionTarget | keyof Variants | undefined,
  variants?: Variants
): Record<string, MotionNumeric> | undefined => {
  if (!target) return undefined;
  if (typeof target === "string" && variants) {
    return variants[target];
  }
  return target as Record<string, MotionNumeric> | undefined;
};

const toUnit = (value: MotionNumeric) => {
  if (value === undefined) return undefined;
  if (typeof value === "number") return `${value}px`;
  return value;
};

const targetToStyle = (target?: Record<string, MotionNumeric>) => {
  if (!target) return {} as CSSProperties;
  const style: CSSProperties = {};
  const transform: string[] = [];

  for (const [key, rawValue] of Object.entries(target)) {
    if (rawValue === undefined) continue;
    switch (key) {
      case "x": {
        transform.push(`translateX(${toUnit(rawValue) ?? "0px"})`);
        break;
      }
      case "y": {
        transform.push(`translateY(${toUnit(rawValue) ?? "0px"})`);
        break;
      }
      case "scale": {
        transform.push(`scale(${rawValue})`);
        break;
      }
      case "scaleX": {
        transform.push(`scaleX(${rawValue})`);
        break;
      }
      case "scaleY": {
        transform.push(`scaleY(${rawValue})`);
        break;
      }
      case "opacity": {
        style.opacity = typeof rawValue === "number" ? rawValue : Number.parseFloat(String(rawValue));
        break;
      }
      default: {
        (style as Record<string, MotionNumeric>)[key] = rawValue;
      }
    }
  }

  if (transform.length > 0) {
    style.transform = transform.join(" ");
  }

  return style;
};

const buildTransitionStyle = (transition?: MotionTransition) => {
  const duration = transition?.duration ?? 0.6;
  const delay = transition?.delay ?? 0;
  const ease = transition?.ease ?? "easeOut";
  const timing = easingMap[ease] ?? easingMap.easeOut;

  return {
    transitionProperty: "all",
    transitionDuration: `${duration}s`,
    transitionDelay: `${delay}s`,
    transitionTimingFunction: timing
  } satisfies CSSProperties;
};

const assignRef = <T,>(ref: ForwardedRef<T>, value: T | null) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    (ref as MutableRefObject<T | null>).current = value;
  }
};

const createMotionComponent = <T extends ElementType>(Tag: T) => {
  type Props = BaseProps<T>;

  const MotionComponent = forwardRef<HTMLElement, Props>((props, forwardedRef) => {
    const {
      initial,
      animate,
      whileInView,
      whileHover,
      whileTap,
      transition,
      viewport,
      variants,
      style: styleProp,
      onMouseEnter,
      onMouseLeave,
      onMouseDown,
      onMouseUp,
      onTouchStart,
      onTouchEnd,
      ...rest
    } = props as BaseProps<T>;

    const nodeRef = useRef<HTMLElement | null>(null);
    const isHoveringRef = useRef(false);

    const setRefs = useCallback(
      (node: HTMLElement | null) => {
        nodeRef.current = node;
        assignRef(forwardedRef, node);
      },
      [forwardedRef]
    );

    const resolvedInitial = useMemo(
      () => resolveTarget(initial ?? animate ?? whileInView ?? {}, variants),
      [initial, animate, whileInView, variants]
    );
    const resolvedAnimate = useMemo(() => resolveTarget(animate, variants), [animate, variants]);
    const resolvedInView = useMemo(() => resolveTarget(whileInView, variants), [whileInView, variants]);
    const resolvedHover = useMemo(() => resolveTarget(whileHover, variants), [whileHover, variants]);
    const resolvedTap = useMemo(() => resolveTarget(whileTap, variants), [whileTap, variants]);

    const [currentTarget, setCurrentTarget] = useState(resolvedInitial);
    const baseTargetRef = useRef(resolvedInitial);

    useEffect(() => {
      baseTargetRef.current = resolvedInitial;
      setCurrentTarget(resolvedInitial);
    }, [resolvedInitial]);

    useEffect(() => {
      if (!resolvedAnimate) return;
      const timeout = window.setTimeout(() => {
        baseTargetRef.current = resolvedAnimate;
        setCurrentTarget(resolvedAnimate);
      }, Math.max(0, (transition?.delay ?? 0) * 1000));

      return () => window.clearTimeout(timeout);
    }, [resolvedAnimate, transition]);

    useEffect(() => {
      if (!resolvedInView || !nodeRef.current) return;
      const element = nodeRef.current;
      const once = viewport?.once ?? true;
      const threshold = viewport?.amount ?? 0.2;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              baseTargetRef.current = resolvedInView;
              setCurrentTarget(resolvedInView);
              if (once) observer.disconnect();
            } else if (!once) {
              const fallback = resolvedAnimate ?? resolvedInitial;
              baseTargetRef.current = fallback;
              setCurrentTarget(fallback);
            }
          });
        },
        { threshold }
      );

      observer.observe(element);

      return () => observer.disconnect();
    }, [resolvedInView, viewport, resolvedAnimate, resolvedInitial]);

    const transitionStyle = useMemo(() => buildTransitionStyle(transition), [transition]);
    const computedStyle = useMemo(() => targetToStyle(currentTarget), [currentTarget]);

    const handleMouseEnter: typeof onMouseEnter = (event) => {
      if (onMouseEnter) onMouseEnter(event);
      isHoveringRef.current = true;
      if (resolvedHover) {
        setCurrentTarget(resolvedHover);
      }
    };

    const handleMouseLeave: typeof onMouseLeave = (event) => {
      if (onMouseLeave) onMouseLeave(event);
      isHoveringRef.current = false;
      setCurrentTarget(baseTargetRef.current);
    };

    const handleMouseDown: typeof onMouseDown = (event) => {
      if (onMouseDown) onMouseDown(event);
      if (resolvedTap) {
        setCurrentTarget(resolvedTap);
      }
    };

    const handleMouseUp: typeof onMouseUp = (event) => {
      if (onMouseUp) onMouseUp(event);
      if (resolvedTap) {
        const fallback = isHoveringRef.current && resolvedHover ? resolvedHover : baseTargetRef.current;
        setCurrentTarget(fallback);
      }
    };

    const handleTouchStart: typeof onTouchStart = (event) => {
      if (onTouchStart) onTouchStart(event);
      if (resolvedTap) {
        setCurrentTarget(resolvedTap);
      }
    };

    const handleTouchEnd: typeof onTouchEnd = (event) => {
      if (onTouchEnd) onTouchEnd(event);
      if (resolvedTap) {
        const fallback = isHoveringRef.current && resolvedHover ? resolvedHover : baseTargetRef.current;
        setCurrentTarget(fallback);
      }
    };

    const mergedStyle = {
      ...(styleProp as CSSProperties | undefined),
      ...transitionStyle,
      ...computedStyle
    } as CSSProperties;

    return (
      <Tag
        ref={setRefs}
        style={mergedStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        {...(rest as Record<string, unknown>)}
      />
    );
  });

  MotionComponent.displayName = `Motion.${String(Tag)}`;
  return MotionComponent;
};

export const motion = {
  div: createMotionComponent("div"),
  section: createMotionComponent("section"),
  article: createMotionComponent("article"),
  span: createMotionComponent("span"),
  header: createMotionComponent("header"),
  footer: createMotionComponent("footer"),
  nav: createMotionComponent("nav"),
  main: createMotionComponent("main"),
  button: createMotionComponent("button"),
  h1: createMotionComponent("h1"),
  h2: createMotionComponent("h2"),
  h3: createMotionComponent("h3"),
  h4: createMotionComponent("h4"),
  h5: createMotionComponent("h5"),
  h6: createMotionComponent("h6"),
  p: createMotionComponent("p"),
  ul: createMotionComponent("ul"),
  li: createMotionComponent("li"),
  aside: createMotionComponent("aside"),
  figure: createMotionComponent("figure"),
  img: createMotionComponent("img"),
  form: createMotionComponent("form"),
  label: createMotionComponent("label"),
  input: createMotionComponent("input"),
  textarea: createMotionComponent("textarea"),
  a: createMotionComponent("a"),
  blockquote: createMotionComponent("blockquote")
} as const;

export type MotionProps<T extends ElementType = "div"> = BaseProps<T>;

type AnimatePresenceProps = {
  children: ReactNode;
};

export const AnimatePresence = ({ children }: AnimatePresenceProps) => <>{children}</>;
