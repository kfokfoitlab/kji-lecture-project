import { SerializedStyles, css } from "@emotion/react";
import { camelCaseToKebabCase } from "@/utils/string";

export const MEDIA_QUERY_TABLET_SIZE = 1119;
export const MEDIA_QUERY_MOBILE_SIZE = 767;

export function generateTabletEmotionStyle(serializedStyles: SerializedStyles) {
  return css`
    @media screen and (max-width: ${MEDIA_QUERY_TABLET_SIZE}px) {
      ${serializedStyles};
    }
  `;
}

export function generateMobileEmotionStyle(serializedStyles: SerializedStyles) {
  return css`
    @media screen and (max-width: ${MEDIA_QUERY_MOBILE_SIZE}px) {
      ${serializedStyles};
    }
  `;
}

export function generateEmotionStyle(
  cssKey: keyof CSSStyleDeclaration,
  value?: string | number | false,
  unit?: "px" | "%" | "em" | "rem",
  isImportant?: boolean,
) {
  if (value === void 0) {
    return;
  }

  const style = `${value}${unit ? unit : ""}`;

  return css`
    ${`${camelCaseToKebabCase(cssKey as string)}: ${style}${
      isImportant ? " !important" : ""
    };`};
  `;
}
