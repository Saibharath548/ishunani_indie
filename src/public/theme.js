/**
 * Strict two-color theme: Midnight Black and Frost White.
 * Every theme color resolves to one of these two values.
 */
const BLACK = '#050606';
const WHITE = '#F5FeEF';

export const THEME = {
  colors: {
    ivory: BLACK, sage: WHITE, background: BLACK, surface: BLACK, card: BLACK,
    elevated: BLACK, text: WHITE, heading: WHITE, body: WHITE, muted: WHITE,
    border: WHITE, accent: WHITE, shadow: WHITE, soft: BLACK, marigoldPrimary: WHITE,
    jetBlack: BLACK, blackSurface: BLACK, blackCard: BLACK, blackElevated: BLACK,
    blackShadow: WHITE, ceruleanBlue: WHITE, ceruleanPrimary: WHITE,
    ceruleanBorder: WHITE, ceruleanBorderHover: WHITE, ceruleanGlow: WHITE,
    ceruleanSoft: BLACK, neonRose: WHITE, neonRoseGlow: WHITE, neonRoseSoft: BLACK,
    aubergineDark: BLACK, aubergineBase: BLACK, aubergineSurface: BLACK,
    aubergineElevated: BLACK, aubergineBorder: WHITE, aubergineShadow: WHITE,
    iceSilverPure: WHITE, iceSilverBase: WHITE, iceSilverHeading: WHITE,
    iceSilverBody: WHITE, iceSilverMuted: WHITE, iceSilverBorder: WHITE,
    iceSilverBorderHover: WHITE, iceSilverGlow: WHITE, iceSilverSoft: BLACK
  },
  fonts: {
    heading: "'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'JetBrains Mono', monospace"
  }
};

export function formatHtmlHeading(text, level = 2, highlightText = '', highlightColor = THEME.colors.iceSilverBase) {
  const content = highlightText && text.includes(highlightText)
    ? text.replace(highlightText, `<span style="color: ${highlightColor}; font-weight: 800;">${highlightText}</span>`)
    : text;
  const fontSizes = { 1: '38px', 2: '28px', 3: '22px', 4: '18px' };
  return `<h${level} style="margin: 0; font-family: ${THEME.fonts.heading}; font-size: ${fontSizes[level] || '24px'}; color: ${THEME.colors.iceSilverBase}; font-weight: 700; line-height: 1.2;">${content}</h${level}>`;
}

export function formatHtmlParagraph(text, isMuted = false) {
  const color = isMuted ? THEME.colors.iceSilverMuted : THEME.colors.iceSilverBody;
  return `<p style="margin: 0; font-family: ${THEME.fonts.body}; font-size: 15px; color: ${color}; line-height: 1.6;">${text}</p>`;
}

export function formatHtmlBadge(label) {
  return `<span style="display: inline-block; padding: 4px 12px; border-radius: 9999px; background: ${THEME.colors.iceSilverSoft}; border: 1px solid ${THEME.colors.iceSilverBorder}; color: ${THEME.colors.iceSilverBase}; font-size: 12px; font-weight: 600; font-family: ${THEME.fonts.heading}; letter-spacing: 0.5px;">${label}</span>`;
}

export function applyElementTheme(element, styles = {}) {
  if (!element) return;
  try {
    if (element.style) {
      if (styles.backgroundColor) element.style.backgroundColor = styles.backgroundColor;
      if (styles.color) element.style.color = styles.color;
      if (styles.borderColor) element.style.borderColor = styles.borderColor;
      if (styles.borderWidth) element.style.borderWidth = styles.borderWidth;
    }
  } catch (err) {}
}
