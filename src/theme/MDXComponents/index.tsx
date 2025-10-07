// src/theme/MDXComponents.tsx
// Global MDX component overrides for Docusaurus.
//
// What you get:
// - Explicit shims: ImageView, Image, RelativeLayout, TextView
// - A robust catch-all for ANY unknown Capitalized component names
//   (works even if MDX spreads/destructures the components object)

import React from "react";
import type { ComponentPropsWithoutRef } from "react";
import OriginalMDXComponents from "@theme-original/MDXComponents";

type AnyProps = Record<string, unknown> & { children?: React.ReactNode };

// ---------------- Image shims (ImageView / Image) ----------------
type ShimImageProps = ComponentPropsWithoutRef<"img"> & {
  caption?: React.ReactNode;
};

function normalizeSize(v?: string | number): number | undefined {
  if (v === undefined || v === null) return undefined;
  if (typeof v === "number") return v;
  const n = parseFloat(String(v));
  return Number.isFinite(n) ? n : undefined;
}

const Figure: React.FC<ShimImageProps> = (props) => {
  const { caption, style, width, height, ...imgProps } = props;
  const w = normalizeSize(width);
  const h = normalizeSize(height);

  const figStyle: React.CSSProperties = {
    display: "block",
    margin: "1rem auto",
    textAlign: "center",
    maxWidth: "100%",
  };

  const imgStyle: React.CSSProperties = {
    maxWidth: "100%",
    height: h ? undefined : "auto",
    ...style,
  };

  return (
    <figure style={figStyle}>
      {/* alt default to empty to keep MDX happy */}
      <img
        {...imgProps}
        width={w}
        height={h}
        style={imgStyle}
        alt={props.alt ?? ""}
      />
      {caption ? (
        <figcaption
          style={{ fontSize: "0.9em", opacity: 0.8, marginTop: "0.4rem" }}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
};

// --------------- Layout/text shims ----------------
const RelativeLayout: React.FC<AnyProps> = ({ children, ...rest }) => {
  const { style, className, ...other } = rest as AnyProps & {
    style?: React.CSSProperties;
    className?: string;
  };
  return (
    <div
      className={className as string | undefined}
      style={{
        position: "relative",
        ...((style as React.CSSProperties) || {}),
      }}
      {...other}
    >
      {children}
    </div>
  );
};

const TextView: React.FC<AnyProps> = ({ children, ...rest }) => {
  // A very permissive text wrapper; pass through class/style/props
  const { className, style, ...other } = rest as AnyProps & {
    className?: string;
    style?: React.CSSProperties;
  };
  return (
    <div className={className} style={style} {...other}>
      {children}
    </div>
  );
};

// --------------- Catch-all fallback for unknown components ---------------
const UnknownShim: React.FC<AnyProps & { __name?: string }> = ({
  __name,
  children,
  ...rest
}) => {
  const { title, className, style, ...other } = rest as AnyProps & {
    title?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
  };

  if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.warn(
      `[MDX shim] Rendering unknown component <${__name}> as a plain <div>.`,
      other
    );
  }

  return (
    <div className={className} style={style}>
      {title ? <h4 style={{ marginTop: 0 }}>{title}</h4> : null}
      {children}
    </div>
  );
};

// Start with the theme’s components + your explicit shims.
const base: Record<string, React.ComponentType<any>> = {
  ...OriginalMDXComponents,
  ImageView: Figure,
  Image: Figure,
  RelativeLayout,
  TextView,
};

// Some MDX runtimes/Object spreads may enumerate keys before destructuring,
// which would otherwise miss our dynamic fallback. This Proxy ensures:
// - property access returns a fallback for any Capitalized name
// - `prop in obj` is true for unknown Capitalized names
// - spreading/descriptor lookups see an enumerable property descriptor
const MDXComponents: Record<string, React.ComponentType<any>> = new Proxy(
  base,
  {
    get(target, prop: string | symbol, receiver) {
      if (typeof prop !== "string") {
        // @ts-ignore
        return Reflect.get(target, prop, receiver);
      }
      if (prop in target) {
        // @ts-ignore
        return Reflect.get(target, prop, receiver);
      }
      if (/^[A-Z]/.test(prop)) {
        return (props: AnyProps) => <UnknownShim __name={prop} {...props} />;
      }
      // lowercase tags fall back to default behavior
      // @ts-ignore
      return Reflect.get(target, prop, receiver);
    },
    has(target, prop: string | symbol) {
      if (typeof prop === "string" && /^[A-Z]/.test(prop)) return true;
      return prop in target;
    },
    getOwnPropertyDescriptor(target, prop: string | symbol) {
      if (
        typeof prop === "string" &&
        !(prop in target) &&
        /^[A-Z]/.test(prop)
      ) {
        // Pretend it's a real enumerable, configurable property so spreads include it
        return {
          configurable: true,
          enumerable: true,
          writable: false,
          value: (props: AnyProps) => <UnknownShim __name={prop} {...props} />,
        };
      }
      return Object.getOwnPropertyDescriptor(target, prop as any);
    },
    ownKeys(target) {
      // Don’t invent infinite keys; return actual ones.
      // (Spreads will include our explicit shims; unknowns still work via `get`.)
      return Reflect.ownKeys(target);
    },
  }
);

export default MDXComponents;
